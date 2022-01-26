import React from 'react'
import { useLocation } from 'react-router'

function NoMatch() {

    let location = useLocation
    return (
        <div>
            <h3>Page Not Found <code>{location.pathname}</code></h3>
        </div>
    )
}

export default NoMatch
