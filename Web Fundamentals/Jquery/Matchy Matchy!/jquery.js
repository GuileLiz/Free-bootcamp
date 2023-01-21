$(document).ready(function () {
    $("section img").click(function() {
        var source = $(this).attr("data-alt-src");
        var org_source = $(this).attr("src");
        if (org_source != source) {
            $(this).attr("src",source)
        } 
        else {
            $(this).attr("src","img/question_mark.svg.png")
        }
    });
})