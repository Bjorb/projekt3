
let temp = true;
let temp1 = true;
let positionX = [];
let positionY = [];
let FpositionX = [];
let FpositionY = [];
båtar(3,1,0);
båtar(2,2,3);
båtar(1,3,8);
båtar(1,4,11);
   
 
 for(let i = 0;i<13;i++){
   FpositionX[i] = getRandomInt(10);
   FpositionY[i] = getRandomInt(10);
   
 }
 
 console.log(positionX,positionY);
 console.log(FpositionX,FpositionY);


window.onload = function(){
    let board1 = document.createElement('div');
    board1.style.cssText = "display:flex; width:44rem;  display:flex; flex-wrap: wrap; border:solid;  margin: 10rem ; ";
    let board2 = document.createElement('div');
    board2.style.cssText = "display:flex; width:44rem;  display:flex; flex-wrap: wrap; border:solid;  margin: 10rem ;";
    document.body.appendChild(board1);
    document.body.appendChild(board2);
    for(let y = 0;y<10;y++ ){
        for(let x = 0;x<10;x++ ){
            let cell = document.createElement('div');
            
            
            a= x+y/10
            cell.className = a;
            
            
            cell.style.cssText = " width:4rem; height:4rem; display:flex align-items:center; justify-content: center; border: solid 0.1rem white; background-color: lightblue; ";
            
            board1.appendChild(cell);
            cell.setAttribute ("onclick","GetCoordinates("+x+","+y+")") ;
        }
    }  
    for(let y = 0;y<10;y++ ){
        for(let x = 0;x<10;x++ ){
            let cell = document.createElement('div');
             a= x+y/10
            cell.className = a;
           
            cell.style.cssText = " width:4rem; height:4rem; display:flex align-items:center; justify-content: center; border: solid 0.1rem white; background-color: lightblue; hover:background-color:blue; ";
            for(let i = 0;i<13;i++){
                if(x == FpositionX[i] && y == FpositionY[i]){
            
                    cell.style.backgroundColor = "darkblue";
                }
            }
            board2.appendChild(cell);
        }
    } 

}


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function GetCoordinates(x,y){
    a= x+y/10
    let pos = document.getElementsByClassName(a)
    for(let i = 0;i<13;i++){
        if(x == positionX[i] && y == positionY[i]){
           
          pos[0].style.backgroundColor = "red";   

    
            
        }
    }
    
}

function båtar(max,längd,start){
    mängd = max * längd
     for(let i = start; i<mängd;i+=längd){
        positionX[i] = getRandomInt(10);
        positionY[i] = getRandomInt(10);
        if(längd>1){
            for(let j = 1; j<längd;j++){
                positionX[i+j] = positionX[i]+j;
                positionY[i+j] = positionY[i];
       
            }
        
            
        }
        
        
    }
}
