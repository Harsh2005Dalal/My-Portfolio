import React from 'react'
import {motion,useScroll, useSpring, useTransform} from 'framer-motion'

const ParallaxBackground = () => {

    // We can use 2 things, 1 is the animation triggered as soon as the element enters the view port and other one is the animation depending on scrool value that can be used by scroll hook
    const {scrollYProgress} = useScroll();

    const x = useSpring(scrollYProgress, {damping: 50}) 
    const mountain3Y = useTransform(x, [0,0.5] , ["0","70%"]) // This means when scrollYProgress is 0%, mountain3Y is also 0% and when scrollYProgress is 50%, mountain3Y reaches 70%
    const mountain2Y = useTransform(x, [0,0.5] , ["0","30%"])
    const mountain1Y = useTransform(x, [0,0.5] , ["0","0%"])
    const planetsX = useTransform(x, [0,0.5] , ["0","-20%"])
  return (
    <section className='absolute inset-0 bg-black/40 '>
      <div className='relative h-screen overflow-y-hidden'>
        {/* BackgroundSky */}
        <div className='absolute inset-0 w-full h-screen -z-50'
            style={{backgroundImage:"url(/assets/sky.jpg)",
                backgroundPosition:"bottom",
                backgroundSize:"cover"
            }}
        />
        {/* Mountain Layer 3*/}
        <motion.div className='absolute inset-0 -z-40'
            style={{backgroundImage:"url(/assets/mountain-3.png)",
                backgroundPosition:"bottom",
                backgroundSize:"cover",
                y:mountain3Y,
            }}
        />
        {/* Planets Mountain layer 2 */}
        <motion.div className='absolute inset-0 -z-30'
            style={{backgroundImage:"url(/assets/mountain-2.png)",
                backgroundPosition:"bottom",
                backgroundSize:"cover",
                y:mountain2Y
            }}
        />
        {/* Mountain Layer 1 */}
        <motion.div className='absolute inset-0 -z-20'
            style={{backgroundImage:"url(/assets/mountain-1.png)",
                backgroundPosition:"bottom",
                backgroundSize:"cover",
                y:mountain1Y
            }}
        />

    <motion.div className='absolute inset-0 -z-10'
                style={{backgroundImage:"url(/assets/planets.png)",
                    backgroundPosition:"bottom",
                    backgroundSize:"cover",
                    x:planetsX
                }}
            />
      </div>
    </section>
  )
}

export default ParallaxBackground
