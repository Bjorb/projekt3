let playerHp = 14;
let EHp = 14;
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
    board1.style.cssText = "display:flex; width:32em;  display:flex; flex-wrap: wrap; border:solid; margin-left: 1rem; margin-top: 0px; grid-row: 3; grid-column:3 ";
    let board2 = document.createElement('div');
    board2.style.cssText = "display:flex; width:32rem;  display:flex; flex-wrap: wrap; border:solid; margin-right: 1rem; margin-top: 0px;   grid-row: ; grid-column:2";
    document.body.appendChild(board1);
    document.body.appendChild(board2);
    for(let y = 0;y<10;y++ ){
        for(let x = 0;x<10;x++ ){
            let cell = document.createElement('div');
            
            
            a= x+y/10
            cell.className = a;
            cell.style.cssText = " width:3rem; height:3rem; display:flex align-items:center; justify-content: center; border: solid 0.1rem white; background-color: lightblue; ";
            board1.appendChild(cell);
            cell.setAttribute ("onclick","Shoot("+x+","+y+")") ;
        }
    }  
    for(let y = 0;y<10;y++ ){
        for(let x = 0;x<10;x++ ){
            let cell = document.createElement('div');
            a= x+y/10;
            cell.className = a;
            
           
            cell.style.cssText = " width:3rem; height:3rem; display:flex align-items:center; justify-content: center; border: solid 0.1rem white; background-color: lightblue; ";
            
            for(let i = 0;i<13;i++){
                if(x == FpositionX[i] && y == FpositionY[i]){
            
                    cell.style.backgroundColor = "darkblue";
                }
            }
            board2.appendChild(cell);
            cell.setAttribute ("onclick","PlaceBoat("+x+","+y+")") ;
            cell.setAttribute ("onmouseover","BoatIndicator("+x+","+y+")") ;
            cell.setAttribute ("onmouseout","BoatIndicatorout("+x+","+y+")") ;
        }
    } 
    while(Emängdskepp < 7){
        EPlaceBoat()
    }
    
    
    
    
    

}


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function Shoot(x,y){
    let temp = true;
    if(EHp == 0 || playerHp == 0||mängdskepp <7){
        temp = false;
    }
    while(temp){
        a= x+y/10;
    let pos = document.getElementsByClassName(a);
    for(let i = 0;i<14;i++){
        if(x == positionX[i] && y == positionY[i]){
           
          pos[0].style.backgroundColor = "red";
          EHp --;   
          if(EHp == 0){
              let victory = document.getElementsByClassName("victory")
                victory[0].style.cssText = "display:block;"
              console.log("You win")
          }
          
          break;
         

    
            
        }else{
            pos[0].style.backgroundColor = "skyblue";   
        }
    }
    
    while(true){
        x = getRandomInt(10)
        y = getRandomInt(10)
        a= x+y/10;
        Epos = document.getElementsByClassName(a);
        if(!Epos[1].classList.contains("shot")){
            
            break;
        }
    }
    Epos[1].classList.add("shot");     
    Epos[1].style.backgroundColor = "skyblue"; 
    for(let i = 0;i<14;i++){
        
        if(x == FpositionX[i] && y == FpositionY[i]){
           
            Epos[1].style.backgroundColor = "red"
            
            playerHp--;
            console.log(playerHp)
            if(playerHp == 0){
                let loss = document.getElementsByClassName("loss")
                loss[0].style.cssText ="  display: block;"
              console.log("You lose")
          }
            
        }
        
    }
    temp = false;
    }
    
}
function Längd(){
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
}
function PlaceBoat(x,y){
    let overlap = false;
    a= x+y/10;
    Längd()
    if(x + längd >10 && r == 1 || y + längd >10 && r ==10){
        overlap = true;
    }
   
    for(i=0;i<längd;i++){
         if(r == 10){
           p = (a*10+i)/r
        }else{
            p= a+i/r
        }
         let startpos = document.getElementsByClassName(p);
        if(startpos[1].classList.contains("boat")){
            
           overlap = true;  
        } 
       
       
         

    }
    if(!overlap){
        for(i=0;i<längd;i++){
             if(r == 10){
           p = (a*10+i)/r
        }else{
            p= a+i/r
        }
         let startpos = document.getElementsByClassName(p);
        if(!startpos[1].classList.contains("boat")){
             startpos[1].style.backgroundColor = "darkblue"; 
             
        } 
       
        startpos[1].classList.add("boat")
         

    }
    for(i=0;i<längd;i++){
        
        if(r == 1){
            FpositionX[b] = x+i
            FpositionY[b] = y 
        }else{
            FpositionX[b] = x
            FpositionY[b] = y+i
        }
        
        b++
    }
    mängdskepp++;
    
    
    }
    
    
    

}
function EPlaceBoat(){
    let Er = getRandomInt(100)
    if(Er < 50){
        Er = 10;
    }else{
        Er = 1;
    }
    let Eoverlap = false;
    let Ex= getRandomInt(6)
    let Ey = getRandomInt(6)
    Ea = Ex+Ey/10
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
        if(Er == 10){
           Ep = (Ea*10+i)/Er
        }else{
            Ep= Ea+i/Er
        }
        let startpos = document.getElementsByClassName(Ep);
        if(startpos[0].classList.contains("Eboat")){
           Eoverlap = true;
           
        } 
        
        
    }
    if(!Eoverlap){
        
        for(i=0;i<Elängd;i++){
            if(Er == 10){
                Ep = (Ea*10+i)/Er
            }else{
                Ep= Ea+i/Er
            }
            let startpos = document.getElementsByClassName(Ep);
            startpos[0].classList.add("Eboat")
            if(Er == 1){
                
                positionX[Eb] = Ex+i
                positionY[Eb] = Ey 
            }else{
                
                positionX[Eb] = Ex
                positionY[Eb] = Ey+i
            }
            Eb++
        }
    Emängdskepp++;
    }
    
    
    
    
    
    

}
function BoatIndicator(x,y){
    var a= x+y/10;
    Längd()
    
    
    
    
    for(i=0;i<längd;i++){
        if(r == 10){
           p = (a*10+i)/r
        }else{
            p= a+i/r
        }
        
         let startpos = document.getElementsByClassName(p);
         if(startpos[1].classList.contains("boat")||x + längd >10 && r == 1 || y + längd >10 && r ==10){
             startpos[1].style.backgroundColor = "purple"; 
         }else{
             startpos[1].style.backgroundColor = "blue"; 
         }
         

    }
    

}
function BoatIndicatorout(x,y){
   
   a= x+y/10;
     for(i=0;i<längd;i++){
         if(r == 10){
           p = (a*10+i)/r
        }else{
            p= a+i/r
        }
         let startpos = document.getElementsByClassName(p);
         if(startpos[1].classList.contains("boat")){
             startpos[1].style.backgroundColor = "darkblue"; 
         }else{
             startpos[1].style.backgroundColor = "lightblue"; 
         }
         

    }
    

}
function Rotate(){
    if(r == 1){
        r = 10
    }else{
        r = 1
    }
}
