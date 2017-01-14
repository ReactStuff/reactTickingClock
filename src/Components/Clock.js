import React from 'react'

function Clock(props){
    return (
        <div className="Clock">
            Its {new Date().toLocaleTimeString()}
        </div>
    );
}

export default Clock;