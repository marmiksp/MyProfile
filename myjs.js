var home = document.getElementById("home1");
var about = document.getElementById("about1");
var skill = document.getElementById("skill1");
var project = document.getElementById("project1");
var contacts = document.getElementById("contacts1");
var pages = [home, about, skill,project, contacts];

function currentTime() 
{
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();


for (var an of pages) {
    an.style.display = "none";
}
home.style.display = "block";

function typeit()
{

var i = 0;
document.getElementById("write").innerHTML = "";
var txt = 'Hey I am Marmik Patel CS Dojo';
var speed = 200;
typeWriter();
function typeWriter() {
if (i < txt.length) {
    document.getElementById("write").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
}
}

}
typeit();
function changeico()
{
    var ico = document.getElementById("menu");
    var i = ico.innerHTML;
    
    if(i == "⛛") 
    {
        ico.innerHTML = "⛌";
    }
    else
    {
        ico.innerHTML = "⛛";
    }
    
}

function myfun(a) {
    for (var an of pages) {
        an.style.display = "none";
    }

    var a1 = document.getElementById(a);
    a1.style.display = "block";


    if(a == "home1")
    {
       typeit();
    }
}