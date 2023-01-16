import { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="navbar">
            <Link to={"/"}><img src={logo} alt="logo" className='logo' /></Link>
            <ul className='nav-links'>
                <Link to={"/"}><li className='nav-item'>Home</li></Link>
                <Link to={"/about"}><li className='nav-item'>About</li></Link>
                <Link to={"/contact"}><li className='nav-item'>Contact</li></Link>
                <li className='nav-item'>📦 Cart</li>
                <li className='nav-item'>
                    {isLoggedIn ?
                        <button onClick={() => setIsLoggedIn(false)}>Logout</button> :
                        <button onClick={() => setIsLoggedIn(true)}>Login</button>
                    }
                </li>
            </ul>

        </div>
    )
}

export default Header;