state =[ [1,2,3,4,5] ,[]]
//cs=[255,155,55]
rh= 50
rw=150
gap=20
//offset=50
moves = 0
colors = ["dr","dbl","r","bl","br"]
done = false
buttons = []
textsize = 15
label="ASNEM"
  


function bpressed(b){
    moves += 1
    done = true
    b = int(b)
   
    if (state[0].includes(b)){
        l1 = state[0]
        l2 = state[1]
        turn = true
    }
    else {
        l1 = state[1]
        l2 = state[0]
        turn = false
    }
    idx = l1.indexOf(b)
    if(idx < l1.length-3){
        alert("Das sind zuviele Scheiben!")
        return
    }
    if((b%2) == (l2[l2.length-1]%2)){
        alert("DAS geht nicht - gleiche Farbe")
        return
    }
  
    ship = l1.slice(idx,l1.length)
    l1 = l1.slice(0,idx)
    l2 = l2.concat(ship)
    if(turn){
        state[0] = l1
        state[1] = l2
    }
    else{
       state[1] = l1
        state[0] = l2 
    }
    redraw()

}
    

function render(){
 
 background(255,255,255,255)
 
 text("Züge: " + moves,10,35)
 buttons.forEach(function(item){item.remove()})

 for(let i=0;i<2;i++){
     let h = 300
      
     state[i].forEach(function(item){
       
         button = createButton(label[item-1]).addClass(colors[item%2])
          button.position(gap+(i*rw)+i*gap, h,rw,rh)
          button.size(rw,rh)
        button.mousePressed(()=>bpressed(item))
        buttons.push(button)
         
         h= h - rh
      })
 } 
      
b= createButton("reset")   
b.position(300,400)  
b.size(50,30) 
b.mousePressed(()=>reset())
b.addClass("br")
}

function reset(){
    moves = 0
    state =[ [1,2,3,4,5] ,[]]
    redraw()
}

function setup(){
    alert("Hallo Ms! Der Turm muss nach rechts. Ihr dürft bis zu 3 Scheiben gleichzeitig bewegen. Aber keine gleichen Farben aufeinander ")
    textSize(textsize);
    
     render()
    noLoop()
}


function draw(){
     if(JSON.stringify(state)==JSON.stringify([[],[1,2,3,4,5]])){
         render()
         alert("won")
         return
     }
   render()
    

    }

