import React from 'react';
import tick from '../../assets/whiteTick.png';
import {plansData} from '../../data/plansData';
import './Plans.css';

const Plans = () => {
  return (
    <div className='plans-container' id='plans'>
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{gap: '2rem'}}>
        <span className='stroke-text'>Ready To Start</span>
        <span>Your Journey</span>
        <span className='stroke-text'>Now With Us</span>
      </div>

      <div className="plans">
        {plansData.map((plan, index)=>
        <div className='plan' key={index}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>${plan.price}</span>

            <div className="features">
                {plan.features.map((feature, ind)=><div className='feature' key={ind}>
                    <img src={tick} alt="" />
                    <span>{feature}</span>
                </div>)}
            </div>

            <div><span>See More Benefits -></span></div>

            <button className="btn">Join Now</button>

        </div>)}
      </div>
    </div>
  )
}

export default Plans
