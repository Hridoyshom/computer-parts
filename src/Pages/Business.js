import React from 'react';

const Business = () => {
    return (
        <div>
            <h1 className='text-slate-600 text-2xl   text-center font-bold ' > Have Look at Our Business Summary  </h1>
            <div class="stats shadow flex justify-center ">

                <div class="stat">
                    <div class="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="stat-title">Total Feedback</div>
                    <div class="stat-value text-primary">25.6K</div>
                    <div class="stat-desc">21% more than last month</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div class="stat-title">Sitee visted</div>
                    <div class="stat-value text-secondary">2.6M</div>
                    <div class="stat-desc">21% more than last month</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">

                    </div>
                    <div class="stat-title">Happy Clients</div>
                    <div class="stat-value">86%</div>
                    <div class="stat-title">100k+ orders delivered</div>
                    <div class="stat-desc text-secondary">21k+ orders preparing </div>
                </div>

            </div>
        </div>
    );
};

export default Business;