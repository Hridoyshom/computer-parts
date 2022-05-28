import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, desc, rating } = review;
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Name{name}</h2>
                    <p  >Description:{desc}</p>
                    <p>Rating:{rating}</p>

                </div>
            </div>
        </div>
    );
};

export default ReviewCard;