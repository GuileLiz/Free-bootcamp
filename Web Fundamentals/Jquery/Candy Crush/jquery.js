$(document).ready(function() {
    $(".container main img").click(function(){
        $(this).hide()
    });
    $(".container button").click(function(){
        $(".container main img").show()
    });
})