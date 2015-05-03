$(document).ready(function(){
});

// From http://stackoverflow.com/questions/2441565/how-do-i-make-a-div-element-editable-like-a-textarea-when-i-click-it
// User Anurag
var noteClicked = function(note_id){
    var top = $("#"+note_id+"").css("top");
    var left = $("#"+note_id+"").css("left");
    var text = $("#"+note_id+"").html();
    var editableText = $("<textarea class = 'button draggable note "+activeUser+"' id='"+ note_id + "'> </textarea>");

    $("#"+note_id+"").replaceWith(editableText);
    $("#"+note_id+"").css({"top":top, "left":left});
    $("#"+note_id+"").html(text);
    editableText.focus();
    $('.draggable').draggable({
      containment: "#corkboard-overlay"
    });
    // setup the blur event for this new textarea
    $("#"+note_id+"").on("blur",function (event, ui) {
        editableNoteTextBlurred(note_id);
      });
}
var editableNoteTextBlurred = function(note_id){
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
    	noteClicked(note_id);
    });
}