$(document).ready(function(){
});
// editable textboxes from 
// http://stackoverflow.com/questions/2441565/how-do-i-make-a-div-element-editable-like-a-textarea-when-i-click-it
// User Anurag

// code for checklist inspired by Ronalds Vilcins. Found at
// http://codepen.io/RonaldsVilcins/pen/iJxGB

var listTitleClicked = function(list_id){
    var top = $("#"+list_id+"Title").css("top");
    var left = $("#"+list_id+"Title").css("left");
    var titleText = $("#"+list_id+"Title").html();

    var editableTitleText = $("<textarea id='"+ list_id + "Title'></textarea>");

    $("#"+list_id+"Title").replaceWith(editableTitleText);
    $("#"+list_id+"Title").css({"top":top, "left":left});
    $("#"+list_id+"Title").html(titleText);
    editableTitleText.focus();
    // setup the blur event for this new textarea
    $("#"+list_id+"Title").on("blur",function (event, ui) {
        editableListTitleBlurred(list_id);
      });
}

var listItemsClicked = function(list_id){
	$('#'+list_id+'input').css("visibility", "visible");
	$('#'+list_id+'add-checklist-item').css("visibility", "visible");
	var top = $("#"+list_id+"").css("top");
    var left = $("#"+list_id+"").css("left");
	var itemText = $("#"+item_id+"Item").html();
    
    $(list_id+"Items").each(function (index) {

    });
}

var listCheckboxClicked = function(list_id, item_id){

}

var editableListTitleBlurred = function(list_id){
    var top = $("#"+list_id+"Title").css("top");
    var left = $("#"+list_id+"Title").css("left");
    var text = $("#"+list_id+"Title").val();

    var viewableText = $("<h4 id ='"+list_id+"Title'> </h4>");
    $("#"+list_id+"Title").replaceWith(viewableText);
    $("#"+list_id+"Title").css({"top":top, "left":left});
    $("#"+list_id+"Title").html(text);
    // setup the click event for this new div
    $("#"+list_id+"Title").on("click",function (event, ui) {
    	listTitleClicked(list_id);
    });
}

$("body").on('click', '#list a', function () {
	$(this).closest("li").remove();
});

var addChecklistItem = function (list_id){
	console.log($("#"+list_id+"Input").val());
	$("<li>" + $("#"+list_id+"Input").val() + " <a id='deleter' href='#' class='close' aria-hidden='true'>&times;</a></li>").appendTo("#"+list_id+"Items")
	$("#"+list_id+"Input").val("");
	$("#"+list_id+"Input").focus();
}

  // <!-- modal for add-checklist -->
  //   <div class="modal fade" id="add-checklist-modal" tabindex="-1" role="dialog" aria-labelledby="add-checklist-modal" aria-hidden="true">
  //     <div class="modal-dialog">
  //       <div class="modal-content">
  //         <div class="modal-header">
  //           <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  //           <h4 class="modal-title" id="add-checklist-modal-label">Add Checklist</h4>
  //         </div>
  //         <div class="modal-body">
  //           <div class="input-group">
  //             <span class="input-group-addon">Checklist Title:</span>
  //             <input type="text" id="checklistTitle" class="form-control" aria-describedby="checklistTitle">
  //           </div>
  //           <!-- <div class="form-group"> -->
  //           <div>
  //             <!-- <form role="form"> -->
  //             <!-- <form> -->
  //               <input id = "item" type="text" class="form-control" placeholder="New item" name="item">
  //               <button type="submit" id="add-checklist-item" class="btn btn btn-primary">Add</button>
  //             <!-- </form> -->
  //           <ul class="list-unstyled" id="list"></ul>
  //         </div>
  //       </div>
  //       <div class="modal-footer">
  //         <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
  //         <button type="button" id="add-checklist-btn" class="btn btn-primary" data-dismiss="modal">Finish</button>
  //     </div>
  //     </div>
  //   </div>
  // </div>