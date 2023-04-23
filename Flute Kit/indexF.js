var fluteNum=document.querySelectorAll(".flute").length;
for(var i=0;i<fluteNum;i++){
    document.querySelectorAll(".flute")[i].addEventListener("click",function(){
        var TotalButtons=this.innerHTML;
        makeSound(TotalButtons);
        buttonAnimation(TotalButtons);
        
    })

}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);

})
function makeSound(key){
    switch(key){
        case 'q':
            var audio1=new Audio("sounds/sound1.mp3");
            audio1.play();
            break;
        case 'w':
            var audio2=new Audio("sounds/sound2.mp3");
            audio2.play();
            break;
        case 'e':
            var audio3=new Audio("sounds/sound3.mp3");
            audio3.play();
            break;
        case 'r':
            var audio4=new Audio("sounds/sound4.mp3");
            audio4.play();
            break;
        case 't':
            var audio5=new Audio("sounds/sound5.mp3");
            audio5.play();
            break;
        case 'y':
            var audio6=new Audio("sounds/sound6.mp3");
            audio6.play();
            break;
        default:
            console.log(buttonInnerHTML);
        }
        
        
        
        
        
    }

    function buttonAnimation(tempVariable){
        var activeButton=document.querySelector("."+tempVariable);
        activeButton.classList.add("pressed");
        //remove animation
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        },100);
    }
