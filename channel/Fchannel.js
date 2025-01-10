import React from 'react'
import Channel from './Channel'
import './Fchannel.css'
import Card from './Card'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import showsData from './showsData';
const Fchannel=()=>{
  const settings = {
    dots: true,           // Enable navigation dots
    infinite: true,       // Infinite scroll
    speed: 500,           // Transition speed
    slidesToShow: 3,      // Number of cards visible at a time
    slidesToScroll: 1,    // Number of cards to scroll at a time
    responsive: [         // Add responsiveness
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      
      {
        breakpoint: 500, // For small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
   return(
    <div>
    <div className='Fchannel' >
      <Channel name="For You" />
      <Channel name="Cricket" />
      <Channel name="Bigg Boss" />
      <Channel name="FREE Movies" />
      <Channel name="BBK" />
      <Channel name="MTV Hustle 4" />
      <Channel name="Kids & Family" />
      <Channel name="AUS vs IND" />
      <Channel name="FREE Anime" />
      <Channel name="ISL" />
      <Channel name="FREE Shows" />
      <Channel name="Reality" />
      <Channel name="Premium" />
      <Channel name="TATA IPL" />
      <Channel name="Top 10" />
      <Channel name="Studlos" />
      <Channel name="Coming Soon" />
      <Channel name="Creators Adda" />
      <Channel name="Tennis" />
      <Channel name="Live" />
      <Channel name="News" />
      <Channel name="TV & Movies" />
      
    </div>
    <Slider {...settings}>
  <div className='card-wrapper'>
    {showsData.map((show, index) => (
      <div className='tcard' key={index}>
        <Card
          backgroundImage={show.backgroundImage}
          channelname={show.channelname}
          title={show.title}
          Shows={show.Shows}
          language={show.language}
        />
      </div>
    ))}
  </div>
</Slider>

    </div>
   );
}
export default Fchannel;