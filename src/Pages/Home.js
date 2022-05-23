import React from 'react';
import Banner from './Banner';
import Business from './Business';
import ExtraSection from './ExtraSection';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ExtraSection></ExtraSection>
            <Business></Business>
        </div>
    );
};

export default Home;