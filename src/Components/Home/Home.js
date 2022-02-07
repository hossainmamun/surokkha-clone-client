import React from 'react';
import ApplyStep from './ApplyStep.js';
import Contact from './Contact.js';
import CoronaUpdate from './CoronaUpdate.js';
import Hero from './Hero.js';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Contact/>
            <CoronaUpdate/>
            <ApplyStep/>
            {/* <Footer/> */}
        </div>
    );
};

export default Home;