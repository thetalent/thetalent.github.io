var imgs = []
var pattern =  "https://raw.githubusercontent.com/thetalent/omapuzzle16/master/image_part_0xy.jpg"
var erow = 3;
var ecol = 3;
var shuffler=shuffle([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])


window.onload = function(){
	
	
if( !$ ) { console.log('jQuery failed to load'); return; } 

    getImages();
    //fillGrid();

 img()   
    
    
}



function getImages(){
        for(var i = 1;i<=15;i++){
        var zerofilled = ('00'+i).slice(-2);
        var pic =pattern.replace("xy", zerofilled);
        imgs.push(pic)
        
         }
}
    
function img(){
    
    for(var i=0;i<4;i++)  {
        for(var j = 0 ;j<4;j++){
            var $but = $('<input type="button"  value = " "/>');
            $but.attr("id",i.toString()+j.toString())
            $but.on("click",function(e){
                 var myId = e.target.id
                 var clickedRow = myId[0]
                 var clickedCol = myId[1]
                 var ng= isNeighbour(clickedRow, clickedCol,erow,ecol)
                 
                 if (ng != "f"){
                     //clicked in same col
                     if (ng == "c"){
                         
                         if (clickedRow < erow){
                             // clicked above empty cell
                             for(var i=parseInt(erow);i>clickedRow;i--){
                                 var im = $("#"+(i-1).toString()+ecol.toString()).css("background-image")
                                  $("#"+i.toString()+ecol.toString()).css("background-image",im)
                                 
                             }
                           $("#"+clickedRow.toString()+ecol.toString()).css("background-image","")
                           erow = clickedRow
                           return
                         }
                          else if (clickedRow > erow){
                              
                             // clicked above empty cell
                             for(var i=parseInt(erow);i<clickedRow;i++){
                                 var im = $("#"+(i+1).toString()+ecol.toString()).css("background-image")
                                  $("#"+i.toString()+ecol.toString()).css("background-image",im)
                                 
                             }
                           $("#"+clickedRow.toString()+ecol.toString()).css("background-image","")
                           
                         }
                       erow = clickedRow
                           return  
                         
                     }
                     if (ng == "r"){
                         
                         if (clickedCol < ecol){
                             // clicked above empty cell
                             for(var i=parseInt(ecol);i>clickedCol;i--){
                                 var im = $("#"+erow.toString()+(i-1).toString()).css("background-image")
                                  $("#"+erow.toString()+i.toString()).css("background-image",im)
                                 
                             }
                           $("#"+erow.toString()+clickedCol.toString()).css("background-image","")
                           ecol= clickedCol
                           return
                         }
                          else if (clickedCol > ecol){
                              
                             // clicked above empty cell
                             for(var i=parseInt(ecol);i<clickedCol;i++){
                                 var im = $("#"+erow.toString()+(i+1).toString().toString()).css("background-image")
                                  $("#"+erow.toString()+i.toString()).css("background-image",im)
                                 
                             }
                           $("#"+erow.toString()+clickedCol.toString()).css("background-image","")
                           
                         }
                       ecol = clickedCol
                           return  
                         
                     }
                     // only do sth. if clicked is neighbour of empty cell
                 
                
                 }
                 
            })
                 
            $("#grid").append($but)
            $("#"+i.toString()+j.toString()).css('background-image', 'url("' + imgs[shuffler[4*i + j]] + '")');
        }  
    }
    //last picture is simply black
    $("#33").css("background-image","")
}    


function isNeighbour(r0,c0,r1,c1){
    if(c0 != c1 && r0 != r1) return "f"
    if(c0 == c1 ) return "c"
if(r0 == r1) return "r"
}


function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i]
        a[i] = a[j]
        a[j] = tmp
        
    }
    return a;
}

function show(){
    $("#pic").css("visibility","visible")
 $("#sol").css("visibility","visible")
}
