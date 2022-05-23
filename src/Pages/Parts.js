import React from 'react';

const Parts = ({ part }) => {
    const { name, img, des, price, available, minorder } = part;
    return (
        <div>
            <div>

            </div>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">

                <figure><img src={img} alt="" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Parts;