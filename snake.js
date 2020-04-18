class Snake{
    constructor(){                
        this.arrSnake = []    
        this.snakeHead = {x:width/2,y:height/2}
        this.arrSnake.push(this.snakeHead)
        this.dirX = 0
        this.dirY = 0
       
        
    }
    updateDir(x,y){
        this.dirX  = x
        this.dirY = y
      
    }
    grow(){
        var head = this.arrSnake[0]
        this.arrSnake.splice(0,0,head)
       
    }
    move(){
       // var head = this.arrSnake[this.arrSnake.length-1]
        var head = JSON.parse(JSON.stringify(this.arrSnake[0]))
        this.arrSnake.pop()
        head["x"]+=this.dirX
        head["y"]+=this.dirY
        this.arrSnake.splice(0,0,head)
        
    }
    display(){
        for(var i =this.arrSnake.length-1 ;i >=0 ; i--){
            if(i == 0){
                fill("red")
            }else{
            fill("blue")
            }
            noStroke()
            rect(this.arrSnake[i]["x"],this.arrSnake[i]["y"],25,25)
            
        }

    }
    
    isTouching(){
        var head = this.arrSnake[0]
        var x = head["x"]
        var y = head["y"]
         for(var i = 1 ; i<this.arrSnake.length; i++){
            if( x-this.arrSnake[i]["x"]<20&&

             this.arrSnake[i]["x"]-x<20&&
 
             this.arrSnake[i]["y"]-y<20&&
 
             y-this.arrSnake[i]["y"]<20){
             
             return true
           }
        
      
     }
     if(x>350 || x<50 || y>350 || y<50){
        return true
    }
    return false
    
    }
    foodEat(food){
        var head = this.arrSnake[0]
        var x = head["x"]
        var y = head["y"]

       if( food["x"]-x<25&&

           x-food["x"]<25&&

           food["y"]-y<25&&

            y-food["y"]<25){
            this.grow()
            return true
        }
        return false
    }


}


    




