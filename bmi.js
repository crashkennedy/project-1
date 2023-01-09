(function(){
let bts = document.querySelectorAll(".btn")
let bts1 = document.querySelectorAll(".btn1")
let screen = document.querySelector(".screen")
let screen1 = document.querySelector(".screen1")
let equal = document.querySelector(".btn-equal")
let clear = document.querySelector(".btn-clear")
let display = document.querySelector(".display")
let bks = document.querySelector(".btn-bks")
let bks1 = document.querySelector(".btn1-bks")

bks.addEventListener('click',function(e){
    screen.value = screen.value.slice(0,-1)
})
bks1.addEventListener('click',function(e){
    screen1.value = screen1.value.slice(0,-1);
})

bts.forEach(x => {
    x.addEventListener('click', function(e){
       let value = e.target.dataset.num
       screen.value+=value
    })
});
bts1.forEach(x => {
    x.addEventListener('click',function(e){
        let value1 = e.target.dataset.num
        screen1.value+=value1
        })
    
});
equal.addEventListener('click',function(){
    
if(screen.value === ""){
    screen.value = "please input a value"
}
if(screen1.value === ""){
screen1.value = "please input a value"
}
else {
    let b = screen1.value*0.305
    let c = b^2
let a = Math.floor(screen.value/c)

if(a >= 25 && a <= 29.9){
    display.value = "your BMI is " + a + ", you're overweight"
}
else if(a >= 18 && a <= 24.9){
    display.value = "your BMI is " + a + ", you're healthy"
}
else if(a<=18){
    display.value = "your BMI is " + a + ", you're underweight"
}
else if(a => 30){
    display.value = "your BMI is " + a + ", you're obese"
}
}

})
clear.addEventListener('click',function(){
screen.value = "";
screen1.value = "";
display.value = "";
})

})();