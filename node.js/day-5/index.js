const crypto = require("crypto")

const ranv = crypto.randomBytes(8).toString("hex") ;
console.log(ranv);

const hashv = crypto.createHash("sha256").update("suraj").digest("hex")

console.log(hashv)