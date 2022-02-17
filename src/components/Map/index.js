import React from 'react';
import ticketToRideBoard from "../../imgs/ticketToRideBoard.jpg";
import './style.css';

const Map = () => {
    return (
        <div className="container">
            <img src={ticketToRideBoard} className="board"/>
        </div>
    );
}

export default Map;