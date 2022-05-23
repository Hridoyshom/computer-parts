import React from 'react';

const Banner = () => {
    return (
        <div>
            <div>
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
            <div className='flex justify-center font-bold text-2xl' >
                <h1>Available Parts</h1>
            </div>
        </div>

    );
};

export default Banner;
