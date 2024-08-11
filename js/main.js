// DOM Elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const foucs = document.getElementById('foucs');

// Show Time
function showTime(){
let today = new Date();
let hours = today.getHours();
let minutes = today.getMinutes();
let second = today.getSeconds();

// Set AM Or PM
const amPm = hours >= 12 ? 'PM' : 'AM';

// 12H Formate
hours = hours % 12 || 12;

// outPut Time 
time.innerHTML = `${hours}<span>:</span>${addZero(minutes)}<span>:</span>${addZero(second)} ${amPm}`;

setTimeout(showTime,1000)
};

// Add Zero
function addZero(n){
return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set BackGround & Greeting
function setBgGreet(){
let today = new Date();
let hours = today.getHours();

if(hours < 12){
// Morning
document.body.style.backgroundImage = "url('./istockphoto-1737349668-1024x1024.jpg')";
greeting.textContent = 'Good Morning'
}else if(hours < 18){
// AfterNoon
document.body.style.backgroundImage = "url('../img/after noon.jpg')";
greeting.textContent = 'Good Afternoon'
}else{
// Night
document.body.style.backgroundImage = "url('../img/night.jpg')";
greeting.textContent = 'Good Night'
}
}


// Get Name
function getName(){
if(localStorage.getItem('name') === null){
name.textContent = '[Enter Name]' 
}else{
name.textContent = localStorage.getItem('name')
}
}

// Set Name
function setName(e){
if(e.type === 'keypress'){

if(e.which == 13 || e.keyCode == 13){
localStorage.setItem('name', e.target.innerText)
name.blur()
}

}else{
localStorage.setItem('name', e.target.innerText)
}
}

// Set Foucs
function setName(e){
if(e.type === 'keypress'){

if(e.which == 13 || e.keyCode == 13){
localStorage.setItem('foucs', e.target.innerText)
foucs.blur()
}

}else{
localStorage.setItem('foucs', e.target.innerText)
}
}

// Get Foucs
function getFoucs(){
if(localStorage.getItem('foucs') === null){
foucs.textContent = '[Enter Foucs]'
}else{
foucs.textContent = localStorage.getItem('foucs')
}
}

// EVENTS
name.addEventListener('keypress', setName)
name.addEventListener('blur', setName)

foucs.addEventListener('keypress', setName)
foucs.addEventListener('blur', setName)

// Run
showTime()
setBgGreet()
getName()
getFoucs()
