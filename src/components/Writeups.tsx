'use client'

import Card from './Card'
import { motion } from 'motion/react'
import { childVariant } from './ui/animation-wrapper'

import type { Project } from './Projects'

const writeups: Project[] = [
  {
    title: 'CVE-26206-2025',
    description: 'A critical CSRF vulnerability in Sell Done Storefront v1.0 and its impact.',
    image: '/CVE-26206-2025.webp',
    liveLink: '/CVE-26206-2025',
    liveLabel: 'Read',
    sourceLink: '',
    tags: [],
  },
]

function Writeups() {
  return (
    <div id='writeups' className='mt-12'>
      <motion.h1 variants={childVariant} className='text-4xl ml-2 my-8 font-bold font-sans tracking-tight max-md:text-center text-balance'>
        Writeups
      </motion.h1>
      <div className='grid gap-4 md:auto-rows-[10rem]'>
        {writeups.map((w) => (
          <motion.div variants={childVariant} key={w.title} className='h-full w-full flex'>
            <Card project={w} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Writeups


