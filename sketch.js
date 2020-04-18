
var snake
var foodArr = {}
function setup() {
  
  createCanvas(400,400);
  frameRate(5)
  createFood()
  snake = new Snake()
  
  console.log(foodArr)
 
 // food = new Food(200,200,20,20)
}
function createFood(){
  var x = floor(random(20,380))
  var y = floor(random(20,380))
  foodArr["x"] = x
  foodArr["y"] = y

}

function draw() {
  background(255,155,0);  
  
  //console.log(snake.arrSnake.length)
  fill(0)
  noStroke()
  rect(foodArr['x'],foodArr['y'],20,20)
  
  
  
  if(snake.isTouching()){
    push()
    fill("black")
    textSize(30)
    text("YOU LOSE",130,100)
    pop()
    noLoop()
  }
  if(snake.foodEat(foodArr)){
    createFood()
  }
  snake.move()
  snake.display()
}

function keyPressed(){
  if(keyCode  === UP_ARROW){
    snake.updateDir(0,-25)

  }else if(keyCode  === DOWN_ARROW){
  snake.updateDir(0,25)
  }else if(keyCode  === RIGHT_ARROW){
    snake.updateDir(25,0)
  }else if(keyCode  === LEFT_ARROW){
  snake.updateDir(-25,0)
  }
}