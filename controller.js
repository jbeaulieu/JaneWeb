var activeUser = "";
var boardOffsets = {}; // denotes the current offset at which the image should be placed
 

$(document).ready(function() {
    var boardNames = [];   
    //document.getElementById("board-switcher").disabled = false;

    var newName = "Jane";
    document.getElementById("board-name").innerHTML = newName + "'s Board";
    boardNames.push(newName);
    boardOffsets[newName]= {left:20, top:20};
    $("#board-switcher").append("<option>" + newName);
    // $("#board-switcher").append('<li><a href="#">' + newName + '</a></li>')
	activeUser = newName;

    $(window).resize(function (e) {
      var border = $("#corkboard-border");
      var corkboard = $("#corkboard");

      border.css("height", corkboard.height() + 30);
      border.css("width", corkboard.width() + 30);
    });
    
	$("#rename-board").click(function (e) {
		var newName = prompt("Enter new name");
		var index = boardNames.indexOf(activeUser);
		if(index !== -1) {
			boardNames[index] = newName;
		}
		
		var dropDown = document.getElementById('board-switcher');
		for(i=0; i<dropDown.length; i++)
		{
			if(dropDown.options[i].value == activeUser)
			{
				dropDown.remove(i);
			}
		}
		
		$("." + activeUser).addClass(newName);
		$("." + activeUser).removeClass(activeUser);
		
		document.getElementById("board-name").innerHTML = newName + "'s Board";
		
		$("#board-switcher").append("<option>" + newName);
		document.getElementById("board-switcher").selectedIndex = document.getElementById("board-switcher").length - 1;
        activeUser = $("#board-switcher").val();
	});
	
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
        boardOffsets[newName]= {left:20, top:20};
        $("#board-switcher").append("<option>" + newName);
        // $("#board-switcher").append('<li><a href="#">' + newName + '</a></li>')
        
        if(boardNames.length > 1)
        {
          document.getElementById("board-switcher").style.visibility = "visible";
          // document.getElementById("board-select-text").style.visibility = "visible";
        }
        document.getElementById("board-switcher").selectedIndex = document.getElementById("board-switcher").length - 1;
        activeUser = $("#board-switcher").val();
      
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