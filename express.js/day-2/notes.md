# Express.js Middleware & Request Handling Assignment

## 📌 Objective
- Build an **Express.js** server with custom **middleware**.
- Handle **GET** and **POST** requests.
- Implement middleware for **logging**, **authentication**, and **error handling**.

## 📜 Requirements
1. **Set up an Express.js server** (`server.js`).
2. **Implement middleware** for:
   - **Logging requests** (method, URL, timestamp).
   - **Authentication** (check API key in headers for protected routes).
   - **Error handling** (return JSON error responses).
3. **Define API routes:**
   - `GET /public` → Returns a welcome message.
   - `GET /protected` → Requires authentication, else returns 401.
   - `POST /id` → Accepts JSON data and returns it in response.
4. **Use built-in middleware** (`express.json()`) for parsing JSON.

## 🚀 Instructions
1. **Initialize a Node.js project**:
   ```sh
   npm init -y
   npm install express
   ```
2. **Create `server.js` and write the following code:**
   ```javascript
   import express from "express";
   
   const app = express();
   const PORT = 5000;
   
   // Middleware to parse JSON
   app.use(express.json());
   
   // Logger Middleware
   function logger(req, res, next) {
       console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
       next();
   }
   
   // Authentication Middleware
   function authenticate(req, res, next) {
       const apiKey = req.header("x-api-key");
       if (apiKey === "12345") {
           next();
       } else {
           res.status(401).json({ error: "Unauthorized" });
       }
   }
   
   // Routes
   app.get("/public", (req, res) => {
       res.json({ message: "Welcome to Public Route" });
   });
   
   app.get("/protected", authenticate, (req, res) => {
       res.json({ message: "You have accessed a protected route" });
   });
   
   app.post("/id", logger, (req, res) => {
       const { name, classname } = req.body;
       res.json({ name, classname });
   });
   
   // Start Server
   app.listen(PORT, () => {
       console.log(`App is running on port ${PORT}`);
   });
   ```

3. **Run the Server:**
   ```sh
   node server.js
   ```

## 🎯 Expected Output
- **GET `/public`** → `{ "message": "Welcome to Public Route" }`
- **GET `/protected` (without API key)** → `{ "error": "Unauthorized" }`
- **POST `/id`** with body:
  ```json
  {
    "name": "Keshav Sharma",
    "classname": "keeshavshee"
  }
  ```
  **Response:**
  ```json
  {
    "name": "Keshav Sharma",
    "classname": "keeshavshee"
  }
  ```

## 📌 Bonus Challenge
- Add a `rateLimiter` middleware to **limit requests per minute**.

🚀 **Happy Coding!**

