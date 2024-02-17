
const input = document.getElementById('guessInput')
const submitButton=document.querySelector("#submit")
const hintButton = document.querySelector(".hint")
const resetButton = document.querySelector(".reset")
let randomNumber = Math.floor(Math.random()*100+1)
console.log(randomNumber);
let count=0
submitButton.addEventListener("click",function(){


    let inputValue = input.value
            if(+inputValue===randomNumber){
            alert(`Congratulations!! You find Number-${count} try`)
            count=0
            input.value=""

        }else{
            inputValue=""
            alert("try 1 more time")
            count=count+1
            input.value=""
            console.log(count);
        }
})
resetButton.addEventListener('click',()=>{
    count=0
    input.value=""
    randomNumber = Math.floor(Math.random()*100+1)
    console.log(randomNumber);
})
hintButton.addEventListener("click",()=>{
    var nearTo =Math.round(randomNumber/10)*10
    alert(`the number is near ${nearTo}`)
})

