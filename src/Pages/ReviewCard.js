import React from 'react';

const ReviewCard = ({ review }) => {
    const { Name, description, rating } = review;
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Name:{Name}</h2>
                    <p  >Description:{description}</p>
                    <p>  Rating:{rating}</p>

                </div>
            </div>
        </div>
    );
};

export default ReviewCard;