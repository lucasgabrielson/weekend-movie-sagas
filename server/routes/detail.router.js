const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', ( req, res ) => {
    console.log( 'in router.get /api/detail/', req.params.id);
    const queryText =  `SELECT * FROM movies WHERE id = $1`;
    pool.query( queryText, [ req.params.id ] )
        .then( results => {
            res.send( results.rows );
        }).catch( err => {
            console.log( err );
            alert( 'error fetching movie details' );
        })
})

module.exports = router;