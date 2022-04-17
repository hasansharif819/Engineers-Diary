import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Slider></Slider> */}
            <Services></Services>
        </div>
    );
};

export default Home;