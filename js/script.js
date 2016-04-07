$(function() {
    // Maintains hover state when mouse enters the image anchor tag
    $("article")
        .mouseover(function() {
            $(this).find(".image").addClass("hover");
        })
        .mouseout(function() {
            $(this).find(".image").removeClass("hover");
        })
    ;
});
