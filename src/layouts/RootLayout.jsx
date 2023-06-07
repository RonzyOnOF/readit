import { Outlet } from 'react-router-dom';
import logo from '../../public/images/readitlogo.png';

export const RootLayout = () => {

    return (
        <>
            <div className='header'>
                <img src={logo} />
                <h1>Readit</h1>
            </div>
            <Outlet /> 
        </>
    )
}