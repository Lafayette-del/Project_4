import express from 'express'
import cors from 'cors'
import userRouts from './Routes/user.js'
import questionRouts from './Routes/question.js'
import answerRouts from './Routes/answer.js'
import db from "./dbConnection.js";


const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.use ('/users', userRouts)
app.use ('/questions', questionRouts)
app.use ('/answers', answerRouts)

  app.get ('/', (req,res)=> {
    res.send ("The main server Running")
  })
  
  app.listen (3002, ()=>{
  console.log ("Server runnnig on port 3002")
  })
