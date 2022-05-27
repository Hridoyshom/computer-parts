import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div>



            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Username: {user.displayName}</h2>
                    <h2>UserEmail: {user.email}</h2>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Add More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;