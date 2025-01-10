import React from 'react'
import './Channel.css'
function Channel({name}){
    const createChannel = (channelName) => {
        console.log(`Channel Created: ${channelName}`);
      };
    return <>
    <div className='channel'>
    <button onClick={() => createChannel(name)}>{name}</button>
    </div>
    </>
}
export default Channel;