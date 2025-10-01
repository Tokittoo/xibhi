"use client";

import React from "react";

function centerToHash() {
  if (typeof window === 'undefined') return;
  const hash = window.location.hash?.replace('#', '');
  if (!hash) return;
  const el = document.getElementById(hash);
  if (!el) return;
  // Wait a tick to ensure layout is ready
  requestAnimationFrame(() => {
    el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  });
}

export default function HashScrollCenter() {
  React.useEffect(() => {
    // On initial load
    centerToHash();
    // On hash changes within the same page
    const onHash = () => centerToHash();
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return null;
}


