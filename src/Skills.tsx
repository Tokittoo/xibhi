import React from 'react'
import { AnimationWrapper, childVariant } from './ui/animation-wrapper';
import * as motion from 'motion/react-client';
import {  FaBug, FaTerminal, FaAtom, FaRobot } from 'react-icons/fa';
import { BsCloudCheck } from 'react-icons/bs';
import { FiSettings } from "react-icons/fi";
import { MdBrush } from 'react-icons/md';
import { IoRadio } from "react-icons/io5";
type Skill = {
  name: string;
  icon: React.ReactNode
}

const cybersecurity: Skill[] = [
  { name: "Web App Exploitation", icon: <FaBug size={18} /> },
  { name: "Offensive Reverse Engineering", icon: <FiSettings size={18} /> },
  { name: "Cloud Security and Operations", icon: <BsCloudCheck size={18} /> },
  { name: "Wireless Security Assessment", icon: <IoRadio size={18} /> },
  { name: "Scripting and Automation", icon: <FaTerminal size={18} /> },
  { name: "Adversarial ML & AI Security", icon: <FaRobot size={18}/> },
  { name: "2D/3D Concept Artist", icon: <MdBrush size={18} /> },
  { name: "Physics Programming", icon: <FaAtom size={18} /> }
];


const Skills = () => {
  return (
    <div className='my-8'>
      <motion.h1 variants={childVariant} className='text-3xl md:text-4xl font-sans font-bold tracking-tight'>Skills</motion.h1>
      <motion.div variants={childVariant} className='my-4'>
        <AnimationWrapper className='flex flex-wrap gap-2'>
          {
            cybersecurity.map(l => (
              <motion.div variants={childVariant} key={l.name}>
                <Tag tag={l} />
              </motion.div>
            ))
          }
        </AnimationWrapper>
      </motion.div>
      
    </div>
  )
}

const Tag = ({ tag }: { tag: Skill }) => (
  <div className='flex items-center gap-2 bg-muted border border-border rounded-lg px-3 py-1 transition-colors duration-200 hover:border-foreground/70 select-none'>
    <span className='text-foreground/80 flex items-center' aria-label={tag.name}>
      {tag.icon}
    </span>
    <span className='text-sm'>{tag.name}</span>
  </div>
)

export default Skills
