$(function() {
    $(".image")
        .mouseover(function() {
            $(this).addClass("hover");
        })
        .mouseout(function() {
            $(this).removeClass("hover");
        })
    ;
    $(".shop-link")
        .mouseover(function() {
            $(".image").addClass("hover");
        })
        .mouseout(function() {
            $(".image").removeClass("hover");
        })
    ;
});
