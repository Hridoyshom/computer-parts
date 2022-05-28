import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { handleSubmit } = useForm();
    const onSubmit = data => console.log(data);



    return (
        <div className='flex  justify-center items-center'   >
            {/* <h1>add review</h1> */}
            <form onSubmit={handleSubmit(onSubmit)}  >
                <input type="text" placeholder="Name" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Description" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Rating" class="input input-bordered w-full max-w-xs" />
                <input className='btn flex justify-center items-center max-w-xs' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddReview;