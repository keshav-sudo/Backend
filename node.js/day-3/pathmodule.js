const path = require("path");

console.log("filename" , __filename)
console.log("dirname" , __dirname)

//schol managment system

//* folder/student/data.txt

const filepath =  path.join("folder" , "student", "data.txt");


console.log(filepath);
const resolvedPath = path.resolve(filepath)
const extname = path.extname(filepath)
const basename = path.basename(filepath)
const dirname = path.dirname(filepath)

console.log({
    resolvedPath,
    extname,
    basename,
    dirname
})
