import React from 'react'
import Checkmate from './Checkmate.avif'
import football from './football.avif'
import Gameslife from './gameslife.webp'
import rags from './rags.avif'
import ride from './ride.avif'
import vadapav from './vadapav.avif'
import munawar from './munawar.avif'
import './Creators.css'
import Cdata from './Cdata.js'
function Creators(){
    return(
        <div className='Creators'>
            <p>Trending Creators</p>
            <div className='creatorchannel'> 
  <Cdata image={munawar} />
  <Cdata image={vadapav} />
  <Cdata image={ride} />
  <Cdata image={rags} />
  <Cdata image={Gameslife} />
  <Cdata image={football} />
  <Cdata image={Checkmate} />
  

            </div>
        </div>
    );
}
export default Creators;