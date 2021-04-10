import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Details = () => {
    const detail = useSelector( store => {
        return store.detail;
    })
    return (
        <div>
            {JSON.stringify(detail)}
            <Link to = '/'><button>Back to Movies List</button></Link>
        </div>
    )
}

export default Details
