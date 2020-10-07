import React from 'react'

const Error = ({messages}) => {
    return (
        <div>
            <h3>Error!</h3>
            <ul>{messages.map((message, index) => <li key={index}>{message}</li>)}</ul>
        </div>
    )
}

export default Error