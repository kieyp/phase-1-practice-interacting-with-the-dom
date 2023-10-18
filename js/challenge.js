let minus = document.querySelector("#minus");
let plus = document.querySelector("#plus");
let heart = document.querySelector("#heart");
let pause = document.querySelector("#pause");
let counter = document.querySelector("#counter");
let comments = document.getElementById('list');
let input = document.getElementById("comment");
let button = document.getElementById("submit")



let count = 0;
// this will activate the button to increment the counter 
plus.addEventListener("click", ()=>{
    count++;
    counter.innerText = count;
})


// this will activate the button to decrement the counter 
minus.addEventListener("click", ()=>{
    count--;
    counter.innerText = count;
})

// Auto increment
let interval = setInterval (autoIncrement, 300);
console.log(interval)

let i=0;
function autoIncrement(){
    counter.innerText = i;
    if (i<300){
        i++;
    }
}

//will listen to click events and add comments
button.addEventListener("click", ()=>{
    const newComment = document.createElement("li");
    newComment.innerHTML = input.value;
    comments.appendChild(newComment);
    input.value = ""
    newComment.style.listStyle = "none";

})
