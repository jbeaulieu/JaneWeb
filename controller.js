var activeUser = "";

$(document).ready(function() {
	
    var boardNames = [];
    //document.getElementById("board-switcher").disabled = false;

    var newName = prompt("Welcome to JaneWeb! Who should we create a board for?", "e.g. Tom");
    if(newName != null)
    {
      document.getElementById("board-name").innerHTML = newName + "'s Board";
      boardNames.push(newName);
      $("#board-switcher").append("<option>" + newName);
	  activeUser = newName;
    }
    
    //clicking the add new board button should prompt for the name of the new board
    $("#add-board").click(function (e) {
      newName = prompt("Who should we create this board for?", "e.g. Tom");
      if(newName != null)
      {
		for (i = 0; i < boardNames.length; i++) {
		  var activeObjects = document.getElementsByClassName(boardNames[i]);
		  var i;
		  for (j = 0; j < activeObjects.length; j++) {
			activeObjects[j].style.visibility="hidden";
		  }	
		}
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
      var activeObjects = document.getElementsByClassName(activeUser);
	  var i;
	  for (i = 0; i < activeObjects.length; i++) {
		activeObjects[i].style.visibility="hidden";
	  }
	  
	  activeUser = $("#board-switcher").val();
      document.getElementById("board-name").innerHTML = $("#board-switcher").val() + "'s Board";
      var activeObjects = document.getElementsByClassName(activeUser);
	  for (i = 0; i < activeObjects.length; i++) {
		activeObjects[i].style.visibility="visible";
	  }
    });
});