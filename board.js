var passwordHash;

$(document).ready(function(){
    $("#view-parent-board").hide();

    //border stuff
    var border = $("#corkboard-border");
    var corkboard = $("#corkboard");

    border.css("height", corkboard.height() + 30);
    border.css("width", corkboard.width() + 30);

    $('#set-password-modal').on('shown.bs.modal', function () {
        $('#password-first').focus();
        $('#passwords-match-error').text("");
    })

    $("#save-password-btn").click(function(e){
        p1 = $("#password-first").val();
        p2 = $("#password-second").val();
        if (p1 != p2){
            e.preventDefault();
            $("#passwords-match-error").text("Your passwords don't match!");
        } else{
            passwordHash = p1.hashCode();
            showChildBoard();
            //$("#set-password-modal").hide();
            //$('body').removeClass('modal-open');
            //$('.modal-backdrop').remove();
            
        }

    })

    $("#enter-password-modal").on('shown.bs.modal', function(){
        $("#password-child").focus();
        $("#incorrect-password-msg").text("");
    })

    $("#password-child-enter").click(function(){
        password = $("#password-child").val();
        if (password.hashCode() == passwordHash){
            $("#password-child").val("");
            $("#enter-password-modal").hide();
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
            showParentBoard();
        } else{
            $("#incorrect-password-msg").text("Incorrect password. Please try again.");
        }
    })

    console.log("hm");
    // $('#add-website').bind('hidden.bs.modal', function () {
    //     console.log("hi");
    //     $("html").css("margin-right", "0px");
    // });
    // $('#add-website').bind('show.bs.modal', function () {
    //     console.log("hii");
    //     $("html").css("margin-right", "-15px");
    // });
});

String.prototype.hashCode = function(){
    var hash = 0;
    if (this.length == 0) return hash;
    for (i = 0; i < this.length; i++) {
        char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

var showChildBoard = function(){
    var corkboardOffset = $("#corkboard-holder").offset();
    $(".add-button").hide();
    var parentBoardName = $("#board-name").text();
    childName = parentBoardName.split("'s Board")[0];
    $("#board-name").text("Hi " + childName + "!");
    $("#view-child-board").hide();
    $("#add-board").hide()
    $("#view-parent-board").show();
    $("#corkboard-holder").offset({top: corkboardOffset.top, left: corkboardOffset.left});
    $("#garbage-can").hide();
    $("#paintbrush").hide();
    $("#board-switcher").hide();
}

var showParentBoard = function(){
    $(".add-button").show();
    $("#add-board").show()
    $("#view-child-board").show();
    $("#view-parent-board").hide();
    $("#board-name").text(childName + "'s Board");
    $("#corkboard-holder").css({"left": 0, "top": 0});
    $("#garbage-can").show();
    $("#paintbrush").show();
    $("#board-switcher").show();
}