import { Outlet } from 'react-router-dom';
import logo from '../images/readitlogo.png';
import { loadSubreddit } from '../features/subreddits/subredditsSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleButton } from '../../components/button/ToggleButton';
import { selecttoggleMode } from '../features/togglemode/togglemodeSlice';


export const RootLayout = () => {
    const currentMode = useSelector(selecttoggleMode);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(loadSubreddit());
    // }, [dispatch])
    

    return (
        <>
        <div className={currentMode ? 'dark' : 'light'}>
            <div className='header'>
                <img src={logo} />
                <h1>Readit</h1>
                <div className='button-side'>
                <ToggleButton />
                </div>
            </div>
            <Outlet /> 
        </div>
        </>
    )
}