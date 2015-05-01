$(document).ready(function(){
    $("#view-parent-board").hide();
    $("#view-child-board").click(function(){
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

    })

    $("#view-parent-board").click(function(){
        $(".add-button").show();
        $("#add-board").show()
        $("#view-child-board").show();
        $("#view-parent-board").hide();
        $("#board-name").text(childName + "'s Board");
        $("#corkboard-holder").css({"left": 0, "top": 0});
        $("#garbage-can").show();
        $("#paintbrush").show();
        $("#board-switcher").show();

    })


})