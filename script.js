const navBar = document.getElementById('navbar');
const imageImprovise = document.getElementById('imgImprovise');
const popUp = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');
const scrollLevel1 = 100;
const scrollLevel2 = 380;
const scrollLevel3 = 1280;

window.addEventListener('scroll', ()=>{
    if (window.scrollY>=scrollLevel1){
        navBar.style.height = "40px";
    }else{
        navBar.style.height = "90px";
    }

    if (window.scrollY>=scrollLevel2){
       imageImprovise.style.opacity = 1;
       imageImprovise.style.transform = "translateX(0)";
    }

    if (window.scrollY>=scrollLevel3){
      popUp.style.opacity = 1;
      popUp.style.transform = "translate(0)";
    } 
});

 closeBtn.addEventListener('click', ()=>{
    popUp.remove();
 })


