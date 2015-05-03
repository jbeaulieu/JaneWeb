// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
$(document).ready(function() {
  var note_id_num = 1; //each note has a unique id number
  var list_id_num = 1; //each list has a unique id number
  var item_id_num = 1; //every item from every list has a unique id num to differeniate


  $('#add-website-modal').on('shown.bs.modal', function () {
    $('#website-url').focus();
  })

  // This is the button INSIDE the add website modal
  $("#add-website-btn").click(function (e) {
    console.log("clicked add-website");
    var url = $("#website-url").val();
    console.log("url", url);
    $("#website-url").val("");
    $("#corkboard-overlay").append(createWebsiteObject(url));
    $('.draggable').draggable({
      containment: "#corkboard-overlay"
    });
  });

  //clicking the add note button should start to create a new note
  $("#add-note").click(function (e) {
    //create a note with one of the unique ids
    var note_id = "note"+ note_id_num;
    $("#corkboard-overlay").append(createNoteObject(note_id));
    $('.draggable').draggable({
      containment: "#corkboard-overlay"
    });
    $("#"+note_id+"").on("click",function( event, ui ) {
        noteClicked(note_id);
    });
    note_id_num +=1;
  });

  // Adds the checklist to the board
  $("#add-checklist").click(function (e) {
    var list_id = "list" + list_id_num;
    $("#corkboard-overlay").append(createChecklistObject(list_id));
    $('.draggable').draggable({
      containment: "#corkboard-overlay"
    });
    $("#"+list_id+"Title").on("click",function (event, ui ) {
      listTitleClicked(list_id);
    });
    $("#"+list_id+"Items").on("click",function (event, ui) {
      listItemsClicked(list_id);
    });
    //when you click the add checklist button, add an item
    $("#"+list_id+"add-checklist-item").on("click",function (event, ui ){
      addChecklistItem(list_id);
    });
    list_id_num +=1;
  });

  //clicking the add photo button will pop up a screen to pick a photo from the screen
  $("#add-photo-btn").click(function (e) {
    console.log("clicked add-photo");
    //should createPhotoObject
    var url = $("input[name=img]").val();
    $("input[name=img]").val("");
    $("#corkboard-overlay").append(createPhotoObject(url));
    $('.draggable').draggable({
      containment: "#corkboard-overlay"
    });
  });
});

// Source for thumbnails: http://pagepeeker.com/website-thumbnails-api/
var createWebsiteObject = function(url){
  var fullUrl = $("#url-beginning").text() + url;
  var getImageUrl = "http://free.pagepeeker.com/v2/thumbs.php?size=m&url=" + fullUrl;

  var link = $('<a>', {href: fullUrl,
                   class:"website-link draggable "+activeUser,
                   title: fullUrl,
                   target: "_blank"});
  var image = '<img class="website-image" src=' + getImageUrl + '/>';

  var website = $('<span>', {class: "website-url",
                            text: url});
  link.append(image);
  link.append(website);
  return offsetObject(link);
};

var createNoteObject = function(note_id){
  var note = $("<div class='button draggable note "+activeUser+"' id='"+note_id+"'></div>");
  return offsetObject(note);
}

var createChecklistObject = function(list_id){

  var checklist = $("<div class='button draggable list "+activeUser+"' id='"+list_id+"'>"+
                      "<h4 id='"+list_id+"Title'> title </h4>" +
                      "<ul id='"+list_id+"Items' class='list-unstyled'></ul>" +
                      "<input visibility='hidden' maxlength='20' id = '"+list_id+"Input' type='text' class='form-control' placeholder='New item' name="+list_id+"'item'>"+
                      "<button visibility='hidden' type='submit' id='"+list_id+"add-checklist-item' class='btn btn btn-primary'>Add</button></div>");
  return offsetObject(checklist);
}

var createPhotoObject = function(url){
  var photo = "<div class='button draggable "+activeUser+"' id='photo'><img src='images/vacation.jpg' height='130'/></div>";
  return photo;
}

var offsetObject = function(object){
  userOffset = boardOffsets[activeUser];
  object.offset({left:userOffset.left, top:userOffset.top});
  updateOffset(userOffset);
  return object;
}

var updateOffset = function(offset){
  if (offset.left + 450 >= $("#corkboard").width()){
    offset.left = 20;
    offset.top +=220;
  } else{
    offset.left += 220;
  }
  //offsettop?
}
