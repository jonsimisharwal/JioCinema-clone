import React from 'react'
import './channellogo.css'
import Data from './data.js'
import hbo from './hbo.avif'
import mtv from './mtv.avif'
import nick from './nick.avif'
import peacockhub from './peacockhub.avif'
import colors from './colors.avif'
import colorsbangla from './colors-bangla.avif'
import colorsmarathi from './colors-marathi.avif'
import colorsgujarat from './colors-gujarati.avif'
import colorsinfinity from './colors-infinity.avif'
function Channellogo(){
    return(
        < div className='logoss'>
   <Data image={colors} />
   <Data  image={mtv}/>
   <Data image={colorsmarathi} />
   <Data image={nick} />
   <Data image={peacockhub} />
   <Data  image={hbo}/>
   <Data image={colorsmarathi} />
   <Data image={colorsbangla}/>
   <Data image={colorsgujarat}/>
   <Data image={colorsinfinity}/>
  
   </div>
    );
}
export default Channellogo;