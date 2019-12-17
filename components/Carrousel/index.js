import React, { useEffect, useState } from 'react';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './styles.css';

export default function Carrousel() {

    return (
        <React.Fragment>
            <div>
                <Carousel 
                    className='carousel'
                    showThumbs={false}
                    interval={3000}   
                    autoPlay={true}  
                    infiniteLoop={true}   
                    swipeable={true}  
                    dynamicHeight={true}      
                >
                    <div>
                        <img src="/assets/lucas1.jpg" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="/assets/lucas2.jpg" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>                
                        <img src="/assets/lucas3.jpeg" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </div>
        </React.Fragment>
    );
}