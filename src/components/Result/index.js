import React from 'react';
import './style.css';

const Result = ({route, resultTitle}) => {

    let rows = [];

    for(let i = 0; i < route.length; i++){
        rows.push(<div key={i}>{route[i]}</div>)
    }

    return (
        <div className="resultContainer">
            <h2>{resultTitle}</h2>
            <div>
                {rows}
            </div>
      </div>
    );
}

export default Result;