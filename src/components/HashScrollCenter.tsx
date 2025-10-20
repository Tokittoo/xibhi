'use client'

import { useEffect } from 'react'

export default function HashScrollCenter() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash
      if (!hash || hash.length < 2) return
      const id = decodeURIComponent(hash.slice(1))
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })
      }
    }

    // Scroll on initial load
    scrollToHash()

    // Scroll on hash changes (including intra-page nav)
    window.addEventListener('hashchange', scrollToHash)
    return () => window.removeEventListener('hashchange', scrollToHash)
  }, [])

  return null
}


