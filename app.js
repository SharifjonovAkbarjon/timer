const span = document.querySelector(".title span")

let offset = 0
function inc (){
    offset++
    span.textContent = offset
}


let interval = setInterval(()=>{
    console.log("qayta");

},1000)




setTimeout(()=>{
    console.log("Stop");
}, 3000)


function stopInterval(){
    clearInterval(interval)
}



















let sana = new Date


console.log( sana.getFullYear());
console.log( sana.getDate());
console.log( sana.getMonth() +1);








