const {Readable , Writable} = require("stream");

const readableStream = new Readable({
    read() {},
});

const writableestream = new Writable({
    write(streamData){
        console.log("writingg...",streamData.toString())
    }
})

readableStream.on("data" , (chunk)=>{
    console.log("CHUNK" , chunk.toString());
    writableestream.write(chunk);

})

readableStream.push("Hello")