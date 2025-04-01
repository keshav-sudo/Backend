setTimeout(()=>{
    console.log("hello by setimout")
} ,2000 )


let count = 0;

const interval = setInterval(()=>{
    console.log(`Interval Count: ${++count}`)

    if(count == 4){
        clearInterval(interval)
    }
},1000)