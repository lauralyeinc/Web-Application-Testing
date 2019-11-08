// Dashboard 
// provide a button that the person in charge can press every time there is a strike ball or hit
// there is NO need to specify the type of hit (single, double, etc)
// changes recorded on this component should update the info shown by the Display component 

//count
//  balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls
//  balls and strikes reset to 0 when a hit is recorded
//  a foul increases strikes up to 2. With no strikes, a foul makes it 1 strike.  With 1 strike, a foul
//      makes it 2 strikes.  With 2 strikes a foul has no effect, count stays at 2 strikes. 

// -------------------------------------------------------------------------------------------------
import React from 'react'; 

function Dashboard(props) {
    return(
        <div className="Button-Area">
            <button onClick={props.strike}>Strike</button>
            <button onClick={props.ball}>Ball</button>
        </div>
    )
}

export default Dashboard; 