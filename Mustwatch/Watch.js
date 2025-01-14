import React from 'react'
import Vikram from './vikram.avif'
import sindhubaadh from './sindhubaadh.avif'
import nishabdham from './nishabdham.avif'
import ismart from './ismart.avif'
import hanuman from './hanuman.avif'
import familystar from './familystar.avif'
import halikitab from './halikitab.avif'
import busan from './busan.avif'
import Aranmanai from './Aranmanai.webp'
import bediya from './bediya.avif'
import dedanadan from './dedanadan.avif'
import Venom from './Venom.avif'
import './Watch.css'
import data from './wdata.js'
function Watch(){
    return (
    <div className='watches'>
     <p>Must watch Movies</p>
     <div>
      <data image={Vikram}/>
      <data image={sindhubaadh}/>
      <data image={nishabdham}/>
      <data image={ismart}/>
      <data image={hanuman}/>
      <data image={familystar}/>
      <data image={busan}/>
      <data image={halikitab}/>
      <data image={Venom}/>
      <data image={bediya}/>
      <data image={dedanadan}/>
      <data image={Aranmanai}/>
     </div>
    </div>
    );
}
export default Watch;