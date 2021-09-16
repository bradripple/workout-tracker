import React, {useState} from 'react';

const DeadliftTracker = props => {
    const [ state, setState] = useState({ 
        sets: 0 
    });

    const increaseSet = () => {
        // ternarie
        const newSetNumber = state.sets >= 10 ? 10 : state.sets + 1;
        setState({
            sets: newSetNumber
        })
    }
    const clearSet = () => {
        setState({
            sets: state.sets = 0
          })
    }
    return (
        <div className="list">
            <h3>Deadlifts</h3>
            <p>{state.sets}</p>
            <button onClick={increaseSet}>Add a set</button>
            <button onClick={clearSet}>Clear sets</button>
        </div>
    );
}

export default DeadliftTracker;