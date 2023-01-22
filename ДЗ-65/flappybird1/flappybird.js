const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

//картинки

 const bg       = new Image();
 const bird     = new Image();
 const fg       = new Image();
 const truba1   = new Image();
 const truba2   = new Image();


 // Audio

 const fly     = new Audio();
 const score   = new Audio();

 // Присваивание даных

     bg.src    = "images/bg_6.png";
     bird.src  = "images/bird1.png";
     fg.src    = "images/fg.png";
     truba1    = "images/pipe_0.png";
     truba2    = "images/pipe_2.png";

  document.addEventListener("keydown", flyUp);  

  function flyUp(){
    yPos -= 25;

  }
  
  let xPos = 10;
  let yPos = 150;
  let padd = 90;
  let gray = 1.2;
  let pad2 = 0;


  function draw(){
    ctx.drawImage(bg, 0, 0);


    ctx.drawImage(truba1, 100,0);
    ctx.drawImage(truba2, 100, truba1.height + 90);
    
    ctx.drawImage(bird, xPos, yPos);

    yPos += gravity;

    requestAnimationFrame(draw);
  }

 truba2.onload = draw;