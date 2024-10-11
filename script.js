const posters = document.querySelectorAll(".poster");
const cross = document.getElementById("cross");
var currentImage = null;

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
