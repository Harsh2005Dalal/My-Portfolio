import { button } from 'framer-motion/client'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const copyEmailButton = () => {
    const [copied,setCopied] = useState(false);
    const email = 'harsh2005dalal@gmail.com'

    const copyToClipboard = ()=>{
        navigator.clipboard.writeText(email);
        setCopied(true);

        setTimeout(()=>{
            setCopied(false);
        },3000)
    }
  return (
   <motion.button className='relative px-1 py-4 text-sm text-center rounded-full w-[12rem] overflow-hidden font-extralight bg-primary transition-transform duration-400 hover:scale-105 hover:shadow-2xl hover:cursor-pointer' onClick={()=>copyToClipboard()}>
    <AnimatePresence mode="wait">
        {copied ? (
        <motion.p
        key='copied'
        initial={{opacity:0, y:-10}}
        animate = {{opacity:1,y:0}}
        exit={{opacity:0,y:-10}}
        transition={{duration:0.4, ease:"easeInOut"}}
        className='flex items-center justify-center gap-2'>
            <img src="assets/copy-done.svg" alt="" className='w-5' />
            Email Address Copied</motion.p>) :
    (
    <motion.p 
    key='copy'
    initial={{opacity:0}}
    animate = {{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:0.4}}
    className='flex items-center justify-center gap-2'>
        <img src="assets/copy.svg" alt="" className='w-5' />
        Copy Email Address</motion.p>)}
    </AnimatePresence>
   </motion.button>
  )
}

export default copyEmailButton
