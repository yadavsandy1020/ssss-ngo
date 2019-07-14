import React from 'react';
import image1 from '../images/1.jpg'
import image2 from '../images/2.jpg'
import image3 from '../images/3.jpg'
import image4 from '../images/4.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
const Slider = ()=> {
    
        return (
            <Carousel showThumbs= {false}>
                <div>
                    <img src={image1} width ="200px" height="400px"/>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={image2} width ="200px" height="400px" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={image3} width ="200px" height="400px" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={image4} width ="200px" height="400px" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={image2} width ="200px" height="400px" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                {/* <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div> */}
            </Carousel>
        );
    
}

export default Slider