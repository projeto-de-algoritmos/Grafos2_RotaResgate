import React from 'react';
import './style.css';
import ticketToRideLogo from '../../imgs/ticketToRideLogo.png';

const Header = () => {
    
    return(
        <header className="head">
            <img src={ticketToRideLogo} />
        </header>
    )
}

export default Header;
