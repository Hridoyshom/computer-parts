import React from 'react';
import Banner from './Banner';
import Business from './Business';
import ExtraSection from './ExtraSection';
import Navbar from './Navbar';
import Parts from './Parts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Business></Business>
            <ExtraSection></ExtraSection>

        </div>
    );
};

export default Home;