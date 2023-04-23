//make sound when you click those buttons
var pianoNum=document.querySelectorAll(".piano").length;
for(var i=0;i<pianoNum;i++){
    document.querySelectorAll(".piano")[i].addEventListener("click",function(){
        var TotalButtons=this.innerHTML;
        makeSound(TotalButtons);//calling function
    })
}

//make sound when you click keyboard buttons
document.addEventListener("keydown",function(event){
    
    makeSound(event.key);
})


function makeSound(key){  //key is a temp varianble
    switch(key){
        case 'q':
            var audio1=new Audio("sounds/c3.mp3");
            audio1.play();
            break;
        case 'w':
            var audio2=new Audio("sounds/do.mp3");
            audio2.play();
            break;
        case 'e':
            var audio3=new Audio("sounds/fa.mp3");
            audio3.play();
            break;
        case 'r':
            var audio4=new Audio("sounds/sol.mp3");
            audio4.play();
            break;
        case 't':
            var audio5=new Audio("sounds/re.mp3");
            audio5.play();
            break;
        case 'y':
            var audio6=new Audio("sounds/normal.mp3");
            audio6.play();
            break;
        case 'u':
            var audio7=new Audio("sounds/piano1.mp3");
            audio7.play();
            break;
        case 'i':
            var audio7=new Audio("sounds/g6.mp3q");
            audio7.play();
            break;
        case 'o':
            var audio7=new Audio("sounds/metal.mp3");
            audio7.play();
            break;
        default:
            console.log(buttonInnerHTML);           
        }
}