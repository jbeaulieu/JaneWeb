$(document).ready(function() {
    
    var boardNames = [];
    document.getElementById("board-switcher").disabled = false;

    var newName = prompt("Welcome to JaneWeb! Who should we create a board for?", "e.g. Tom");
    if(newName != null)
    {
      document.getElementById("board-name").innerHTML = newName + "'s Board";
      boardNames.push(newName);
      $("#board-switcher").append("<option>" + newName);
    }
    
    //clicking the add new board button should prompt for the name of the new board
        $("#add-board").click(function (e) {
      newName = prompt("Who should we create this board for?", "e.g. Tom");
      if(newName != null)
      {
        document.getElementById("board-name").innerHTML = newName + "'s Board";
        boardNames.push(newName);
        $("#board-switcher").append("<option>" + newName);
        
        if(boardNames.length > 1)
        {
          document.getElementById("board-switcher").style.visibility = "visible";
          document.getElementById("board-select-text").style.visibility = "visible";
        }
        document.getElementById("board-switcher").selectedIndex = document.getElementById("board-switcher").length - 1;
      }
        });
    
    $("#board-switcher").change(function (e) {
      document.getElementById("board-name").innerHTML = $("#board-switcher").val() + "'s Board";
      // This is where we'll need to cache board data
    });

    $("#garbage-can").mouseover(function() {
      $(this).css("background-image", "url('images/Garbage2.png')")
    });

    $("#garbage-can").mouseleave(function() {
      $(this).css("background-image", "url('images/Garbage1.png')")
    });
});