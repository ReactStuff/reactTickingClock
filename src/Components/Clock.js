import React from 'react'

class Clock extends React.Component{
    render(){
        return (
            <div className="Clock">
                Its {this.props.date}
            </div>
        );
    }
}

export default Clock;