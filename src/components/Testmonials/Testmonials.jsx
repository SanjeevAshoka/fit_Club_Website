import React, { useState } from 'react';
import {testimonialsData} from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import {motion} from 'framer-motion';
import './Testmonials.css';

const Testmonials = () => {
    const transition= {type:'spring', suration: 3};
    const [selected, setSelected] = useState(0);
    const handleLeft = ()=>{
        if(selected === 0){
            setSelected(2)
        }
        else{
            setSelected((currSlected)=>currSlected-1);
        }
    }
    const handleRightt = ()=>{
        if(selected === 2){
            setSelected(0)
        }
        else{
            setSelected((currSlected)=>currSlected+1);
        }
    }
  return (
    <div className='Testimonials' id='testimonials'>
      <div className="left-t">
        <span>Testimonials</span>
        <span className='stroke-text'>What They</span>
        <span>Say About US</span>
        <motion.span
        key={selected}
        initial={{opacity: 0, x: -100}}
        animate={{opacity:1, x:0}}
        exit={{opacity:0, x:-100}}
        transition={transition}
        >
            {testimonialsData[selected].review}
        </motion.span>
        <span>
            <span style={{color: 'var(--orange', fontWeight: 'bold'}}>{testimonialsData[selected].name} </span>
            <span>- {testimonialsData[selected].status}</span>
        </span>
      </div>
      <div className="right-t">
        <motion.div
        initial={{opacity: 0, x:-100}}
        transition={{...transition, duration:2}}
        whileInView={{opacity: 1, x: 0}}
        ></motion.div>
        <motion.div
        initial={{opacity: 0, x:100}}
        transition={{...transition, duration:2}}
        whileInView={{opacity: 1, x: 0}}
        ></motion.div>
        <motion.img
        key={selected}
        initial={{opacity: 0, x: 100}}
        animate={{opacity:1, x:0}}
        exit={{opacity:0, x:-100}}
        transition={transition}
         src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
            <img src={leftArrow} onClick={handleLeft} alt="" /><img src={rightArrow}  onClick={handleRightt} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Testmonials
