import express from 'express'
import db from '../dbConnection.js'

const Router = express.Router()

Router.get ("/", (req,res)=> {
    const {email, password} = req.query
    db.query ("SELECT * FROM users  WHERE email = ? AND password= ? ", [email, password],  (err,result)=> {
        if (err) {
            console.log ("Error in Listening Users:", err)
        }
        else
            console.log (result)
            res.send (result)
    })
})

Router.post('/', (req, res) => {
    const { username, email, password } = req.body; // Get data from body
    console.log("red.body:", req.body)
    console.log(username, email, password)

    db.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)",[username, email, password],
             (err, result) => {
        if (err) res.status(500).send('Error adding user');
        else res.status(201).send('User added successfully');
      }
    );
  });


export default Router;
