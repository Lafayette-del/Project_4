import express from "express"
import cors from "cors"
import mysql from "mysql2"

const app = express();

app.use(express.json());

app.use(cors({ origin: "http://localhost:3000"}));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Diomond18!!",
    database: "QAnswer"
  })

  db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connected to database");
  });
  export default db;