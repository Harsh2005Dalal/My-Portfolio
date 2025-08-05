import { span } from 'framer-motion/client'
import React, { useState } from 'react'
import ProjectDetails from './ProjectDetails'

// const [Modal, setModal] = useState(true);



const Project = ({title,description,subDescription, href, image, tags, setPreview}) => {
  const [isVisible,setIsVisible] = useState(false);
  return (
    <>
    <div className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0 pb-15 pt-15" onMouseEnter={()=>setPreview(image)} onMouseLeave={()=>setPreview(null)}>
        <div>
      <p className='text-2xl'>{title}</p>
      <div className='flex gap-5 mt-2 text-sand'>
        {tags.map((tag)=>(
            <span key={tag.id}>{tag.name}</span>
        ))}
      </div>

        </div>
      <button onClick = {()=>{setIsVisible(true)}} className='flex items-center gap-1 cursor-pointer hover-animation'>
        Read More
        <img src="assets/arrow-right.svg" alt="w-5" />
      </button>
    </div>
    <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full'/>
    {isVisible && (<ProjectDetails title={title} description={description} subDescription={subDescription} image={image} tags={tags} href={href} closeModal = {()=>{setIsVisible(false)}}/>)}
    </>
  )
}

export default Project
