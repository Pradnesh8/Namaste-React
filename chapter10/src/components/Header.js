import { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();
    useEffect(() => {
        const isLogin = localStorage.getItem("isLoggedIn");
        console.log("isLogin", isLogin);
        if (isLogin) {
            setIsLoggedIn(true);
        }
    }, [isLoggedIn]);
    return (
        <div className="flex mx-6 justify-between items-center">
            <Link to={"/"}><img className='h-24' src={logo} alt="logo" /></Link>
            <ul className='flex gap-10'>
                <li>{isOnline ? "🟢" : "🔴"}</li>
                <Link to={"/"}><li className='nav-item'>Home</li></Link>
                <Link to={"/about"}><li className='nav-item'>About</li></Link>
                <Link to={"/contact"}><li className='nav-item'>Contact</li></Link>
                <li className='nav-item'>Cart</li>
                {
                    isLoggedIn ?
                        <li className='nav-item' onClick={() => {
                            localStorage.removeItem("isLoggedIn");
                            setIsLoggedIn(false);
                        }}>
                            Logout
                        </li> :
                        <Link to={"/login"}>
                            <li className='nav-item'>
                                Login
                            </li>
                        </Link>
                }
            </ul>

        </div >
    )
}

export default Header;