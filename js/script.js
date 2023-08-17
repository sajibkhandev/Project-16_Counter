let counterhtml=document.querySelectorAll(".counterhtml")
let converArr=Array.from(counterhtml)
converArr.map(item=>{
    let count=0
    let color=-1
    let arr=["red","blue","black","green","yellow","red","green"]

function display(){
    count++
    item.innerHTML=count

    if(arr.length == color){
        color=-1
    }
    color++
    item.style.color=arr[color]
    // console.log(item.style.color=arr[color]);
    // console.log("color",color);
    // console.log("count",count);

    if(count==item.dataset.number){
        clearInterval(stop)
    }
}

let stop=setInterval(()=>{
    display()
},item.dataset.speed)

})

