const posters = document.querySelectorAll(".poster");
const cross = document.getElementById("cross");
var currentImage = null;

const action1 = document.getElementById("f1")
const action2 = document.getElementById("f2")
const action3 = document.getElementById("f3")
const action4 = document.getElementById("f4")

action1.addEventListener('click', function1)
action2.addEventListener('click', function2)
action3.addEventListener('click', function3)
action4.addEventListener('click', function4)

action1.addEventListener('keydown', function1)
action2.addEventListener('keydown', function2)
action3.addEventListener('keydown', function3)
action4.addEventListener('keydown', function4)

var flag1 = true
var flag2 = true
var flag3 = true
var flag4 = true
function function1(){
    if(!flag1){
        document.getElementById("ans1").classList.remove('clicked');
        document.getElementById("plus1").style.display = "block";
        document.getElementById("minus1").style.display = "none";
        flag1 = true;
    }
    else {
        document.getElementById("ans1").classList.add('clicked');
        document.getElementById("minus1").style.display = "block";
        document.getElementById("plus1").style.display = "none";
        flag1 = false;
    }
}
function function2(){
    if(!flag2){
        document.getElementById("ans2").classList.remove('clicked');
        document.getElementById("plus2").style.display = "block";
        document.getElementById("minus2").style.display = "none";
        flag2 = true;
    }
    else {
        document.getElementById("ans2").classList.add('clicked');
        document.getElementById("minus2").style.display = "block";
        document.getElementById("plus2").style.display = "none";

        flag2 = false;
    }
}
function function3(){
    if(!flag3){
        document.getElementById("ans3").classList.remove('clicked');
        document.getElementById("plus3").style.display = "block";
        document.getElementById("minus3").style.display = "none";
        flag3 = true;
    }
    else {
        document.getElementById("ans3").classList.add('clicked');
        document.getElementById("minus3").style.display = "block";
        document.getElementById("plus3").style.display = "none";

        flag3 = false;
    }
}
function function4(){
    if(!flag4){
        document.getElementById("ans4").classList.remove('clicked');
        document.getElementById("plus4").style.display = "block";
        document.getElementById("minus4").style.display = "none";
        flag4 = true;
    }
    else {
        document.getElementById("ans4").classList.add('clicked');
        document.getElementById("plus4").style.display = "none";
        document.getElementById("minus4").style.display = "block";
        flag4 = false;
    }
}
posters.forEach(pos =>{
    pos.addEventListener("click", function(){
        const posterImage = document.getElementById(pos.classList[1]);
        posterImage.classList.add("poster-clicked");
        currentImage = posterImage;
        cross.style.display = "block";
    });
})
cross.addEventListener("click", function(){
    cross.style.display = "none";
    currentImage.classList.remove("poster-clicked");
})
