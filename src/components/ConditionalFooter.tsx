'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Footer from '@/components/Footer'

export default function ConditionalFooter() {
  const pathname = usePathname()
  if (pathname?.startsWith('/CVE-26206-2025') || pathname === '/links') return null
  return <Footer />
}


