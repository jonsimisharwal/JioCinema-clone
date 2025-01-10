import React from 'react'
import Spot1 from './spot1.avif'
import Spot2 from './spot2.avif'
import './Spotlight.css'
function Spotlight(){
    return (
        <div className='spots'>
        <p>In The Spotlight</p>
        <div className='spotlight'>
        <img src={Spot1} alt="error" />
        <img src={Spot2} alt="error"/>
        </div>
        </div>
    );
}
export default Spotlight;