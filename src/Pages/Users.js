import React from 'react';
import { useQuery } from 'react-query';
import Loading from './Loading';
import UserRow from './UserRow';

const Users = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://frozen-spire-69456.herokuapp.com/user').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>all users: {users.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map(user => <UserRow
                                key={user._ud}
                                user={user}
                                refetch={refetch}
                            ></UserRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;