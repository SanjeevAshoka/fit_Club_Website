import React from 'react'
import './Hero.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter'

const Hero = () => {
  const transition = {type: 'spring', duration: 3};
  const mobile= window.innerWidth<=768 ? true : false;
  return (
    <div className='hero' id='home'>
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
           <motion.div
           initial = {{left: mobile? '180px': '220px'}}
           whileInView={{left: '8px'}}
           transition={{...transition, type:'tween'}}
           >
           </motion.div>
          {/* <div></div> */}
          <span>The best Fitness Club in Town</span>
        </div>
        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span class='stroke-text'>Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal</span>
            <span> Body</span>
            </div>
            <div><span>
              In Here We Will Help You Shape & Build Your Ideal Body &
              live up your life to Fullest.
              </span>
            </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span><NumberCounter end={140} delay={5} className="increment" preFix="+ "/></span><span>Expert Coaches</span>
          </div>
          <div>
            <span><NumberCounter end={978} delay={5} className="increment" preFix="+ "/></span><span>Members Joined</span>
          </div>
          <div>
            <span><NumberCounter end={50} delay={5} className="increment" preFix="+ "/></span><span>Fitness Programs</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
           <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className='btn'>Join Now</button>
        <motion.div
        transition={transition}
        initial = {{right: '-1rem'}}
        whileInView={{right: '4rem'}}
         className="heart-rate">
          <img src={Heart} alt="" />
          <span>HEART RATE</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={hero_image} alt=""  className='hero-image'/>
        <motion.img
        initial={{right: '11rem'}}
        whileInView={{right: '26rem'}}
        transition={transition}
         src={hero_image_back} alt=""  className='hero-image-back'/>
        <motion.div 
        transition={transition}
        initial = {{right: '37rem'}}
        whileInView={{right: '28rem'}}
        className="calories">
          <img src={Calories} alt="" />
          <div>
          <span>CLORIES BURNED</span>
          <span>220kcl</span>
          </div>
        </motion.div>
      </div>

    </div> 
  )
}

export default Hero

