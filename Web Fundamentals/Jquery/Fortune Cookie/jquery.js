$(document).ready(function () {
    $("section img").hover(function() {
        var source = $(this).attr("data-alt-src");
        var org_source = $(this).attr("src");
        $(this).attr("src",source);
        $(this).attr("data-alt-src",org_source)
/*         if (org_source != source) {
            $(this).attr("src",source)
        } 
        else {
            $(this).attr("src","img/question_mark.svg.png")
        } */
    });
})