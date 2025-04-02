# Express.js API Notes

## Introduction
This guide covers how to build a simple **REST API** using **Express.js** step by step. We'll start with basic operations and progressively add complexity.

---

## 1️⃣ Setting Up Express.js

### Install Express:
```sh
npm init -y
npm install express cookie-parser dotenv jsonwebtoken
```

### Enable ES Modules
Update `package.json` to include:
```json
{
  "type": "module"
}
```

### Create `.env` File
```env
PORT=8000
SECRET_KEY=mysecretkey
```

### Create `server.js`:
```javascript
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware to parse JSON and cookies
app.use(express.json());
app.use(cookieParser());

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
```
✅ **Now your server is running!**

---

## 2️⃣ Handling GET Requests

### Sample Data (`data.js`):
```javascript
const users = [
    { id: 1, name: "Alice", displayname: "Alice123" },
    { id: 2, name: "Bob", displayname: "Bobby" }
];
export default users;
```

### Get All Users:
```javascript
import data from "./data.js";

app.get("/api/v1/users", (req, res) => {
    res.status(200).json(data);
});
```
**📝 Explanation:** This route returns all users as JSON.

### Get a User by Name (Query Parameter):
```javascript
app.get("/api/v1/users/search", (req, res) => {
    const { name } = req.query;
    if (!name) return res.status(400).json({ message: "Name query parameter is required" });
    
    const usersFound = data.filter(user => user.name.toLowerCase() === name.toLowerCase());
    return usersFound.length ? res.json(usersFound) : res.status(404).json({ message: "User not found" });
});
```
✅ **Try:** `GET /api/v1/users/search?name=Alice`

---

## 3️⃣ Handling POST Requests

### Create a New User:
```javascript
app.post("/api/v1/users", (req, res) => {
    const { name, displayname } = req.body;
    if (!name || !displayname) {
        return res.status(400).json({ message: "Name and displayname are required." });
    }
    const newUser = { id: data.length + 1, name, displayname };
    data.push(newUser);
    res.status(201).json(newUser);
});
```
✅ **Try:** Send a **POST request** with:
```json
{
    "name": "Charlie",
    "displayname": "CharlieX"
}
```

---

## 4️⃣ Handling PUT Requests (Updating Data)

### Update User by ID:
```javascript
app.put("/api/v1/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, displayname } = req.body;
    const userIndex = data.findIndex(user => user.id === parseInt(id));
    if (userIndex === -1) return res.status(404).json({ message: "User not found" });
    data[userIndex] = { ...data[userIndex], name, displayname };
    res.status(200).json(data[userIndex]);
});
```
✅ **Try:** `PUT /api/v1/users/2`

---

## 5️⃣ Handling DELETE Requests

### Delete a User:
```javascript
app.delete("/api/v1/users/:id", (req, res) => {
    const { id } = req.params;
    const userIndex = data.findIndex(user => user.id === parseInt(id));
    if (userIndex === -1) return res.status(404).json({ message: "User not found" });
    data.splice(userIndex, 1);
    res.status(200).json({ message: "User deleted successfully" });
});
```
✅ **Try:** `DELETE /api/v1/users/1`

---

## 6️⃣ Authentication with JWT

### Generate JWT Token:
```javascript
import jwt from "jsonwebtoken";

app.post("/api/v1/login", (req, res) => {
    const { username } = req.body;
    if (!username) return res.status(400).json({ message: "Username is required" });
    
    const token = jwt.sign({ username }, process.env.SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
});
```

### Verify JWT Token:
```javascript
const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(403).json({ message: "No token provided" });
    
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) return res.status(401).json({ message: "Unauthorized" });
        req.user = decoded;
        next();
    });
};
```
✅ **Use `verifyToken` middleware in protected routes!**

---

## 7️⃣ Working with Cookies

### Set a Cookie:
```javascript
app.get("/set-cookie", (req, res) => {
    res.cookie("username", "codesnippet.dev", {
        maxAge: 24 * 60 * 60 * 1000, // 1 day
        httpOnly: true,
        secure: false,  
    });
    res.send("Cookie has been set!");
});
```

✅ **Try:** `GET /set-cookie`, `GET /get-cookie`, `GET /delete-cookie`

---

🚀 **Congratulations! You built a secure Express API!**

