var colors ={
    "0": "red",
    "1": "green",
    "2":  "transparent"
}



window.onload = function(){
    for (var i=0;i<20;i++){
    for (var k=0;k<20;k++){
     $pin = $('<input type="button"  value = ""/>');
      $pin.attr("id",i.toString()+"-"+k.toString())
    $pin.css("backgroundColor","transparent")
     $("#canvas").append($pin)
     $pin.on ("click",color)
      $("#"+i.toString()+"-"+k.toString()).attr("c","2")
    }
    }
};

function color(e){
    var but = $("#" + e.target.id)
    var c = parseInt(but.attr("c"))
    
   c= (c+1)%3
   but.attr("c",c)
   but.css("backgroundColor",colors[c.toString()])
}



function encrypt(){

 var txt = ""  
$("#txt").attr("rows", "20")
 $("#txt").attr("value","HAllo")
$("#txt").attr("visibility", "visible")
for (var i=0;i<20;i++){
    for (var k=0;k<20;k++){
        z = $("#"+i.toString()+"-"+k.toString()).attr("c")
        txt += z
    }
txt+="\n"
    }
    alert(txt)
    $("textarea#txt").text(txt)
    
}
