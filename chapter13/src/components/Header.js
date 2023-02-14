import { useContext, useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import userContext from '../utils/userContext';
import { useSelector } from 'react-redux';
const Header = () => {
    const UserContext = useContext(userContext);
    const { user, setUser } = UserContext
    const isOnline = useOnline();
    const cartItems = useSelector(store => store.cart.items);
    return (
        <div className="flex px-6 justify-between items-center shadow-md">
            <Link to={"/"}><img className='h-24' data-testid="logo" src={logo} alt="logo" /></Link>
            <ul className='flex gap-10'>
                <li data-testid="online-status">{isOnline ? "🟢" : "🔴"}</li>
                <Link to={"/"}><li className='nav-item'>Home</li></Link>
                <Link to={"/about"}><li className='nav-item'>About</li></Link>
                <Link to={"/contact"}><li className='nav-item'>Contact</li></Link>
                <Link to={"/cart"}>
                    <li className='nav-item' data-testid="cart-items">Cart {cartItems.length > 0 && `${cartItems.length} - items `}</li>
                </Link>
                {
                    UserContext?.user?.name ?
                        <li className='nav-item cursor-pointer flex gap-2 items-center' onClick={() => {
                            setUser({});
                        }}>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </span>
                            <span className='mr-2'>{user?.name}</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                </svg>
                            </span>
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