import React from 'react';
import User from '../User/User';

const Home = () => {

    return (
        <section>
            <div className='md:grid md:grid-cols-4 '>
                <div>
                    <User></User>
                </div>
                <div className='md:col-span-3'>
                    <div>
                        <h2 className='sm:text-2xl  md:text-3xl lg:text-5xl xl:text-7xl 2xl:text-9xl font-semibold md:font-bold xl:font-extrabold'>Hi, This Full Stack Developer <span>{"user name"}</span></h2>

                        <h6 className='lg:text-2xl 2xl:text-4xl font-semibold md:font-bold xl:font-extrabold'>I design and code beautifully simple things and i love what i do. Just simple like that!</h6>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;