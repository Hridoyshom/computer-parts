import React, { useEffect, useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import BuyModal from './BuyModal';
import auth from './firebase.init';
import Parts from './Parts';

const Purchase = () => {
    const { id } = useParams();
    const [singleParts, setSingleParts] = useState({});
    const [user, loading, error] = useAuthState(auth);



    useEffect(() => {
        fetch(`http://localhost:5000/single-part/${id}`)
            .then((res => res.json()))
            .then(data => setSingleParts(data));

    }, [id])

    // console.log(singleParts);
    return (
        <div className='flex justify-center items-center' >

            <div class="card w-96 bg-base-100 shadow-2xl mb-11 ">
                <div class="card-body">
                    <h2 class=" text-2xl">Name:{singleParts?.name}</h2>
                    <p class=" text-xl">Description:{singleParts?.des}</p>
                    <p class=" text-xl">Price:{singleParts?.price}</p>
                    <p class=" text-xl">Available Quantity:{singleParts?.available}</p>
                    <p class=" text-xl">Minimum Order:{singleParts?.minorder}</p>
                    <div class="card-actions justify-end">

                        <label for="buy-modal"
                            onClick={() => setSingleParts(singleParts)}
                            class="btn btn-outline">Buy Now</label>
                    </div>
                    {singleParts && <BuyModal user={user} setSingleParts={setSingleParts} singleParts={singleParts} ></BuyModal>}
                </div>
            </div>




        </div>
    );
};

export default Purchase;