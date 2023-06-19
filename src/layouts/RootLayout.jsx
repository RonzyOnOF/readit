import { Outlet } from 'react-router-dom';
import logo from '../images/readitlogo.png';
import { loadSubreddit } from '../features/subreddits/subredditsSlice';
import { useEffect } from 'react';

export const RootLayout = () => {

    return (
        <>
        <div className='dark'>
            <div className='header'>
                <img src={logo} />
                <h1>Readit</h1>
                <div className='button-side'>
                </div>
            </div>
            <Outlet /> 
        </div>
        </>
    )
}