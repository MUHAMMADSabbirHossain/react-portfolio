import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, IdentificationIcon, DocumentIcon, SparklesIcon, AcademicCapIcon, UserGroupIcon, NewspaperIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <div>
            <div>
                Logo
            </div>
            <div>
                <h1>Header Title</h1>
            </div>
            <div>
                <nav>
                    <Link to="/"><HomeIcon className='h-6 w-6 text-white'></HomeIcon></Link>

                    <Link to="/about"><IdentificationIcon className='h-6 w-6 text-white'></IdentificationIcon></Link>

                    <Link to="/resume"><DocumentIcon className='h-6 w-6 text-white'></DocumentIcon></Link>

                    <Link to="/services"><SparklesIcon className='h-6 w-6 text-white'></SparklesIcon></Link>

                    <Link to="/skills"><AcademicCapIcon className='h-6 w-6 text-white'></AcademicCapIcon></Link>

                    <Link to="/portfolios"><UserGroupIcon className='h-6 w-6 text-white'></UserGroupIcon></Link>

                    <Link to="/testimonial"><NewspaperIcon className='h-6 w-6 text-white'></NewspaperIcon></Link>

                    <Link to="/contact"><EnvelopeIcon className='h-6 w-6 text-white'></EnvelopeIcon></Link>

                </nav>
            </div>
        </div>
    );
};

export default Header;