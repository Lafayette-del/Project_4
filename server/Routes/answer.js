import express from 'express';
import db from '../dbConnection.js';

const Router = express.Router();

// Route to get all answers
Router.get("/", (req, res) => {
    db.query("SELECT * FROM Answers", (err, results) => {
        if (err) {
            console.error("Error fetching answers:", err);
            return res.status(500).json({ message: "Error fetching answers" });
        }
        res.json(results);
    });
});

// Route to get answers by question ID
Router.get("/question/:questionId", (req, res) => {
    const { questionId } = req.params;

    db.query(
        "SELECT * FROM Answers WHERE question_id = ?",
        [questionId],
        (err, results) => {
            if (err) {
                console.error("Error fetching answers for question:", err);
                return res.status(500).json({ message: "Error fetching answers" });
            }
            if (results.length === 0) {
                return res.status(404).json({ message: "No answers found for this question" });
            }
            res.json(results);
        }
    );
});

// Route to get an answer by ID
Router.get("/:id", (req, res) => {
    const { id } = req.params;

    db.query(
        "SELECT * FROM Answers WHERE id = ?",
        [id],
        (err, result) => {
            if (err) {
                console.error("Error fetching answer:", err);
                return res.status(500).json({ message: "Error fetching answer" });
            }
            if (result.length === 0) {
                return res.status(404).json({ message: "Answer not found" });
            }
            res.json(result[0]);
        }
    );
});

// Route to create a new answer
Router.post("/", (req, res) => {
    const { question_id, answer_text } = req.body;

    if (!question_id || !answer_text) {
        return res.status(400).json({ message: "Question ID and Answer text are required" });
    }

    db.query(
        "INSERT INTO Answers (question_id, answer_text) VALUES (?, ?)",
        [question_id, answer_text],
        (err, result) => {
            if (err) {
                console.error("Error adding answer:", err);
                return res.status(500).json({ message: "Error adding answer" });
            }
            res.status(201).json({ message: "Answer added successfully", answerId: result.insertId });
        }
    );
});

// Route to update an existing answer
Router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { answer_text } = req.body;

    if (!answer_text) {
        return res.status(400).json({ message: "Answer text is required" });
    }

    db.query(
        "UPDATE Answers SET answer_text = ? WHERE id = ?",
        [answer_text, id],
        (err, result) => {
            if (err) {
                console.error("Error updating answer:", err);
                return res.status(500).json({ message: "Error updating answer" });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: "Answer not found" });
            }
            res.json({ message: "Answer updated successfully" });
        }
    );
});

// Route to delete an answer
Router.delete("/:id", (req, res) => {
    const { id } = req.params;

    db.query(
        "DELETE FROM Answers WHERE id = ?",
        [id],
        (err, result) => {
            if (err) {
                console.error("Error deleting answer:", err);
                return res.status(500).json({ message: "Error deleting answer" });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: "Answer not found" });
            }
            res.json({ message: "Answer deleted successfully" });
        }
    );
});

export default Router;
