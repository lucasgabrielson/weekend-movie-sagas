import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EditMovie = () => {
    useEffect( () => { getGenres() }, []);

    const dispatch = useDispatch();

    const [ movie, setMovie ] = useState( {} );

    const detail = useSelector( store => {
        return store.detail;
    })

    const getGenres = () => {
        console.log( 'in getGenres' );
        dispatch({ type: 'SET_GENRE' });
    }

    const genres = useSelector( store => {
        return store.genres;
    })

    const handleGenreChange = event => {
        let genreID = 0;
        switch( event.target.value ) {
            case 'Adventure': 
                genreID = 1;
                break;
            case 'Animated': 
                genreID = 2;
                break;
            case 'Biographical': 
                genreID = 3;
                break;
            case 'Comedy': 
                genreID = 4;
                break;
            case 'Disaster': 
                genreID = 5;
                break;
            case 'Drama': 
                genreID = 6;
                break;
            case 'Epic': 
                genreID = 7;
                break;
            case 'Fantasy': 
                genreID = 8;
                break;
            case 'Musical': 
                genreID = 9;
                break;
            case 'Romantic': 
                genreID = 10;
                break;
            case 'Science Fiction': 
                genreID = 11;
                break;
            case 'Space-Opera': 
                genreID = 12;
                break;
            case 'Superhero': 
                genreID = 13;
                break;
            default:
                genreID = 0;
        }
        setMovie({ ...movie, genre_id: genreID })
    }

    const handleSubmit = () => {
        console.log( detail );
        if( movie.title && movie.poster && movie.description && movie.genre_id ) {
            axios.post( '/api/movie', movie )
                .then( response => {
                    console.log( 'back from /api/movie POST with:', response);
                }).catch( err => {
                    console.log( err );
                    alert( 'error adding movie to database' );
                })
        } else {
            alert( 'complete all fields' )
        }
    }

    return (
        <div>
            {JSON.stringify(detail.title)}
            <input value = { detail.title } onChange = { event => setMovie({ ...movie, title: event.target.value }) } type="text" placeholder="Title" />
            <input value = { detail.poster } onChange = { event => setMovie({ ...movie, poster: event.target.value }) } type="text" placeholder="url" />
            <input value = { detail.description } onChange = { event => setMovie({ ...movie, description: event.target.value }) } type="text" placeholder="description" />
            <select onChange = {handleGenreChange}>
                {genres.map( ( genre, index ) => {return <option key = {index}>{genre.name}</option>})}
            </select>
            <button onClick = { () => handleSubmit()}>Save</button>
            <Link to = '/'>Cancel</Link>
        </div>
    )
}

export default EditMovie
