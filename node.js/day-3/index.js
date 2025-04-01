const EventEmitter = require("events");
const useremitter = new EventEmitter();
const fs = require("fs");

const eventcount = {
    login: 0,
    logout: 0,
    purchase: 0,
    profileupdate: 0
};

const logfile = "eventlog.json";

// Read the existing log file if it exists and update eventcount
if (fs.existsSync(logfile)) {
    const data = fs.readFileSync(logfile, "utf-8");
    Object.assign(eventcount, JSON.parse(data));
}

// Function to save the event count to the file
function savecount() {
    fs.writeFileSync(logfile, JSON.stringify(eventcount, null, 2)); // Corrected this line
}

useremitter.on("LOGIN", (username) => {
    eventcount.login++;
    console.log(`${username} is logged in successfully`);
    savecount();
});

useremitter.on("LOGOUT", (username) => {
    eventcount.logout++;
    console.log(`${username} is logged out successfully`);
    savecount();
});

useremitter.on("PURCHASE", (username, item) => {
    eventcount.purchase++;
    console.log(`${username} purchased ${item}`);
    savecount();
});

useremitter.on("PROFILE-UPDATE", (username, field) => {
    eventcount.profileupdate++;
    console.log(`${username} updated ${field}`);
    savecount();
});

// Emitting events
useremitter.emit("LOGIN", "keshav");
useremitter.emit("LOGOUT", "keshav");
useremitter.emit("PURCHASE", "keshav", "iPhone 16");
useremitter.emit("PROFILE-UPDATE", "keshav", "Phone Number");

// Add the SUMMARY event to print the summary of all events
useremitter.on("SUMMARY", () => {
    console.log("Event Summary:");
    console.log(`LOGIN: ${eventcount.login}`);
    console.log(`LOGOUT: ${eventcount.logout}`);
    console.log(`PURCHASE: ${eventcount.purchase}`);
    console.log(`PROFILE-UPDATE: ${eventcount.profileupdate}`);
});

// Emit SUMMARY event to show the total counts of each event
useremitter.emit("SUMMARY");
