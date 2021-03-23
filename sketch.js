
var cat
var mouse

var backgroundImg
var catImg1,catImg2,catImg3,catImg4
var mouse1Img1,mouse1Img2,mouse1Img3,mouse1Img4


function preload() {
    backgroundImg = loadImage("images/garden.png");
  catImg1 = loadAnimation("images/cat1.png")
  catImg2 = loadAnimation("images/cat2.png","images/cat3.png")
  catImg3 = loadAnimation("images/cat4.png")

  mouse1Img1 = loadAnimation("images/mouse1.png")
  mouse1Img2 = loadAnimation("images/mouse2.png","images/mouse3.png")
  mouse1Img3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    
     cat = createSprite(870,600)
     cat.addAnimation("catsleeping",catImg1)
     cat.scale = 0.2

     mouse = createSprite(200,600)
     mouse.addAnimation("mousestanding",mouse1Img1)
     mouse.scale = 0.15
    }



function draw() {
    background(backgroundImg);

    if(cat.x - mouse.x <(cat.width - mouse.width)/2) {
        cat.velocityX = 0
        cat.addAnimation("catlastImage",catImg3)
    cat.x = 300
    cat.scale = 0.2
    cat.changeAnimation("catlastImage")

    mouse.addAnimation("mouselastImage",mouse1Img3)
    mouse.scale = 0.3
    mouse.changeAnimation("mouselastImage")
    
    }
    drawSprites();

}

function keyPressed(){

if (keyCode ===LEFT_ARROW) {
cat.velocityX = -5;
cat.addAnimation("catRunning",catImg2)
cat.changeAnimation("catRunning")

mouse.addAnimation("mouseteasing",mouse1Img2)
mouse.frameDelay = 25
mouse.changeAnimation("mouseteasing")
}
}
