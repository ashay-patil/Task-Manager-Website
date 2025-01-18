# Task Manager Website

This project is designed to practice and gain hands-on experience with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**. 
The project demonstrates fundamental concepts and techniques for building a server-side application with database integration.

---

## Table of Contents
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Technologies Used](#technologies-used)
- [Key Concepts Practiced](#key-concepts-practiced)
- [Running the Project](#running-the-project)

---

## Features
- Integration with **MongoDB Atlas** or **local MongoDB instance** as the database server.
- Uses environment variables for secure and customizable configurations.
- Implements essential concepts such as:
  - **Express Routers**
  - **Middlewares**
  - **Error Handling**
  - **MongoDB Queries**
  - **Asynchronous JavaScript**

---

## Setup Instructions

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Task-Manager-Website.git
   ```
   
2. Navigate to the project directory:
   ```bash
   cd Task-Manager-Website
   ```
   
3. Install the required Node.js modules:
   ```bash
   npm install
   ```

4. **Setup MongoDB:**
   - You can use **MongoDB Atlas** (cloud-based) or set up a **local MongoDB instance**.
   - For **MongoDB Atlas**, follow these steps:
     1. Create an account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
     2. Create a cluster and database instance.
     3. Obtain the connection string from the Atlas dashboard.

5. Create a `.env` file in the project root and configure the MongoDB connection string:
   ```env
   MONGO_URI=....your_connection_string....
   ```

---

## Running the Project

1. Start the server:
   ```bash
   npm start
   ```

2. Open your web browser and navigate to:
   ```
   http://localhost:PORT
   ```
   Replace `PORT` with the actual port number (default is typically `3000`).

---

## Technologies Used
- **Node.js**: JavaScript runtime for server-side programming.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.

---

## Key Concepts Practiced
- **Express Routers**: Structuring the application into modular route handlers.
- **Middlewares**: Adding functionality to the request-response cycle.
- **Error Handling**: Managing application errors gracefully.
- **MongoDB Queries**: CRUD operations with MongoDB.
- **Asynchronous JavaScript**: Handling asynchronous code with Promises and async/await.

---

Happy Coding! 🚀
