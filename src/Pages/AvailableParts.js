import React, { useEffect, useState } from 'react';
import Parts from './Parts';

const AvailableParts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])
    return (
        <div>
            <h1 className='font-bold flex justify-center  ' >Available Parts</h1>
            {
                parts.map(part => <Parts
                    key={part._id}
                    part={part}>

                </Parts>)
            }
        </div>
    );
};

export default AvailableParts;