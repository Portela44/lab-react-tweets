import React from 'react'

export default function Timestamp(props) {
    const {time} = props;
    return (
        <div>
            <span className="timestamp">{time}</span>
        </div>
    )
}
