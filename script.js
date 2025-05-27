let allElem = document.querySelectorAll('.elem')

let forElem = document.querySelectorAll('.forElem')

let back = document.querySelectorAll('.back')

allElem.forEach(function(elem){
    elem.addEventListener('click',function(){

        document.querySelector("#main1").style.display = "none";
        document.querySelector("#main2").style.display = "block";
        // forElem.forEach(f => f.style.display = 'none');  
        forElem[elem.id].style.display = 'block';  
    })   
})

back.forEach(function(btn){
    btn.addEventListener('click',function(){
        document.querySelector("#main1").style.display = "flex";
        document.querySelector("#main2").style.display = "none";
        document.querySelectorAll('.forElem').forEach(f => f.style.display = 'none');
    })
 
})
