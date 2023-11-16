import React,{ useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaPython,
  FaJava,
  FaCode
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiGooglebard,
  SiMicrosoftbing,
  SiOpenai,
  SiMeta,
  SiObsstudio,
  SiTailwindcss
} from "react-icons/si";

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";
import { Instrument_Sans } from "@next/font/google";
import Link from "next/link";

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Programming',
        icons: [<FaJava />, <FaPython />, <FaCode />],
      },
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <SiTailwindcss />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
          
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
      {
        title: 'Editing',
        icons: [<SiAdobeaftereffects />, <SiAdobepremierepro />],
      },
      {
        title: 'AI Tools',
        icons: [<SiOpenai />,<SiGooglebard />, <SiMicrosoftbing />,<SiMeta />],
      },
      {
        title: 'Streaming',
        icons: [  <SiObsstudio /> ],
      },
    ],
  },
  {
    title: 'Achievement',
    info: [
      {
        // Using a function to return JSX
        title: () => (
          <>
            Build <Link href="#" className="font-bold">🍁MapleLaw AI</Link> The first product of <Link href="#" className="text-accent font-bold">AIksha.AI</Link>
          </>
        ),
        stage: '2023',
      },
      {
        title: () => (
        <> 
          Founder of <Link href="#" className="text-accent font-bold">AIksha.AI</Link>
        </>
        ),
        stage: '2023',
      },
      {
        title: 'Personal Budget App for Students',
        stage: '2023',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Web and AI Developer - AlertPass Inc ',
        stage: '2023',
      },
      {
        title: 'Technical Customer Assistance - Canadian Tire',
        stage: '2023',
      },
      {
        title: 'Part-Time YouTuber/Streamer/Editor',
        stage: '2018 - Present',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Cloud Computing - Humber College, Toronto, CA',
        stage: '2024',
      },
      {
        title: 'Web Development - Humber College, Toronto, CA',
        stage: '2023',
      },
      {
        title: 'Computer Engineering - L.D. College of Engineering, IN',
        stage: '2021',
      }
     
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
  <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
    <Circles />
    {/* avatar */}
    <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className="hidden xl:flex absolute -bottom-32 -left-[370px]">
      <Avatar />
    </motion.div>
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6"> 
    <div className="flex-1 flex flex-col justify-center">
      <motion.h2 variants={fadeIn('right', 0.6)} initial='hidden' animate='show' exit='hidden'  className="h2">Bridging <span className="text-accent">dreams</span> and <span className="text-accent">reality</span>.</motion.h2>
      <motion.p variants={fadeIn('right', 0.6)} initial='hidden' animate='show' exit='hidden' className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
        I'm <span className="font-normal">Kenan Gain</span>, a tech entrepreneur and the mind behind <Link href="#" className="text-accent font-bold">AIksha.ai</Link>. My background in computer engineering, combined with a strong interest in web development, artificial intelligence, and blockchain, led me to establish my company. At <Link href="#" className="text-accent font-bold">AIksha.ai</Link>, we've developed <Link href="#" className="font-normal">🍁MapleLaw AI</Link>, our first major project, which reflects my commitment to using technology for practical, real-world applications. My journey in this field is driven by a passion to innovate and solve challenges through tech solutions.
        </motion.p>
        {/* counters  */}
        <div className="hidden md:flex md:max-w-xl xl:max-w-none mx-aut0 xl:mx-0 mb-8">
          <div className="flex flex-1 aling-center xl:gap-x-6">
            {/* experience  */}
            <div className="relative flex-1 after:w-[1px] after:h-full
             after:bg-white/10 after:absolute after:top-0 after:right-0
            ">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={5} duration={5}/> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Been in the tech space</div>
            </div>
            <div className="relative flex-1 after:w-[1px] after:h-full
             after:bg-white/10 after:absolute after:top-0 after:right-0
            ">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={3} duration={5}/>
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Degrees and Certificate</div>
            </div>
            <div className="relative flex-1 after:w-[1px] after:h-full
             after:bg-white/10 after:absolute after:top-0 after:right-0
            ">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={1} duration={5}/>
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Company Founded</div>
            </div>
           
            <div className="relative flex-1 after:w-[1px] after:h-full
             after:bg-white/10 after:absolute after:top-0 after:right-0
            ">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={2} duration={5}/> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Products</div>
            </div>
            <div className="relative flex-1 after:w-[1px] after:h-full
             after:bg-white/10 after:absolute after:top-0 after:right-0
            ">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={1.45} duration={5} decimals={2}/>K
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">YouTube Subscriber</div>
            </div>

            
          </div>
        </div>
    </div>
    <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
    <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
      {aboutData.map((item, itemIndex) => {

        return ( 
        <div 
        key={itemIndex}
        className={`${
          index === itemIndex && 
          'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} 
          cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
          onClick={() => setIndex(itemIndex)}
        >
          {item.title}
          </div>
        );
      })}
    </div>
    <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
      {aboutData[index].info.map((item, itemIndex)=> {
        return (
        <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
          {/* title */}
          <div>
        {typeof item.title === "function" ? item.title() : item.title}
      </div>
          <div className="hidden md:flex">-</div>
          <div>{item.stage}</div>
          {/* icons */}
          <div className="flex gap-x-4">
          {item.icons?.map((icon, itemIndex) => {
            return <div className="text-2xl">{icon}</div>;
          })}
          </div>
        </div>
        );
      })}
    </div>
    </div>
    </div>
  </div>
  );
};

export default About;
