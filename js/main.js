

ubåt()
window.onload = function(){
    let board1 = document.createElement('div');
    board1.style.cssText = "display:flex; width:44rem;  display:flex; flex-wrap: wrap; border:solid;  margin: 10rem ; "
    let board2 = document.createElement('div');
    board2.style.cssText = "display:flex; width:44rem;  display:flex; flex-wrap: wrap; border:solid;  margin: 10rem ;"
    document.body.appendChild(board1)
    document.body.appendChild(board2)
    for(let y = 1;y<=10;y++ ){
        for(let x = 1;x<=10;x++ ){
            let cell = document.createElement('div');
            
            cell.style.cssText = " width:4rem; height:4rem; display:flex align-items:center; justify-content: center; border: solid 0.1rem white; background-color: lightblue; "
            
            board1.appendChild(cell);
        }
    }  
     for(let y = 1;y<=10;y++ ){
        for(let x = 1;x<=10;x++ ){
            let cell = document.createElement('div');
            
            cell.style.cssText = " width:4rem; height:4rem; display:flex align-items:center; justify-content: center; border: solid 0.1rem white; background-color: lightblue; hover:background-color:blue; ";
            
            board2.appendChild(cell);
        }
    } 

}

function ubåt(){
    let hp = 1;
    let positionX = getRandomInt(10);
    let positionY = getRandomInt(10);
    console.log(positionX,positionY)

}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

