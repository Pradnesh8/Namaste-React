import { useState } from 'react';
import logo from '../../assets/logo.png';


const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="navbar">
            <img src={logo} alt="logo" className='logo' />
            <ul className='nav-links'>
                <li className='nav-item'>Home</li>
                <li className='nav-item'>About</li>
                <li className='nav-item'>Contact</li>
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