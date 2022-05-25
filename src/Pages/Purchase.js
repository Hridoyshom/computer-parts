import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from './firebase.init';
import Parts from './Parts';

const Purchase = () => {
    const { purchaseId } = useParams();
    const [_id, name, img, des, price, available, minorder] = purchaseId;


    return (
        <div >
            <div className='flex justify-center items-center' >
                <h1 className='text-2xl' >name: {name}</h1><br />
            </div>
            <div className='flex h-screen justify-center items-center' >
                <button class="btn flex  justify-center ">Button</button>
            </div>

        </div>
    );
};

export default Purchase;