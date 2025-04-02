# Express.js API Notes

## Introduction
This guide covers how to build a simple **REST API** using **Express.js** step by step. We'll start with basic operations and progressively add complexity.

---

## 1️⃣ Setting Up Express.js

### Install Express:
```sh
npm init -y
npm install express
```

### Create `server.js`:
```javascript
import express from "express";
const app = express();
const PORT = 8000;

// Middleware to parse JSON
app.use(express.json());

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
app.get("/api/v1/users", (req, res) => {
    const { name } = req.query;
    if (name) {
        const users = data.filter(user => user.name.toLowerCase() === name.toLowerCase());
        return users.length ? res.json(users) : res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(data);
});
```
✅ **Try:** `GET /api/v1/users?name=Alice`

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

## 🎯 Summary
| Method | Route | Description |
|--------|------------|----------------------|
| GET | `/api/v1/users` | Get all users |
| GET | `/api/v1/users?name=Alice` | Get user by query |
| POST | `/api/v1/users` | Create a new user |
| PUT | `/api/v1/users/:id` | Update user by ID |
| DELETE | `/api/v1/users/:id` | Delete user by ID |

🚀 **Congratulations! You built a full Express API!**

