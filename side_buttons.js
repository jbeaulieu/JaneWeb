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
    $("#corkboard-overlay").append(createWebsiteObject(url));
    $('.draggable').draggable({
      containment: "#corkboard-overlay"
    });
  });

  //clicking the add note button should start to create a new note
  $("#add-note-btn").click(function (e) {
    var note = $("#note").val();
    $("#note").val("");
    $("#corkboard-overlay").append(createNoteObject(note));
    $('.draggable').draggable({
      containment: "#corkboard-overlay"
    });

  });

  //clicking the add checklist button should start a new checklist
  $("#add-checklist-btn").click(function (e) {
    console.log("clicked add-checklist");
    var checklistTitle = $("#checklistTitle").val();
    var checklistItems = $("#list").html();
    //empty the fields
    $("#item").val("");
    $("#checklistTitle").val("");
    $("#list").empty();
    $("#corkboard-overlay").append(createChecklistObject(checklistTitle, checklistItems));
    $('.draggable').draggable({
      containment: "#corkboard-overlay"
    });
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


var createWebsiteObject = function(url){
  var fullUrl = $("#url-beginning").text() + url;
  var getImageUrl = "http://free.pagepeeker.com/v2/thumbs.php?size=m&url=" + fullUrl;

  var link = $('<a>', {href: fullUrl,
                   class:"website-link draggable",
                   title: fullUrl,
                   target: "_blank"});
  var image = '<img class="website-image" src=' + getImageUrl + '/>';

  var website = $('<span>', {class: "website-url",
                            text: url});
  link.append(image);
  link.append(website);
  return link;
};

var createNoteObject = function(note){;
  var note = "<div class='button draggable "+activeUser+"' id=note-image><p>"+note+"</p></div>";
  return note;
  }

var createChecklistObject = function(title, items){
  var checklist = "<div class='button draggable' id=checklist-image>"+
                      "<h4>"+title+"</h4>" + 
                      "<ul class='list-unstyled'>"+items+"</ul>"
                  "</div>";
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
      $("<li>" + $("input[name=item]").val() + " <a id='deleter' href='#' class='close' aria-hidden='true'>&times;</a></li>").appendTo("#list")
        //$('#list').appendChild("<li>" + $("input[name=item]").val() + " <a href='#' class='close' aria-hidden='true'>&times;</a></li>");
    });
    $("body").on('click', '#list a', function () {
        $(this).closest("li").remove();
    });
});


