
var randomNumber1=Math.round(Math.random()*100)+1;
document.querySelector("button").addEventListener("click",function(){
    if(randomNumber1>90){
        alert(randomNumber1+"% You Are The Best Couple")
        document.querySelector('h1').innerText='nice Couple';

    }
    else{
        alert(randomNumber1+"% You are the Good Couple")
        document.querySelector('h1').innerText='nice Couple';

    }
})



