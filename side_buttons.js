// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
$(document).ready(function() {

  //$("#add-website-form").hide();
  //clicking the add website button should start to add a website
  $("#add-website-btn").click(function (e) {
    console.log("clicked add-website");
    var url = $("#website-url").val();
    console.log("url", url);
    $("#website-url").val("");
    $("body").append(createWebsiteObject(url));
  });

  //clicking the add note button should start to create a new note
  $("#add-note-btn").click(function (e) {
    console.log("clicked add-note");
    var note = $("#note").val();
    console.log("note", note);
    $("#note").val("");
    $("body").append(createNoteObject(note));
    $('.draggable').draggable();

  });

  //clicking the add checklist button should start a new checklist
  $("#add-checklist-btn").click(function (e) {
    console.log("clicked add-checklist");
    var checklistTitle = $("#checklistTitle").val();
    var checklistItems = $("#list").text();
    console.log("list", checklistItems);
    //empty the fields
    $("#item").val("");
    $("#checklistTitle").val("");
    $("#list").text("");
    $("body").append(createChecklistObject(checklistTitle, checklistItems));
  });

  //clicking the add photo button will pop up a screen to pick a photo from the screen
  $("#add-photo-btn").click(function (e) {
    console.log("clicked add-photo");
    //should createPhotoObject
    var url = $("input[name=img]").val();
    $("input[name=img]").val("");
    $("body").append(createPhotoObject(url));
  });
});


var createWebsiteObject = function(url){
  var fullUrl = $("#url-beginning").text() + url;
  var getImageUrl = "http://free.pagepeeker.com/v2/thumbs.php?size=m&url=" + fullUrl;

  var link = $('<a>', {href: url,
                   class:"website-link",
                   title: url,
                   target: "_blank"});
  var image = '<img class="website-image draggable" src=' + getImageUrl + '/>';

  var website = $('<span>', {class: "website-url",
                            text: url});
  link.append(image);
  link.append(website);
  return link
};

var createNoteObject = function(note){;
  var note = "<div class='button draggable' id=note-image>"+note+"</div>";
  return note;
  }

var createChecklistObject = function(title, items){
  var checklist = "<div class='button draggable' id=checklist-image>"+title+"\n"+items+"</div>";
  return checklist;
}

var createPhotoObject = function(url){
  var photo = "<div class='button draggable' id=photo><img src='../" + url + "'' width='130' height='130'/></div>";
  return photo;
}


// code for checklist modal from Ronalds Vilcins. Found at
// http://codepen.io/RonaldsVilcins/pen/iJxGB
// add item to the checklist
$(document).ready(function () {
    $('button').click(function () {
        $('#list').append("<li>" + $("input[name=item]").val() + " <a href='#' class='close' aria-hidden='true'>&times;</a></li>");
    });
    $("body").on('click', '#list a', function () {
        $(this).closest("li").remove();
    });
});


