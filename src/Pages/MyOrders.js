import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?buyerEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': ` Bearer ${localStorage.getItem('accessToken')} `
                }
            })
                .then(res => res.json())
                .then(data => setOrders(data));
        }

    }, [user])

    return (
        <div>


            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Buyer Name</th>
                            <th>Product Name</th>
                            <th>Order Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.buyerName}</td>
                                <td>{order.singleParts}</td>
                                <td>{order.quantity}</td>
                            </tr>)
                        }




                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;