$(document).ready(function(){
});

// From http://stackoverflow.com/questions/2441565/how-do-i-make-a-div-element-editable-like-a-textarea-when-i-click-it
// User Anurag
var noteClicked = function(note_id, isParent){
	if (isParent[0] ==true){
		console.log(isParent);
		var top = $("#"+note_id+"").css("top");
	    var left = $("#"+note_id+"").css("left");
	    var text = $("#"+note_id+"").html();
	    //rows="4" chars="40" onkeyup="limitTextareaLine(this,
	    var editableText = $("<textarea wrap='off' rows='7' cols='17' onkeyup='limitNoteTextArea(this)' "+
	    					 "class = 'button draggable note "+activeUser+"' id='"+ note_id + "'> </textarea>");

	    $("#"+note_id+"").replaceWith(editableText);
	    $("#"+note_id+"").css({"top":top, "left":left});
	    $("#"+note_id+"").html(text);
	    editableText.focus();
	    $('.draggable').draggable({
	      containment: "#corkboard-overlay"
	    });
	    // setup the blur event for this new textarea
	    $("#"+note_id+"").on("blur",function (event, ui) {
	        editableNoteTextBlurred(note_id, isParent);
	      });
	};
}
var editableNoteTextBlurred = function(note_id, isParent){
    var top = $("#"+note_id+"").css("top");
    var left = $("#"+note_id+"").css("left");
    var text = $("#"+note_id+"").val();
    var viewableText = $("<div class = 'button draggable note "+activeUser+"' id ='"+note_id+"'> </div>");
    
    $("#"+note_id+"").replaceWith(viewableText);
    $("#"+note_id+"").css({"top":top, "left":left});
    $("#"+note_id+"").html(text);
    // setup the click event for this new div
    $('.draggable').draggable({
      containment: "#corkboard-overlay"
    });
    $("#"+note_id+"").on("click",function (event, ui) {
    	noteClicked(note_id, isParent);
    });
}

//using code found at http://stackoverflow.com/questions/14259580/textarea-with-limited-lines-and-char-limits
var limitNoteTextArea = function (id){
	var lines = id.value.split("\n");
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].length <= 17) continue;
        var j = 0; space = 17;
        while (j++ <= 17) {
            if (lines[i].charAt(j) === " ") space = j;
        }
        lines[i + 1] = lines[i].substring(space + 1) + (lines[i + 1] || "");
        lines[i] = lines[i].substring(0, space);
    }
    id.value = lines.slice(0, 7).join("\n");
}

