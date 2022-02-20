import React from 'react';
import './style.css';
import ticketToRideLogo from '../../imgs/ticketToRideLogo.png';

const Header = () => {
    
    return(
        <header className="head">
            {/* <h1 className="title">Ticket to Ride</h1> */}
            <img src={ticketToRideLogo} />
        </header>
    )
}

export default Header;
