// General calls
const express = require('express');
const router = express.Router();

// Database connection
const connection = require('./database/db');
const { CommentAction } = require('semantic-ui-react');

//Routes
router.get('/', (req, res)=>{
    res.render('index.ejs');
})
router.get('/edit', (req, res)=>{
    res.render('edit.ejs');
})

router.get('/form', (req, res)=>{
    res.render('form.ejs');
})

router.get('/cv', (req, res)=>{
   connection.query('SELECT * FROM cv WHERE id = (SELECT MAX(id) FROM cv)', (error, results)=>{
        if (error) {
            console.log('Data was not extracted')
        }else{
            console.log(results)
            res.render('cv.ejs', {results:results});
        }
     })
})


module.exports = router;