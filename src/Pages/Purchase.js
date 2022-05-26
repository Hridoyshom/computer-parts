import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from './firebase.init';
import Parts from './Parts';

const Purchase = () => {
    const { id } = useParams();
    const [singleParts, setSingleParts] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/single-part/${id}`)
            .then((res => res.json()))
            .then(data => setSingleParts(data));

    }, [id])

    console.log(singleParts);
    return (
        <div >

            <h1 className='text-2xl' >name:{singleParts?.name}</h1>


            <div className='flex h-screen justify-center items-center' >
                <button class="btn flex  justify-center ">Button</button>
            </div>

        </div>
    );
};

export default Purchase;