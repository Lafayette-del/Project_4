import express from 'express'
import db from '../dbConnection.js'

const Router = express.Router()

Router.get ("/", (req,res)=> {
    const {username, password} = req.query
    db.query ("SELECT * FROM  WHERE username = ? AND password= ? ", [username, password],  (err,result)=> {
        if (err) {
            console.log ("Error in Listening Users:", err)
        }
        else
            console.log (result)
            res.send (result)
    })
})

Router.post('/', (req, res) => {
    const { name, password } = req.body; // Get data from body
    db.query("INSERT INTO users (name, password) VALUES (?, ?)",[name, password],
             (err, result) => {
        if (err) res.status(500).send('Error adding user');
        else res.status(201).send('User added successfully');
      }
    );
  });


export default Router;
