$(document).ready(function(){

  var colorshowing = false;

  $("#paintbrush").mouseover(function(){

    if(!colorshowing){

    } 
  });

  $("#paintbrush").mouseleave(function(){
    if(!colorshowing){

    }
  });

  $("#paintbrush").click(function(){
    if(colorshowing === false){
      colorshowing = true;
    }else{
      colorshowing = false;
    }

    if(colorshowing === true){
      $(".color").css("visibility", "visible");
    }else{
      $(".color").css("visibility", "hidden");
    }
    
    
  });

});