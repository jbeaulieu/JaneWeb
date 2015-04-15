$(document).ready(function(){

  var colorshowing = false;

  $("#paintbrush").mouseover(function(){
    if(!colorshowing){
      $(this).css("opacity", "1");
    } 
  });

  $("#paintbrush").mouseleave(function(){
    if(!colorshowing){
      $(this).css("opacity", ".5");
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
      $(this).css("opacity", "1");
    }else{
      $(".color").css("visibility", "hidden");
      $(this).css("opacity", ".5");
    }
    
    
  });

});