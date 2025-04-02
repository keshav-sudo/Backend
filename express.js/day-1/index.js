import express from "express";
import data from "./data.js";

const app = express();
const PORT = 8000;

app.use(express.json());

// GET all users or filter by query parameter
app.get("/api/v1/users", (req, res) => {
    const { name } = req.query;

    if (name) {
        const users = data.filter((user) => user.name.toLowerCase() === name.toLowerCase());

        if (users.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json(users);
    }

    res.status(200).json(data);
});

// GET a specific user by name (Using Route Parameter)
app.get("/api/v1/users/:name", (req, res) => {
    const { name } = req.params;
    const users = data.filter((user) => user.name.toLowerCase() === name.toLowerCase());

    if (users.length === 0) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(users);
});

// POST a new user
app.post("/api/v1/users", (req, res) => {
    const { name, displayname } = req.body;

    if (!name || !displayname) {
        return res.status(400).json({ message: "Name and displayname are required." });
    }

    const newUser = {
        id: data.length + 1, // Auto incrementing ID
        name,
        displayname
    };

    data.push(newUser);
    res.status(201).json(newUser); // Send the created user back in the response
});

// PUT to update a user by ID
app.put("/api/v1/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, displayname } = req.body;

    if (!name || !displayname) {
        return res.status(400).json({ message: "Name and displayname are required." });
    }

    const userIndex = data.findIndex(user => user.id === parseInt(id));

    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    // Update the user data
    data[userIndex] = {
        ...data[userIndex],
        name,
        displayname
    };

    res.status(200).json(data[userIndex]); // Send the updated user back
});

// DELETE a user by ID
app.delete("/api/v1/users/:id", (req, res) => {
    const { id } = req.params;

    const userIndex = data.findIndex(user => user.id === parseInt(id));

    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    // Remove the user from the data array
    data.splice(userIndex, 1);

    res.status(200).json({ message: "User deleted successfully" });
});

// Start Server
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
