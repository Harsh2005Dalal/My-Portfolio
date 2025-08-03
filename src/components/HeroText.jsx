import React from 'react'
import { FlipWords } from './FlipWords'
import {motion} from 'framer-motion'

const HeroText = () => {
    const variants = {
        hidden:{opacity:0, x:-50},
        visible:{opacity:1, x:0}
    }
  return (
    <div
    style ={{maxHeight : "100vh"}}

     className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>
        {/* DesktopView */}
        <motion.div
               variants={variants}
               initial = "hidden"
               animate = "visible"
               transition={{delay : 1}}
        className="hidden md:flex flex-col c-space">
            <h1 className='text-4xl font-medium'>Hi I'm Harsh</h1>
            <div className='flex flex-col items-start'>
                <motion.p
                    variants={variants}
                    initial = "hidden"
                    animate = "visible"
                    transition={{delay : 1.2}}
                 className="text-2xl font-medium text-neutral-300">A Developer crushed between college and his creativity</motion.p>
                <motion.div
                    variants={variants}
                    initial = "hidden"
                    animate = "visible"
                    transition={{delay : 1.5}}
                className='text-6xl font-medium pb-8'><FlipWords words={["Passionate", "Busy", "Enthusiast", "Ready"]}/></motion.div>
                <motion.p
                    variants={variants}
                    initial = "hidden"
                    animate = "visible"
                    transition={{delay : 1.8}}
                className='text-4xl font-medium text-neutral-300'>IIT ROPAR</motion.p>
            </div>
        </motion.div>
        {/* MobileView */}
        <motion.div 
               variants={variants}
               initial = "hidden"
               animate = "visible"
               transition={{delay : 1}}
        className='flex flex-col md:hidden c-space'>
            <p className='text-4xl font-medium'>Hi, I'm Harsh Dalal</p>
            <div
            >
                <motion.p
                    variants={variants}
                    initial = "hidden"
                    animate = "visible"
                    transition={{delay : 1.2}}
                className='text-2xl font-black text-neutral-300'>A Crazy developer</motion.p>
                <motion.div
                    variants={variants}
                    initial = "hidden"
                    animate = "visible"
                    transition={{delay : 1.5}}
                className='pb-4 text-xl'>
                    <FlipWords words={["Passionate", "Busy", "Enthusiast", "Ready"]}/>
                </motion.div>
                <motion.p
                    variants={variants}
                    initial = "hidden"
                    animate = "visible"
                    transition={{delay : 1.8}}
                className='text-4xl font-black text-neutral-300'>IIT Ropar</motion.p>
            </div>
        </motion.div>
      
    </div>
  )
}

export default HeroText
