import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import g1 from '../../Image/slider/g1.jpg';
import g2 from '../../Image/slider/g2.jpg';
import g3 from '../../Image/slider/g3.jpg';

const Slider = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <div className="container">
            <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={g1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Google Mega Hard Disc</h3>
                    <p>Googles mega hard disc drive for storing all types of data.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={g2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Hard Disc Recovery System</h3>
                    <p>We always try to recover the internal hard disk as well as external.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={g3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Giant Memory Sell</h3>
                    <p>
                        Storing a large amount of data for every millisecond.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Slider;