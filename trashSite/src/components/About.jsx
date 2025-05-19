import React, {use, useRef} from 'react'
import { motion,useInView,AnimatePresence } from 'motion/react';
import '../styles/About.css'
import { FadeIn } from './fadeIn';
import { useState } from 'react';
import { Email } from './Email';
import { Footer } from './Footer';
const tabs = {
  Mission:
    "To innovate purposefully, creating transformative technology and solutions that uplift communities and promote sustainability. Our focus is on delivering meaningful impact, ensuring every project drives positive, long-term change.",
  Vision:
    "To lead by example, shaping a world where technology supports human well-being and environmental stewardship. We strive to build a future defined by shared prosperity and sustainable growth.",
  Values:
    "We value integrity, collaboration, innovation, and a commitment to continuous learning. These principles guide our decision-making and actions."
};

const fadeUp={
   hidden: { opacity: 0, y: 200 },
   show:{
    opacity:1,
    y:0,
    transition:{
      duration:0.6,
      ease:"easeOut"
    }
   }
};

export const About = () => {
 const [activeTab, setactiveTab] = useState("Mission");
  const headingRef=useRef(null);
  const paraRef=useRef(null);
  const headingViewing=useInView(headingRef,{once:true});
  const paraViewing=useInView(paraRef,{once:true});
  return (
    <>
    <div className='container-1'>
    <div className='about-container'>
        <motion.div
      layout
      ref={headingRef}
      initial={{opacity:0,y:100}}
      animate={headingViewing?{opacity:1,y:0}:{}}
      transition={{duration:.6,ease:"easeOut"}}
      className="about-heading"
      
      >ABOUT US</motion.div>
      <motion.h1
      ref={headingRef}
      variants={fadeUp}
      initial="hidden"
      animate={headingViewing?"show":"hidden"}
      
      >
        Get to know us
        </motion.h1>
       <FadeIn as="p" className="para1">
          With a passion for technology and a commitment to excellence,<br />
          we empower businesses to thrive in the digital landscape.
       </FadeIn>
    </div>
    

    </div>
    
    <div className='container-2'>
       <FadeIn as="div" className="what">What we do</FadeIn>
       <FadeIn as="div" className="goal">We focus on people <br />
        and sustainability
       </FadeIn>
       
       <div className='team-info'>
       <FadeIn as='div' className='founding-year'>2025 <br /><FadeIn as='p' className="founded">founded</FadeIn> </FadeIn>
       <FadeIn as='div' className='grayLine'></FadeIn>
       <FadeIn as='div' className="team-member">11 <br /><FadeIn as='p' className="teammates">teammates</FadeIn></FadeIn>
       </div>
    
    </div>
    <div className='container-3'>
     <FadeIn as='div' className="buttons-container">
      {Object.keys(tabs).map((tab)=>(
      <div
       key={tab}
       className={`tab-button ${activeTab===tab?"active":""}`}
       onClick={()=>setactiveTab(tab)}
      
      >
      {tab}

      </div>  
      ))}
     </FadeIn>
   
   <FadeIn as='div'>
     <AnimatePresence
     mode="wait">
 <motion.div
       key={activeTab}
       className="tab-content"
       initial={{opacity:0,y:10}}
       animate={{opacity:1,y:0}}
       exit={{ opacity: 0, y:-10 }}
       transition={{ duration: 0.3 }}
       
       >
       {tabs[activeTab]}
       

       </motion.div>



</AnimatePresence>


   </FadeIn>
   
   </div>
    

   
    
    </>

  
    
  )
}
