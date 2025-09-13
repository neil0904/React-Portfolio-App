import { RiReactjsLine } from "react-icons/ri";
import { DiHtml5, DiCss3, DiDotnet, DiJavascript1 } from "react-icons/di";
import { SiCplusplus, SiAngular, SiCanva, SiFigma, SiMysql, SiTailwindcss, SiBootstrap, SiGithub } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion } from 'framer-motion';


const iconVariants = (duration) => ({
    initial: { y: 10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"

        }
    },
});

const Tech = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2
        whileInView={{opacity:1, y: 0}}
        initial={{opacity:0, y: -100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>        
            Technplogies
        </motion.h2>
        <div className='flex flex-wrap items-center justify-center gap-10'>
            <motion.div 
            variants = {iconVariants(2.5)}
            initial= "initial" animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
             
            <motion.div 
            variants = {iconVariants(3)}
            initial= "initial" animate = "animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiAngular className="text-7xl text-red-400"/>
            </motion.div>

              <motion.div 
            variants = {iconVariants(5)}
            initial= "initial" animate = "animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiHtml5 className="text-7xl text-orange-400"/>
            </motion.div>

             <motion.div 
            variants = {iconVariants(2)}
            initial= "initial" animate = "animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiCss3 className="text-7xl text-blue-600"/>
            </motion.div>
           
               <motion.div 
            variants = {iconVariants(4.5)}
            initial= "initial" animate = "animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiJavascript1 className="text-7xl text-yellow-400"/>
            </motion.div>

             <motion.div 
            variants = {iconVariants(6)}
            initial= "initial" animate = "animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className="text-7xl text-green-500" />
            </motion.div>

             <motion.div 
            variants = {iconVariants(3.5)}
            initial= "initial" animate = "animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiDotnet className="text-7xl text-purple-800"/>
            </motion.div>

             <motion.div 
            variants = {iconVariants(4)}
            initial= "initial" animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiCplusplus className="text-7xl text-blue-400"/>
            </motion.div>

             <motion.div 
            variants = {iconVariants(2)}
            initial= "initial" animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <p className="text-7xl text-purple-400">C#</p>
            </motion.div>

             <motion.div 
            variants = {iconVariants(7)}
            initial= "initial" animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMysql className="text-7xl  text-blue-400"/>
            </motion.div>
          
            <motion.div 
            variants = {iconVariants(5)}
            initial= "initial" animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiTailwindcss className="text-7xl text-cyan-400"/>
            </motion.div>

             <motion.div 
            variants = {iconVariants(3)}
            initial= "initial" animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiBootstrap className="text-7xl text-purple-600"/>
            </motion.div>
           

             <motion.div 
            variants = {iconVariants(2.5)}
            initial= "initial" animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiGithub className="text-7xl text-gray-400"/>
            </motion.div>

             <motion.div 
            variants = {iconVariants(5)}
            initial= "initial" animate = "animate"className='rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center'>
            <SiCanva className="text-7xl" style={{ fill: 'url(#gradient1)' }} />
            <svg width="0" height="0">
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" /> {/* cyan */}
                <stop offset="100%" stopColor="#a855f7" /> {/* purple */}
                </linearGradient>
            </svg>
            </motion.div>

             <motion.div 
            variants = {iconVariants(2.5)}
            initial= "initial" animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiFigma className="text-7xl text-gray-400"/>
            </motion.div>


        </div>
    </div>
  );
}

export default Tech;
