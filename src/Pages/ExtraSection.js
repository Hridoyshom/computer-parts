import React from 'react';

const ExtraSection = () => {
    return (
        <div class='grid justify-items-center mt-10' >
            <div>
                <h1 class='font-bold' >Hey Do you want to see live manufacturing??</h1>
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Just Send us your Email</span>
                </label>
                <label class="input-group">
                    <span>Email</span>
                    <input type="text" class="input input-bordered" />
                    <button className='btn ml-5' >Submit</button>

                </label>

            </div>
        </div>

    );
};

export default ExtraSection;