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
            <p>{Array.isArray(detail) ? <span>{detail[0].title}</span> : ''}</p>
            
            <br />
            {Array.isArray(detail) ? <img src={detail[0].poster} /> : ''}

            <p>Genres:</p>
            {Array.isArray(detail) ? detail.map( ( genre, index ) => { return ( <p key={index}>{genre.name}</p> )}) : ''}

            <p>Description:</p>
            <p>{Array.isArray(detail) ? <span>{detail[0].description}</span> : ''}</p>

            {/* {JSON.stringify(detail[0].title)} */}
            
            
            <Link to = '/'><button>Back to Movies List</button></Link>
            
        </div>
    )
}

export default Details
