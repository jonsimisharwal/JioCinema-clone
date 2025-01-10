import React from 'react'
import './Hotright.css'
import './Sdata.js'
import season from './season.avif'
import rajkumar from './rajkumar.avif'
import mangal from './mangallakshmi.avif'
import logout from './logout.avif'
import Kidkrish from './kidkrish.avif'
import hritrag from './hritrag.avif'
import hbo from './HBO.avif'
import harry from './harry.avif'
import Doctors from './doctors.avif'
import bleach from './bleach.webp'
import  familystar from './familystar.avif'
import flashback from './flashback.avif'

function Hotright({image}){
    return (
    < div className="episodes">
     <sdata image={hbo} />
     <img src={season}  />
    <img src={harry}  />
    <img src={bleach}  />
    <img src={hritrag}  />
    <img src={logout}  />
    <img src={familystar}  />
    <img src={Doctors}  />
    <img src={flashback} />
    <img src={rajkumar}  />
    <img src={Kidkrish}  />
    <img src={mangal}  />
    </div>);
}
export default Hotright;