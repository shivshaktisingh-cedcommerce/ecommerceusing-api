import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Carousel.css"


const carousel=()=> {
  return (        
               <Carousel width={"100%"} showThumbs={false} autoPlay={true} infiniteLoop={true} id="carousel_div_id">
                <div className="img_class">
                    <img src="1.jpg" alt=""/> 
                   
                </div>
                <div className="img_class">
                    <img src="2.jpg" alt=""/>
                   
                </div>
                <div className="img_class">
                    <img src="3.jpg" alt=""/>
                 
                </div>
            </Carousel>
         

  )
}
export default carousel
