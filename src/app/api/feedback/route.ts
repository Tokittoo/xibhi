import { NextResponse } from 'next/server'

// Simple in-memory store for feedback counts. Suitable for local/dev.
// For production persistence, replace with a database.
const feedbackCounts = new Map<string, { up: number; down: number }>()

export const runtime = 'nodejs'

function getCounts(page: string) {
  if (!feedbackCounts.has(page)) {
    feedbackCounts.set(page, { up: 0, down: 0 })
  }
  return feedbackCounts.get(page)!
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = searchParams.get('page') || 'default'
  const counts = getCounts(page)
  return NextResponse.json({ page, ...counts, total: counts.up + counts.down })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const page: string = body?.page || 'default'
    const vote: 'up' | 'down' = body?.vote
    if (vote !== 'up' && vote !== 'down') {
      return NextResponse.json({ error: 'Invalid vote' }, { status: 400 })
    }
    const counts = getCounts(page)
    counts[vote] += 1
    return NextResponse.json({ page, ...counts, total: counts.up + counts.down })
  } catch (e) {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }
}


