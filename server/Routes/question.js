import express from 'express'
import db from '../dbConnection.js'

const Router = express.Router()

Router.get("/", (req, res) => {
    db.query("SELECT * FROM Question", (err, results) => {
        if (err) {
            console.error("Error fetching questions:", err);
            return res.status(500).json({ message: "Error fetching questions" });
        }
        res.json(results);
    });
});

// Route to get a question by ID
Router.get("/:id", (req, res) => {
    const { id } = req.params;

    db.query(
        "SELECT * FROM Question WHERE id = ?",
        [id],
        (err, result) => {
            if (err) {
                console.error("Error fetching question:", err);
                return res.status(500).json({ message: "Error fetching question" });
            }
            if (result.length === 0) {
                return res.status(404).json({ message: "Question not found" });
            }
            res.json(result[0]);
        }
    );
});

export default Router;