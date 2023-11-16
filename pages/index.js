// next image 
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

//components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

//framer motion
import { motion } from 'framer-motion';

//variants 
import { fadeIn } from '../variants'
import Link from "next/link";


const Home = () => {
  return <div className="bg-primary/60 h-full">
    {/* text */}
    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
        {/* title */}
        <h1 className="h1">
          Hello,I'm <br />
          <span className="text-accent">
          <TypeAnimation
           sequence={[
            500,
        // Same substring at the start will only be typed out once, initially
        'Kenan Gain.',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Computer Engineer.',
        1000,
        'Web Developer.',
        1000,
        'YouTuber.',
        1000,
        'Video Editor.',
        1000,
        'UI/UX Designer.',
        1000,
        'Founder.',
        500,
      ]}
      wrapper="span"
      speed={40}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
          </span>
        </h1>
        <motion.p 
        variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden"
         className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
          Kenan Gain is the founder of <Link href="#" className="text-accent font-bold">AIksha.ai</Link>, the company that developed  <Link href="#" className="font-bold">🍁MapleLaw AI</Link>, Canada's first virtual AI assistant  🍁MapleLaw Bot for legal questions.<Link href="#" className="font-bold">🍁MapleLaw AI</Link>'s MapleLawBot provides information to answer all your legal questions.
        </motion.p>
        {/* btn */}
        <div className="flex justify-center xl:hidden relative">
          <ProjectsBtn />
        </div>
        <motion.div className="hidden xl:flex" variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden">
          <ProjectsBtn />
        </motion.div>
      </div>
    </div>
    {/* image */}
    <div className="w-[1200px] h-full absolute right-0 bottom-0">
      {/* bg img */}
      <div className="bg-none  xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
     {/* particles */}
    <ParticlesContainer />
     {/* avtar imag */}
     <motion.div 
     variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit="hidden" transition={{duration: 1, ease: 'easeInOut'}}
      className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
      <Avatar />
     </motion.div>
    </div>
    
    </div>;
};

export default Home;
