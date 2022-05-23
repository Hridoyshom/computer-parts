import React from 'react';
import AvailableParts from './AvailableParts';
import Banner from './Banner';
import Business from './Business';
import ExtraSection from './ExtraSection';
import Navbar from './Navbar';
import Parts from './Parts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AvailableParts></AvailableParts>
            <Business></Business>
            <ExtraSection></ExtraSection>

        </div>
    );
};

export default Home;