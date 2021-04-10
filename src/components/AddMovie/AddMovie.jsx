import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const AddMovie = () => {
    useEffect( () => { getGenres() }, []);

    const dispatch = useDispatch();

    const [ movie, setMovie ] = useState( {} );

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
        console.log( movie );
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
            <input onChange = { event => setMovie({ ...movie, title: event.target.value }) } type="text" placeholder="Title" />
            <input onChange = { event => setMovie({ ...movie, poster: event.target.value }) } type="text" placeholder="url" />
            <input onChange = { event => setMovie({ ...movie, description: event.target.value }) } type="text" placeholder="description" />
            <select onChange = {handleGenreChange}>
                {genres.map( ( genre, index ) => {return <option key = {index}>{genre.name}</option>})}
            </select>
            <button onClick = { () => handleSubmit()}>Submit</button>
        </div>
    )
}

export default AddMovie

/**
- an input field (for the movie title)
- an input field (for the movie poster image URL))
- a textarea (for the movie description)
- a dropdown (for the genres)

The Add Movie page should have the buttons:

- `Cancel` button, which should bring the user to the Home/List Page
- `Save` button, which should update the title and description in the database and bring the user to the Home/List Page (which now has the new movie)
 */
