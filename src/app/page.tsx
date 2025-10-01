import React from 'react'

import Intro from '@/components/Intro'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import { AnimationWrapper } from '@/components/ui/animation-wrapper'
import Writeups from '@/components/Writeups'
import HallOfFame from '@/components/HallOfFame'

const Home = () => {
  return (
    <AnimationWrapper>
      <Intro />
      <HallOfFame />
      <section id="Skills">
        <Skills />
      </section>
      <section id="Writeups">
        <Writeups />
      </section>
      <section id="Projects">
        <Projects />
      </section>
    </AnimationWrapper>
  )
}

export default Home