# Project_4
To-Do List
## Description
To-Do List is a lightweight task management application designed to help users organize their day-to-day activities. This app allows you to add, edit, and delete tasks, mark them as completed, and organize them by categories or deadlines. It’s simple, intuitive, and effective.
Usage

## Add Tasks:
Click the "Add Task" button to create a new task. Enter the task details, such as title, description, and due date.
Complete Tasks:
Mark tasks as completed by clicking the checkbox next to each task.
Edit or Delete Tasks:
Use the edit or delete options to modify or remove tasks from the list.
Filter Tasks:
Filter tasks based on their status (completed or pending) or by categories.

## Features

Add, edit, and delete tasks.
Mark tasks as completed or pending.
Organize tasks with categories and due dates.
Filter tasks by status or category.

## Technologies Used

Frontend: React.js
Backend: Node.js, Express.js
Database: MySQL
Styling: CSS and Bootstrap
Environment Management: dotenv

Screenshots
# Mysql Tables 
 CREATE TABLE `Question` (
  `idQuestion` int NOT NULL,
  `question` varchar(45) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idQuestion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Answer` (
  `idAnswer` int NOT NULL,
  `answer` varchar(45) NOT NULL,
  PRIMARY KEY (`idAnswer`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `users` (
  `user_ID` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  PRIMARY KEY (`user_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;




# USER STORIES
-AS A USER I WOULD LIKE TO BE ABLE TO UPDATE ITEMS ON THE LIST.
-AS A USER I WOULD LIKE TO BE ABLE TO DELETE ITEMS FROM THE LIST. 
-MAKE THE WEBSITE USER FRIENDLY. 

# IMPROVEMENTS
-Make the site more appealing and add additional styling.