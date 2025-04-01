const os = require('os');

console.log("OS Platform: ", os.platform()); // Returns the operating system platform
console.log("User Info: ", os.userInfo()); // Returns the user information (username, home directory, etc.)
console.log("CPU Core Info: ", os.cpus()); // Returns an array of objects containing information about each CPU core
console.log("Free Memory: ", os.freemem(), "bytes"); // Returns the amount of free system memory in bytes
console.log("Total Memory: ", os.totalmem(), "bytes"); // Returns the total amount of system memory in bytes
console.log("Home Directory: ", os.homedir()); // Returns the home directory of the current user
console.log("Host Name: ", os.hostname()); // Returns the hostname of the operating system
console.log("Temp Directory: ", os.tmpdir()); // Returns the operating system's default directory for temporary files
console.log("OS Version: ", os.version()); // Returns the operating system version

// Additional methods

console.log("OS Uptime: ", os.uptime(), "seconds"); // Returns the system uptime in seconds
console.log("Load Average: ", os.loadavg()); // Returns an array of the 1, 5, and 15 minute load averages
console.log("Network Interfaces: ", os.networkInterfaces()); // Returns an object containing network interfaces
console.log("Arch: ", os.arch()); // Returns the operating system CPU architecture (e.g., 'x64')
console.log("Platform: ", os.platform()); // Returns the operating system platform (e.g., 'win32', 'darwin', 'linux')
console.log("Release: ", os.release()); // Returns the operating system release
console.log("Endianness: ", os.endianness()); // Returns the endianness of the CPU ('BE' for big-endian, 'LE' for little-endian)
console.log("OS Temp Directory: ", os.tmpdir()); // Returns the default temporary directory for the operating system

// Get system's network interfaces
const networkInterfaces = os.networkInterfaces();
console.log("Network Interfaces:", networkInterfaces);
