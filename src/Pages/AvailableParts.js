import React, { useEffect, useState } from 'react';
import Parts from './Parts';
import Purchase from './Purchase';

const AvailableParts = () => {
    const [parts, setParts] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/part')
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>

            {
                parts.map(part => <Parts
                    key={part._id}
                    part={part}
                >

                </Parts>)
            }

        </div>
    );
};

export default AvailableParts;