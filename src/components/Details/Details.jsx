import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom'

const Details = () => {
    const detail = useSelector( store => {
        return store.detail;
    })

    const dispatch = useDispatch();

    const id = useParams();
    console.log(id.id);

    useEffect( () => {dispatch({ type: 'SET_DETAIL', payload: id.id })}, []);


    return (
        <div>
            {JSON.stringify(detail[0])}
            {/* I have no idea what is wrong here */}
            {Array.isArray(detail) ? detail.map( ( genre, index ) => { return ( <p key={index}>{genre.name}</p> )}) : ''}
            
            <Link to = '/'><button>Back to Movies List</button></Link>
            <Link to = '/edit-movie'><button>Edit</button></Link>
            
        </div>
    )
}

export default Details
