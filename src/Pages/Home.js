import React from 'react';
import AvailableParts from './AvailableParts';
import Banner from './Banner';
import Business from './Business';
import ExtraSection from './ExtraSection';
import Navbar from './Navbar';
import Parts from './Parts';
import Review from './Review';
import ReviewCard from './ReviewCard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AvailableParts></AvailableParts>
            <Business></Business>
            <Review></Review>

            <ExtraSection></ExtraSection>

        </div>
    );
};

export default Home;