import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Details = () => {
    const detail = useSelector( store => {
        return store.detail;
    })


    return (
        <div>
            {JSON.stringify(detail[0])}
            {detail.map( genre => { return ( <p>{genre.name}</p> )})}
            <Link to = '/'><button>Back to Movies List</button></Link>
            <Link to = '/edit-movie'><button>Edit</button></Link>
            
        </div>
    )
}

export default Details
