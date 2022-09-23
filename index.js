let a = document.getElementById("text");
console.log(a);

let b = document.getElementsByTagName("p");
console.log(b);

let c = document.getElementsByClassName("box");
console.log(c);

//4
let ele = document.getElementsByTagName("h2")[0];
setTimeout(() =>{
    ele.innerText =" Hello world"
})





//5

let change=function(){
    let prasad = document.getElementsByClassName("flex-container") 
    let btnn = document.getElementsByClassName("clikk")[0]
     prasad[0].style.flexDirection = "column"
}


//7
let value = document.querySelector(h6)
p = value.id = "headingg";
console.log(value);
setTimeout(() => {
  value.style.color = "red";
  value.style.fontSixe="35px";
}, 2000)



//8

let s = document.getElementById("namechange")
s.style.color="black";
function changee(){
    let s = document.getElementById("namechange")
    s.style.color="red";
    s.innerText="Welcome to Elevation Academy"
}




//9

function getTime (){
    let dateTime = new Date ();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let session = document.getElementById("session")
    
    if (hrs >= 12){
        session.innerHTML=PM;
    }
    else{
        session,innerHTML=AM;
    }
    if (hrs < 12){
        hrs = hrs -12;
    }
    if (hrs <10){
        hrs = "0"+ hrs;
    }
    if (min < 10){
        min = "0"+ min;
    }
    if (sec < 10){
        sec = "0" + sec ;
    }

document.getElementById("HH").innerHTML=hrs;
document.getElementById("MM").innerHTML=min;
document.getElementById("SS").innerHTML=sec;
}
setInterval(getTime, 100)




//10
function drop () {
      
    let opt = document .getElementsByClassName("option");
   for(let i=1;i < opt .length ;i++)
    if (opt[i]. innerText=="2020"){
        console.log(opt[i].innerText)
    }
    else if(opt[i].innerText=="2021"){
        console.log(opt[i].innerText)
    }
   
}




//11

function check(){
    let msg1 = document.getElementById("message1");
    let regex1 = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let email = document.getElementById("email").value;
    let lastVal = email.slice(-14);
    let result1 = regex1.test(email);
    if(result1 && lastVal==="@prepbytes.com"){
    msg1.innerText = " Email is Valid"
    }
    else{
    msg1.innerText = " Email is InValid"
    }
    let msg2 = document.getElementById("message2");
    let regex2 = /^[9]+[1]+[0-9]{8}$/;
    let phone = document.getElementById("phone").value;
    let result2 = regex2.test(phone);
    if(result2){
    msg2.innerText = " Phone Number is Valid"
    }
    else{
    msg2.innerText = " Phone Number is Invalid"
    }
    let msg3 = document.getElementById("message3");
    let year = document.getElementById("birthYear").value;
    let year1 = parseInt(year.slice(0,4));
    if(year1 > 1995){
    msg3.innerText = " Birth Year is valid"
    }
    else{
    msg3.innerText = " Birth Year is Invalid"
    }
    }