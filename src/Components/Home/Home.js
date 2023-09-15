import React, { createContext, useEffect, useState } from 'react';
import User from '../User/User';
import usePortfoliojson from '../../Hook/usePortfoliojson';

export const UserDeatilsContext = createContext("userDetailsContext");


const Home = () => {
    // const [portfolioDB, setPorfolioDB] = useState([]);
    // useEffect(() => {
    //     fetch("portfolio.json")
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, []);

    const [portfolioDB, setPorfolioDB] = usePortfoliojson();
    // console.log(portfolioDB[0]);
    // const [id] = portfolioDB[0];

    return (


        <UserDeatilsContext.Provider value={[portfolioDB]}>

            <section>
                <div className='md:grid md:grid-cols-4 '>
                    <div>
                        <User></User>
                    </div>
                    <div className='md:col-span-3'>
                        <div>
                            {
                                portfolioDB.map(element =>
                                    <div>
                                        <h2 className='sm:text-2xl  md:text-3xl lg:text-5xl xl:text-7xl 2xl:text-9xl font-semibold md:font-bold xl:font-extrabold'>Hi, This Full Stack Developer <span>{element.full}</span></h2>
                                        <h6 className='lg:text-2xl 2xl:text-4xl font-semibold md:font-bold xl:font-extrabold'>{element.homeDescription}</h6>
                                    </div>)
                            }
                        </div>
                    </div>
                </div>
            </section>

        </UserDeatilsContext.Provider>
    );
};

export default Home;