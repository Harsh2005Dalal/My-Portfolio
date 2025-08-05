import { section } from 'framer-motion/client'
import React from 'react'
import { mySocials } from '../constants'

const Footer = () => {
  return (
   <section className='flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space'>
    <div className='bg-gradient-to-r from-transparent via-neutral-700 h-[1px] w-full'></div>
    <div className='flex gap-2'>
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
    </div>
    <div className='flex gap-3'>
        {mySocials.map((social,index)=>(
            <a href={social.href} key={index}>
                <img src={social.icon} alt={social.name} className='w-5 h-5' />
            </a>
        ))}
    </div>
    <p>© 2025 Harsh. All Rights Reserved.</p>
   </section>
  )
}

export default Footer
