
let r = 1;
let längd = 4;
let Elängd = 4;
let b = 0;
let Eb = 0;
let mängdskepp = 0;
let Emängdskepp = 0;
let temp = true;
let temp1 = true;
let positionX = [];
let positionY = [];
let FpositionX = [];
let FpositionY = [];

   
 
 

 
 console.log(positionX,positionY);
 console.log(FpositionX,FpositionY);


window.onload = function(){
    let board1 = document.createElement('div');
    board1.style.cssText = "display:flex; width:33rem;  display:flex; flex-wrap: wrap; border:solid; margin: 2rem;  ";
    let board2 = document.createElement('div');
    board2.style.cssText = "display:flex; width:33rem;  display:flex; flex-wrap: wrap; border:solid; margin: 2rem; ";
    document.body.appendChild(board1);
    document.body.appendChild(board2);
    for(let y = 0;y<10;y++ ){
        for(let x = 0;x<10;x++ ){
            let cell = document.createElement('div');
            
            
            a= x+y/10
            cell.className = a;
            cell.style.cssText = " width:3rem; height:3rem; display:flex align-items:center; justify-content: center; border: solid 0.1rem white; background-color: lightblue; ";
            board1.appendChild(cell);
            cell.setAttribute ("onclick","GetCoordinates("+x+","+y+")") ;
        }
    }  
    for(let y = 0;y<10;y++ ){
        for(let x = 0;x<10;x++ ){
            let cell = document.createElement('div');
            a= x+y/10;
            cell.className = a;
            
           
            cell.style.cssText = " width:3rem; height:3rem; display:flex align-items:center; justify-content: center; border: solid 0.1rem white; background-color: lightblue; hover:background-color:blue; ";
            for(let i = 0;i<13;i++){
                if(x == FpositionX[i] && y == FpositionY[i]){
            
                    cell.style.backgroundColor = "darkblue";
                }
            }
            board2.appendChild(cell);
            cell.setAttribute ("onclick","PlaceBoat("+x+","+y+")") ;
        }
    } 
    EPlaceBoat();
    EPlaceBoat();
    EPlaceBoat();
    EPlaceBoat();
    EPlaceBoat();
    EPlaceBoat();
    EPlaceBoat();
    
    
    
    
    

}


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function GetCoordinates(x,y){
    console.log("unga bunga")
    a= x+y/10;
    let pos = document.getElementsByClassName(a);
    for(let i = 0;i<13;i++){
        if(x == positionX[i] && y == positionY[i]){
           
          pos[0].style.backgroundColor = "red";   

    
            
        }else{
            pos[0].style.backgroundColor = "skyblue";   
        }
    }
    x = getRandomInt(10)
    y = getRandomInt(10)
    a= x+y/10;
    let Epos = document.getElementsByClassName(a);
    Epos[1].style.backgroundColor = "skyblue"; 
    for(let i = 0;i<13;i++){
        
        if(x == FpositionX[i] && y == FpositionY[i]){
           console.log("fdfjd")
          Epos[1].style.backgroundColor = "red";   
            
    
            
        }
        
    }
}
function PlaceBoat(x,y){
    
    a= x+y/10;
    if(mängdskepp == 0){
        längd = 4;
        
    }
    else if(mängdskepp == 1)
    {
        längd = 3;
        
    }
    else if(mängdskepp == 2){
        längd = 2;
        
    }
    else if(mängdskepp >3 && mängdskepp <6 )
    {
        längd = 1;
    }
    else if(mängdskepp > 6){
        längd = 0;
    }
    
    for(i=0;i<längd;i++){
         let startpos = document.getElementsByClassName(a+i/r);
         startpos[1].style.backgroundColor = "darkblue"; 

    }
    for(i=0;i<längd;i++){
        console.log("hej")
        FpositionX[b] = x+i
        FpositionY[b] = y
        b++
    }
    mängdskepp++;
    
    
    
    

}
function EPlaceBoat(){
    let Ex= getRandomInt(6)
    let Ey = getRandomInt(6)
    
    if(Emängdskepp == 0){
        Elängd = 4;
        
    }
    else if(Emängdskepp == 1)
    {
        Elängd = 3;
        
    }
    else if(Emängdskepp == 2){
        Elängd = 2;
        
    }
    else if(Emängdskepp >3 && Emängdskepp <6 )
    {
        Elängd = 1;
    }
    else if(Emängdskepp > 6){
        Elängd = 0;
    }
    
   
    for(i=0;i<Elängd;i++){
        console.log("hej")
        positionX[Eb] = Ex+i
        positionY[Eb] = Ey
        Eb++
    }
    Emängdskepp++;
    
    
    
    

}

