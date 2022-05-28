import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://frozen-spire-69456.herokuapp.com/reviews`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json '
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json()
                .then(result => {
                    console.log(result);
                }))
    };


    return (
        <div className='flex  justify-center items-center'   >
            {/* <h1>add review</h1> */}
            <form onSubmit={handleSubmit(onSubmit)}>

                <div class="form-control w-full max-w-xs">

                    <input type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs"
                        {...register("Name"
                        )} />

                </div>
                <div class="form-control w-full max-w-xs">

                    <input type="text" placeholder="Description" class="input input-bordered w-full max-w-xs"
                        {...register("description")} />

                </div>
                <div class="form-control w-full max-w-xs">

                    <input type="number" placeholder="Rating" class="input input-bordered w-full max-w-xs"
                        {...register("rating")} />

                </div>



                <input className='btn w-full max-w-xs' type="submit" />
            </form>
        </div>
    );
};

export default AddReview;