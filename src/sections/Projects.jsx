import { section } from "framer-motion/client"
import { myProjects } from "../constants"
import Project from "../components/Project"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

const Projects = () => {
  const x= useMotionValue(0);
  const y = useMotionValue(0);
  const [positionReady, setPositionReady] = useState(false);

useEffect(() => {
  x.set(window.innerWidth / 2);
  y.set(window.innerHeight / 2);
  setPositionReady(true);
}, []);


  const springX = useSpring(x,{damping:10, stiffness:50});
  const springY = useSpring(y,{damping:10, stiffness:50});

  const [preview, setPreview] = useState(null);


  const handleMouseMove = (e)=>{
    x.set(e.clientX+20);
    y.set(e.clientY+20);
  }

  return (
    <section onMouseMove={handleMouseMove} className="relative c-space section-spacing">
        <h2 className="text-heading">My Selected Projects</h2>
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full"></div>
        {myProjects.map((project)=>(
            <Project key={project.id} {...project} setPreview={setPreview}/>
        ))}
        {preview && positionReady && (<motion.img src={preview} alt="" className="fixed top-0 left-0 z-50 object-contain h-56 rounded-lg shadow-lg pointer-events-none w-80" style={{x:springX, y:springY}}/>)}
    </section>
  )
}

export default Projects
