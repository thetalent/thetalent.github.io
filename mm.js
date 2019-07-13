 colors = ["blue","green","yellow","red","orange","magenta"]
 result = [3,2,1,0]//red yellow green blue
 var pinCols = ["green","yellow","red"]
 var actualColor = 0
 
 //colorbuttons have id row+col
 //questionmarker have id q+row
 //pins have id p+row+i for i = 0 to 3 
 var index = 0;
 window.onload = function(){
   
   
  //colorPickers 
  colorPickers()
   
     
 
 for(var i =0;i<4;i++){result[i]=
 Math.floor(Math.random() * (colors.length -1))}
     for(var i = 0;i<10;i++){
         // i row
     
     // 5 button: 4 colors and one question mark
        for (var j = 0; j<5;j++){
            var content  =i.toString() + j.toString()
            
             var $but = $('<input type="button"  value = " "/>');
             $but.attr("id",i.toString()+j.toString())
             $but.attr("col","2")
             
             
             // first four buttons change color at click
             if(j<4){$but.on("click",function(e){
                 var myId = e.target.id
                
                 $("#"+myId).css("background-color", colors[actualColor]);
                  $("#"+myId).attr("col",(actualColor.toString()))
                  
                  
                 
             })}
             // here we add questionsmarker as fith button
             else{ $but.on("click",function(e){
                 evaluateIt(e)
             }) ; $but.attr('value', '?'); $but.attr('id',"q"+i.toString())}
             
        $but.appendTo($("#board"))
    }
    
    // and finally one pin-matrix for each row
   $("#board").append('<div class = "pins" id = "pins' + i.toString() +'"></div>');
    
    for (var k=0;k<4;k++){
     $pin = $('<input type="button"  value = "o"/>');
      $pin.attr("id","p"+i.toString()+k.toString())
     $("#pins"+i.toString()).append($pin)
    }}
     
 }  

 
 function changeColor(){
     alert(id)
     var index = 0
     var myId = "#"+id
     $(myId).attr("background-color",colors[index])
 }
 function evaluateIt(e){
      $("#"+myId).on("click",function(e){doNothing()})
      var evalArray = [9,9,9,9]
      var myId = e.target.id // id of questionmark
      // row of questionmark
      var row = myId[1]
      // get all four colBottons of the row and their colors to evalArray
      for(var i = 0;i<4;i++){
          var colButID = row+i.toString()
          var colValue=$("#"+colButID).attr("col");
 $("#"+colButID).attr("disabled",true);          
          
          evalArray[i] = parseInt(colValue);
          $("#"+colButID).attr("onclick",function(){});
      }
     // check if done
      if (match(evalArray)){alert ("you found the color")}
      //.. otherwise get the pins
      makePins(evalArray,row)
     
 }
 
 function doNothing(){
     
 }
 
 function match(arr){
      for(var i = 0;i<4;i++){
          if(arr[i] != result[i]) return false
      }
      return true
     
 }
 
 function makePins(arr,row){

     var pins = [2,2,2,2] 
     var res = Array.from(result); // copy of resultarray
     
     for(var i = 0;i<4;i++){
          if(res[i] == arr[i]) {
              pins[i] = 0;
              arr[i] = 99;
              res[i]= 98}
      }
      
      for(var i = 0;i<4;i++){
          if(arr[i] > 5) continue
          
          
          // color found in result
          var colIx =  res.indexOf(arr[i])
          if(colIx > -1){              
              pins[i] = 1
              res[colIx] = 98
                         
          }
        
      }
      
      pins.sort()
     
      //pins have id p+row+i for i = 0 to 3 
       for(var i = 0;i<4;i++){
           $("#p"+row.toString()+i.toString()).css("background-color", pinCols[pins[i]]);
       }
      
      
 }
 function colorPickers(){
     $("#secret >").each(function(idx, it){
     $(it).on("click",function(e){colorPick(e)})   
          
     $(it).css("background-color",  colors[$(it).attr("id")])
     })
 }
 
 function colorPick(e){
     
     try{
     actualColor = ($(e.target).attr("id"))
     }
     catch(e){
         
     }
     $("#grey").css("background-color", colors[actualColor])
     
 }
 

 
