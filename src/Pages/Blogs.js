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
                <p>
                    There are few states that are used to manage states in react application. <br />
                    1. Communication state: when we try to store information in different state then communication state helps us to do that. The error message about failed to pay or the change of selector,type etc is done by communication state. <br />
                    2.Data State: Data state temporarily store the information. Like from a project it store project name, contacts details etc. <br />
                    3.

                </p>
            </div>
        </div>
    );
};

export default Blogs;