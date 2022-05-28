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
                <p className=' ml-10 '>
                    There are few states that are used to manage states in react application. <br />
                    1. Communication state: when we try to store information in different state then communication state helps us to do that. The error message about failed to pay or the change of selector,type etc is done by communication state. <br />
                    2.Data State: Data state temporarily store the information. Like from a project it store project name, contacts details etc. <br />
                    3.Control State: This state conducts with the inputs from the user. Like form inputs, selected items etc. <br />
                    4. Session state: This state actually works with the users username, password, permission etc. <br />
                    5. Location State: Location state is connected to the locations. Like The URLs. That we see on the URL bar.

                </p>
                <h1 className='text-2xl ml-8 ' >How does prototypical inheritance work??</h1>
                <p className=' ml-10'>
                    Prototypical inheritance is a method in javascript. It is being used to inherit the properties of another object. It also inherit the methods. It reuse as prototypes from existing objects.
                </p>
                <h1 className='text-2xl ml-8 ' >Why you do not set the state directly in React??</h1>
                <p className=' ml-10'>
                    If i set the state directly that will cause some problems to my application. <br />
                    1. After calling the state it can replace the update that are being made in the application. <br />
                    2. It does not change "this.state immediately." <br />
                    3. One can lose the control of the whole components .

                </p>
                <h1 className='text-2xl ml-8 ' >What is a unit test? Why should write unit tests??</h1>
                <p>
                    Unit testing is part of testing any software. Small parts or module on a whole software is tested here. <br /> Like: procedure, functions interfaces etc. that they are running perfectly or not. <br />
                    <br />

                    We should write unit testing because it is a part of testing any software.It is difficult to test a whole software at a time. So dividing the software into smallest part help to test the software efficiently and effectively.

                </p>
            </div>
            <div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Hridoy Shom</h2>
                        <p>My Email: hshom827@gmail.com </p>
                        <p>Education: B.sc in CSE </p>
                        <p>Skills as a developer: HTML,JAVASCRIPT,React,Nodejs,MongoDB </p>
                        <p>project link: https://computer-parts-2a1a0.web.app/</p>
                        <p><p>project link: https://computer-parts-2a1a0.web.app/</p></p>
                        <p><p>project link: https://computer-parts-2a1a0.web.app/</p></p>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;