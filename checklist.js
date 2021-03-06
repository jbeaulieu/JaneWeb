$(document).ready(function(){
});
// editable textboxes from 
// http://stackoverflow.com/questions/2441565/how-do-i-make-a-div-element-editable-like-a-textarea-when-i-click-it
// User Anurag

// code for checklist inspired by Ronalds Vilcins. Found at
// http://codepen.io/RonaldsVilcins/pen/iJxGB

//list title has been clicked to edit
var listTitleClicked = function(list_id, isParent){
	if (isParent[0] == true){
		var top = $("#"+list_id+"Title").css("top");
	    var left = $("#"+list_id+"Title").css("left");
	    var titleText = $("#"+list_id+"Title").html();

	    var editableTitleText = $("<textarea id='"+ list_id + "Title' class='list_Title mono_font' maxlength='13'></textarea>");

	    $("#"+list_id+"Title").replaceWith(editableTitleText);
	    $("#"+list_id+"Title").css({"top":top, "left":left});
	    $("#"+list_id+"Title").html(titleText);
	    editableTitleText.focus();
	    // setup the blur event for this new textarea
	    $("#"+list_id+"Title").on("blur",function (event, ui) {
	    	editableListTitleBlurred(list_id, isParent);
	    });
	    $("#"+list_id+"Title").keypress(function (event, isParent){
	      if (event.which == 13){
	        $("#"+list_id+"Title").blur();
	      };
	    });
	};
}

//list title is finished being edited
var editableListTitleBlurred = function(list_id, isParent){
	$('#'+list_id+'input').css("visibility", "hidden");
	$('#'+list_id+'add-checklist-item').css("visibility", "hidden");
    var top = $("#"+list_id+"Title").css("top");
    var left = $("#"+list_id+"Title").css("left");
    var text = $("#"+list_id+"Title").val();

    var viewableText = $("<h4 id ='"+list_id+"Title' class='mono_font'> </h4>");
    $("#"+list_id+"Title").replaceWith(viewableText);
    $("#"+list_id+"Title").css({"top":top, "left":left});
    $("#"+list_id+"Title").html(text);
    // setup the click event for this new div
    $("#"+list_id+"Title").on("click",function (event, ui) {
    	listTitleClicked(list_id, isParent);
    });
}

//The area right below the list has been clicked to open the edit of the list 
var listItemsClicked = function(list_id, isParent){
	if (isParent[0] == true){
		$('#'+list_id+'input').focus();
		$('#'+list_id+'input').css("visibility", "visible");
		$('#'+list_id+'add-checklist-item').css("visibility", "visible");
		$("#"+list_id+"input").on("blur",function (event, ui) {
			editableListItemsBlurred(list_id, isParent);
	    });
	}
	else{
		return;
	};
}

//The input field of the list has been blurred so the user is no longer adding items to the list
var editableListItemsBlurred = function(list_id, isParent){
	$('#'+list_id+'input').css("visibility", "hidden");
	$('#'+list_id+'add-checklist-item').css("visibility", "hidden");
	$("#"+list_id+"editableItems").on("click",function (event, ui) {
		listItemsClicked(list_id, isParent);
	});
}

//the add button is clicked
var addChecklistItem = function (list_id, isParent){
	if (isParent[0] == true) {
		//check that the item to add is not an empty string 
		if ($("#"+list_id+"input").val() != ""  ){
			$("<li>" + $("#"+list_id+"input").val() + " <a id='deleter' href='#' class='close' aria-hidden='true'>&times;</a></li>").appendTo("#"+list_id+"Items")
			$("#"+list_id+"input").val("");
			$("#"+list_id+"input").focus();
		};
	};
}
