import React from 'react'

const AuthErrors = ({messages}) => {
    return (
        <div>
            <h2 style={{color: 'red'}}>Error!</h2>
            {messages.map(message => <p><b>{message}</b></p>)}
        </div>
    )
}

export default AuthErrors