import React from 'react';
import './style.css';

const Map = ({currentMap}) => {
    return (
        <div className="container">
            <img src={require(`../../imgs/${currentMap}Board.jpg`)} className="board"/>
        </div>
    );
}

export default Map;