import React from 'react';
import tick from '../../assets/tick.png';
import nike from '../../assets/nike.png';
import adidas from '../../assets/adidas.png';
import nb from '../../assets/nb.png';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';

import './Reasons.css';

const Reasons = () => {
  return (
      <div className='Reasons' id='reasons'>
          <div className="left-r">
              <img src={image1} alt="" />
              <img src={image2} alt="" />
              <img src={image3} alt="" />
              <img src={image4} alt="" />
            </div>

           <div className="right-r">
            <span>Some Reasons</span>
            <div>
                <span className='stroke-text'>Why</span>
                <span> Choose Us?</span>
            </div>

              <div className='details-r'>
                  <div><img src={tick} alt=""/><span>Over 140+ Expert Coach</span></div>
                  <div><img src={tick} alt=""/><span>Train Smarter and Fasyer Than Before</span></div>
                  <div><img src={tick} alt=""/><span>1 Free Program for New Member</span></div>
                  <div><img src={tick} alt=""/><span>Reliable Partners</span></div>
              </div>

              <span style={{color: 'var(--gray)', textAlign: 'center'}}>Our Partners</span>
               <div className="partners">
                  <img src={nike} alt="" />
                  <img src={adidas} alt="" />
                  <img src={nb} alt="" />
                </div>
           </div>
      </div>
  )
}

export default Reasons


