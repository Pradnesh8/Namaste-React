const logo = require("../../assets/logo.png");

const Header = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="logo" className='logo' />
            <ul className='nav-links'>
                <li className='nav-item'>Home</li>
                <li className='nav-item'>About</li>
                <li className='nav-item'>Contact</li>
                <li className='nav-item'>📦 Cart</li>
            </ul>
        </div>
    )
}

export default Header;