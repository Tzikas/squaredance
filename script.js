
class Rover { //STEP 5 
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.color = 'purple';
  }

  move = (square) => { //STEP 9 

        square.style.width = Math.random()*200 + 'px'
        square.style.height = Math.random()*200 + 'px'
        square.style.backgroundColor = this.color;
        square.style.position = 'fixed';
      
        // square.style.left = Math.random()*100 - 20 + '%';
        // square.style.top = Math.random()*100 + '%'; 

        // square.style.transform = `rotate(${Math.random()*100}deg)`
        // square.style.borderRadius = Math.random()*100 + '%'
        
  }

  _get = () => {  //STEP 10 
    let squares = document.querySelectorAll(".square")
    squares.forEach(square => {
        this.changeColor();
        this.move(square)
    })
  }

  changeColor = () => { //STEP 6
      this.color = "#"+((1<<24)*Math.random()|0).toString(16)
  }
  
}
let rover = new Rover(0,0)


//temp 128 

document.onclick = function(){  //STEP 4 
    
    var audio = new Audio('Dr. Dre - Still D.R.E. ft. Snoop Dogg.mp3'); //STEP 11 
    audio.play();

    let game = setInterval(()=>{ //STEP 7 
      
        rover._get() //STEP 8 - with changeColor 

      var e = document.createElement('div');  //Step 4 
      e.className += ' square';
      document.body.appendChild(e);
      
  },128*4)
  
}