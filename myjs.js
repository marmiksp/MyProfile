var home = document.getElementById("home1");
var about = document.getElementById("about1");
var skill = document.getElementById("skill1");
var project = document.getElementById("project1");
var contacts = document.getElementById("contacts1");
var pages = [home, about, skill,project, contacts];
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