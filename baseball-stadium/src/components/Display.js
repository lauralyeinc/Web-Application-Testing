// display 
//  count of balls and strikes for the at-bat
//  should be updated when the user records activity on the Dashboard component 

import React from 'react';

function Display(props) {
    return (
        <div>
            <h2>Strikes: {props.strikes}</h2>
            <h2>Balls: {props.balls}</h2>
        </div>
    )
}

export default Display; 