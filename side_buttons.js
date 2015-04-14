// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
$(document).ready(function() {

  //$("#add-website-form").hide();
  //clicking the add website button should start to add a website
  $("#add-website-btn").click(function (e) {
    console.log("clicked add-website");
    var url = $("#url-beginning").text() + $("#website-url").val();
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
  });

  //clicking the add checklist button should start a new checklist
  $("#add-checklist-btn").click(function (e) {
    console.log("clicked add-checklist");
  });

  //clicking the add photo button will pop up a screen to pick a photo from the screen
  $("add-photo-btn").click(function (e) {
    console.log("clicked add-photo")
  });


});


var createWebsiteObject = function(url){
  var link = $('<a>', {href: url,
                   class:"website-link",
                   title: url,
                   target: "_blank"});
  var image = '<img class="website-image draggable" src="images/default_website_icon.png" width="180" height="180"/>';
  var website = $('<span>', {class: "website-url",
                            text: url});
  link.append(image);
  link.append(website);
  return link
};

var createNoteObject = function(note){;
  var note = "<div class=button id=note-image>"+note+"</button>";
  return note;
}





