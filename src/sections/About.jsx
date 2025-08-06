import { section } from 'framer-motion/client'
import React, { useRef } from 'react'
import Card from '../components/Card'
import { Globe } from '../components/Globe'
import CopyEmailButton from '../components/copyEmailButton'
import FrameWorks from '../components/FrameWorks'

const About = () => {
    const grid2Container = useRef();
  return (
   <section className='c-space section-spacing'>
    <h2 className='text-heading text-3xl font-bold md:text-4xl'>About Me</h2>
    <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
        {/* Grid-1 */}
        <div className='flex items-end grid-default-color grid-1'>
            <img src="assets/coding-pov.png" className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:lef-50 md:inset-y-10 lg:scale-[2.5]' alt="" />
            <div className='z-10'>
                <p className='headtext'>Hi I'm Harsh Dalal</p>
                <p className='subtext'>A year of building and experimenting with diverse projects has helped me master both frontend and backend - crafting web experiences that are as dynamic as they are responsive.</p>
            </div>
        </div>
        {/* Grid-2 */}
        <div className="grid-default-color grid-2" ref={grid2Container}>
            <div className='flex items-center justify-center w-full h-full'>
                <p className='flex items-end text-5xl text-gray-500'>FUN IN CODING</p>
                <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="CREATE"
              containerRef={grid2Container}
              
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="BUILD"
              containerRef={grid2Container}

            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Tech Stack"
              containerRef={grid2Container}
              
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Principles"
              containerRef={grid2Container}
              
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="React"
              containerRef={grid2Container}
              
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/cplusplus.png"
              containerRef={grid2Container}
              
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/html.png"
              containerRef={grid2Container}
              
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/tailwind.png"
              containerRef={grid2Container}
              
            />

<Card
              style={{ rotate: "5deg", top: "6%", left: "80%" }}
              image="assets/logos/mongodb.png"
              containerRef={grid2Container}
              
            />

<Card
              style={{ rotate: "55deg", top: "40%", left: "50%" }}
              image="assets/logos/python.png"
              containerRef={grid2Container}
              
            />
            </div>
        </div>
        {/* Grid-3 */}
        <div className="grid-black-color grid-3">
            <div className='z-10 w-[50%]'>
                <p className='headtext'>Time Zone</p>
                <p className='subtext'>I am based in India and open to remote work WorldWide</p>
            </div>
            <figure className="absolute left-[30%] top-[10%]">
                <Globe/>
            </figure>
        </div>
        {/* Grid-4 */}
        <div className="grid-special-color grid-4">
            <div className='flex flex-col items-center justify-center gap-4 size-full'>
                <p className='headtext text-center'>Do you want to start a project together?</p>
                <CopyEmailButton/>
            </div>
        </div>
        {/* Grid-5 */}
        <div className="grid-default-color grid-5">
            <div className='z-10 w-[50%]'>
                <p className='headtext'>Tech Stack</p>
                <p className='subtext'>I specialize in a variety of tools and frameworks that help me to be dynamic with my projects and let me adapt quickly to anything I aim to learn</p>
            </div>
            <div className='absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125'>
                <FrameWorks/>
            </div>
        </div>
    </div>
   </section>
  )
}

export default About
