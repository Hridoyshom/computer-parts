import React from 'react';

const Parts = ({ part }) => {
    const { name, img, des, price, available, minorder } = part;
    return (
        <div  >
            <div>

            </div>
            <div class="card card-compact lg:max-w-lg bg-base-100 shadow-xl  ">
                <p>Name:{name}</p>
                <figure><img src={img} alt="" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>Description:{des}</p>
                    <p>Minimum Order:{minorder}</p>
                    <p>Available Quantity:{available}</p>
                    <p>Price:{price}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Parts;