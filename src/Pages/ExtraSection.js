import React from 'react';

const ExtraSection = () => {
    return (
        <div>
            <div class='grid justify-items-center mt-10' >
                <div>
                    <h1 class='font-bold' >Hey Do you want to see live manufacturing??</h1>
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text font-semibold">Just Send us your Email</span>
                    </label>
                    <label class="input-group">
                        <span>Email</span>
                        <input type="text" class="input input-bordered" />
                        <button className='btn ml-3' >Send</button>

                    </label>

                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-5 my-5 px-5 py-5' >
                <div class="card lg:card-side bg-base-100 shadow-xl bg-accent text-white ">
                    <figure><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg></figure>
                    <div class="card-body">
                        <h2 class="card-title">Our Opening Time</h2>
                        <p>8AM</p>

                    </div>
                </div>
                <div class="card lg:card-side bg-base-100 shadow-xl bg-slate-800 text-white ">
                    <figure><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                    </svg></figure>
                    <div class="card-body">
                        <h2 class="card-title">Feel Free to call us</h2>
                        <p>+8801730984777</p>

                    </div>
                </div>
                <div class="card lg:card-side bg-base-100 shadow-xl bg-accent text-white ">
                    <figure><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg></figure>
                    <div class="card-body">
                        <h2 class="card-title">Our Location</h2>
                        <p>Ashulia, Savar 1320</p>

                    </div>
                </div>
            </div>
        </div>



    );
};

export default ExtraSection;