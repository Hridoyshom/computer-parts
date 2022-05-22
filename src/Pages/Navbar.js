import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/review'>Review</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/login'>Login</Link></li>

    </>
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl">Computer Parts</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>


            </div>
            <div>
                <div class="carousel w-full">
                    <div id="item1" class="carousel-item w-full">
                        <img src="https://i.ibb.co/ZJ1MJGZ/rsz-241rygojrsil-ac-sx450.jpg" class="w-full" />
                    </div>
                    <div id="item2" class="carousel-item w-full">
                        <img src="https://www.intel.com/content/dam/www/global/badges/core-x-series-framed-badge-rwd.jpg.rendition.intel.web.480.270.jpg" class="w-full" />
                    </div>
                    <div id="item3" class="carousel-item w-full">
                        <img src="https://image.semiconductor.samsung.com/image/samsung/p6/semiconductor/products/consumer-storage/internal-ssd/image-featured-benefit-pc-980.png?$ORIGIN_PNG$" class="w-full" />
                    </div>

                </div>
                <div class="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" class="btn btn-xs">1</a>
                    <a href="#item2" class="btn btn-xs">2</a>
                    <a href="#item3" class="btn btn-xs">3</a>

                </div>
            </div>
        </div>



    );
};

export default Navbar;