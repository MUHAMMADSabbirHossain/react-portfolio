import React, { useContext } from 'react';
import "./User.css";
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { UserDeatilsContext } from '../Home/Home';

const User = () => {

    const [portfolioDB, setPorfolioDB] = useContext(UserDeatilsContext)
    console.log(portfolioDB[0]);
    return (
        <div>
            <div>
                <h2>Full stack Web-Developer</h2>
                <div className=''>
                    <img src="..." alt="user_name" />
                </div>
                <div>
                    <h5>Email: </h5>
                    <p>Address</p>
                    <p><small>@year. All Rigths Reserved.</small></p>
                </div>
                <div>
                    Socail media links.
                </div>
                <button><EnvelopeIcon className='h-6 w-6 text-white inline'></EnvelopeIcon> HIRE ME!</button>
            </div>
        </div>
    );
};

export default User;