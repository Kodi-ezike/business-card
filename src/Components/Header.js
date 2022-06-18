 import { FaSun } from 'react-icons/fa';
 import { FaMoon } from 'react-icons/fa';
 import { useState } from 'react';
function Header(){

    const [show, setShow] = useState(true);
    const [theme, setTheme] = useState('dark');
    const handleClick =()=> {
        setShow(current => !current);  // 👇️ toggle visibility
        const newTheme = theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute("data-theme", theme);
        setTheme(newTheme);
        
        // localStorage.setItem(newTheme);
    };

    return(
        <header>
            <nav className="nav-bar">
                <FaSun className='light-icon' id='light' onClick={handleClick} style={{ display: show ? "none" : "inline" }} />
                <FaMoon className='dark-icon' id='dark' onClick={handleClick} style={{ display: show ?  "inline" :"none" }}/>
            </nav>
        </header>
    )
}

export default Header;