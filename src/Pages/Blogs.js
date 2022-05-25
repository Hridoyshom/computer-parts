import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h1 className='text-2xl ml-8 ' >How will i improve the performance of a react application?</h1>
                <p className=' ml-10 ' >1.I will keep the component state local where it is necessary. <br />
                    2. Will try not to rerenders the component by memorizing.<br />
                    3. I can use dynamic import to split the code.<br />
                    4. Using windowing or list visualization will help to improve the performance.<br />
                    5. Not to receive unnecessary props.
                </p>
                <h1 className='text-2xl ml-8 ' >What are the different ways to manage a state in a React application?</h1>
            </div>
        </div>
    );
};

export default Blogs;