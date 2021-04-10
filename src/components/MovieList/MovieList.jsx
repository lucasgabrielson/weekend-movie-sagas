import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const toDetails = id => {
        console.log( 'in toDetails' );
        dispatch({ type: 'SET_DETAIL', payload: id });
    } // end toDetails

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <Link to = '/details' key={movie.id}>
                            <div onClick = {() => toDetails( movie.id )}>
                                <h3>{movie.title}</h3>
                                <img src={movie.poster} alt={movie.title}/>
                            </div>
                        </Link>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;