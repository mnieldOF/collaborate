import React, { useState, useRef } from 'react';
import Menu from './Menu';
import NavBar from './NavBar';
import { useOnClickOutside } from '../hooks';

const Header = () => {
    const [showNav, setShowNav] = useState(false);
    const node = useRef(); 
    useOnClickOutside(node, () => setShowNav(false));   

    return(
        <div ref={node}>
            <Menu showNav={showNav} setShowNav={setShowNav} />
            <NavBar showNav={showNav} setShowNav={setShowNav} />
        </div>
    )
}

export default Header;