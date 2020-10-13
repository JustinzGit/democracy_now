import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loading = ({ pageName }) => {
    return(
        <div id="loading_page">
            <h1>Loading {pageName}</h1>
            <Spinner animation="border" variant="primary"/>
        </div>
    )
}

export default Loading