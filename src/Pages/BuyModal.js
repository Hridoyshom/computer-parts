import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './firebase.init';

const BuyModal = ({ singleParts, setSingleParts }) => {
    const { name, price, minorder, available } = singleParts;

    const handleOrder = event => {
        event.preventDefault();
        const minorders = event.target.min.value;
        console.log(name, minorders);
        setSingleParts(null);
    }


    return (
        <div>
            <input type="checkbox" id="buy-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="buy-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-primary ">Buying:{name}</h3>
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-2' >
                        <input type="text" placeholder='name' class="input input-bordered w-full max-w-xs" />
                        <input type="Email" placeholder="Email" class="input input-bordered w-full max-w-xs" />
                        <input type="number" placeholder='Order Quantity' min={minorder} max={available} class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Address" class="input input-bordered w-full max-w-xs" />
                        <input type="number" placeholder="Contact number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Order" class=" btn btn-primary w-full max-w-xs" />
                    </form>
                    <div class="modal-action">
                        <label for="buy-modal" class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyModal;