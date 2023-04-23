//MAKE SOUND WHEN PRESS BUTTONS
var drumNum=document.querySelectorAll(".drum").length;
for(var i=0;i<drumNum;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}

//MAKE SOUND WHEN PRESSING KEY BOARD KEYS
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch(key){
        case 'q':
            var audio1=new Audio("sounds/tom-1.mp3");
            audio1.play();
            break;
        case 'w':
            var audio2=new Audio("sounds/tom-2.mp3");
            audio2.play();
            break;
        case 'e':
            var audio3=new Audio("sounds/tom-3.mp3");
            audio3.play();
            break;
        case 'r':
            var audio4=new Audio("sounds/tom-4.mp3");
            audio4.play();
            break;
        case 't':
            var audio5=new Audio("sounds/snare.mp3");
            audio5.play();
            break;
        case 'y':
            var audio6=new Audio("sounds/crash.mp3");
            audio6.play();
            break;
        case 'u':
            var audio7=new Audio("sounds/kick-bass.mp3");
            audio7.play();
            break;
        default:
            console.log(buttonInnerHTML);           
        }
    }

//animation
function buttonAnimation(tempVariable){
    var activeButton=document.querySelector("."+tempVariable);
    activeButton.classList.add("pressed");
    //remove animation
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
