import React from 'react'
import fifty from './fifty.js'
import jackal from './jackal.avif'
import labrea from './labrea.webp'
import lockerbie from './lockerbie.avif'
import suits from './suits.avif'
import heimer from 'oppenheimer.webp'
import data from './data.js'
import './Finest.css'
function Finest(){
    return (
    <div className='Finest'>
        <p>Peacock Finest</p>
      <div>
       <data image={fifty} />
       <data image={suits} />
       <data image={heimer} />
       <data image={jackal} />
       <data image={lockerbie} />
       <data image={labrea} />
       
      </div>
    </div>);
}