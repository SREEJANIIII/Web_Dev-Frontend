const myBox=document.getElementById("emoji");
let x=0, y=0;
let move=10;
document.addEventListener("keydown",event=>{
    myBox.style.backgroundColor="red";
    myBox.textContent="🤯";

})

document.addEventListener("keyup",event=>{
    myBox.style.backgroundColor="yellow";
    myBox.textContent="😿";
})

document.addEventListener("keydown",event =>{
    if(event.key.startsWith("Arrow"))
    {
     switch(event.key)
        {
            case "ArrowDown":
            {
                y+=move;
                break;
            }
            case "ArrowUp":
                {
                    y-=move;
                    break;
                }
                case "ArrowLeft":
                    {
                        x-=move;
                        break;
                    }
                    case "ArrowRight":
                        {
                            x+=move;
                            break;
                        }
        }myBox.style.top=`${y}px`;
        myBox.style.left=`${x}px`;

    }
})