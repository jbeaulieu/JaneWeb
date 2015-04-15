$(document).ready(function(){
    $("#garbage-can").mouseover(function() {
      $(this).addClass("garbage2");
      $(this).removeClass("garbage1");
    });

    $("#garbage-can").mouseleave(function() {
      $(this).addClass("garbage1");
      $(this).removeClass("garbage2");
    });

    $("#garbage-can").droppable({
        tolerance: "touch",
        accept: ".draggable",
        hoverClass: "garbage2",
        drop: function(event, ui){
          ui.draggable.remove();
        }
    });
});