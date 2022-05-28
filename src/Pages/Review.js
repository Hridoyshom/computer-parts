import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import ReviewCard from './ReviewCard';

const Review = ({ review }) => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://frozen-spire-69456.herokuapp.com/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ' >
            {
                reviews.map(review => <ReviewCard
                    key={review._id}
                    review={review}>

                </ReviewCard>)
            }
        </div>
    );
};

export default Review;