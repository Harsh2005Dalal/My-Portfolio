import { img } from "framer-motion/client";
import { OrbitingCircles } from "./OrbitingCircles";
import { File, Settings, Search, } from "lucide-react";



const FrameWorks = () => {
    const skills = [
        "auth0",
        "blazor",
        "cplusplus",
        'csharp',
        'css3',
        'dotnet',
        'dotnetcore',
        'git',
        'github',
        'html5',
        'javascript',
        'microsoft',
        'react',
        'sqlite',
        'tailwindcss',
        'vitejs',
        'threejs'
];

  return (
    <div className="relative  h-[15rem] w-full">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
    <OrbitingCircles>
        {skills.map((skill,index)=>(
            <Icons key ={index} src={`assets/logos/${skill}.svg`}/>
            ))}
    </OrbitingCircles>

    <OrbitingCircles radius={100} reverse iconSize={25}>
    {skills.reverse().map((skill,index)=>(
            <Icons key ={index} src={`assets/logos/${skill}.svg`}/>
            ))}
    </OrbitingCircles>
    </div>
  </div>
  )
}

export default FrameWorks

const Icons = ({src})=>{
    return (<img src={src} alt="logo" className="rounded-sm hover:scale-110 duration-200" />)
}
