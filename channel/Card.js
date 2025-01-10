import React from 'react'
import './Card.css'
function Card({backgroundImage,channelname,title,Shows,language}){
    return(
      <div className='card-container'>
      <div
      className="card"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Dynamically set background image
      }}
    >
        <div className='card-content'>
          <h1>{channelname}</h1>
          <h4>{title}</h4>
          <p>{Shows}.{language}</p>
        </div>
        </div>
        </div>
    );


}
export default Card;