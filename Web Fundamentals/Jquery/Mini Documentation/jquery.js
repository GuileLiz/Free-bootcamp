$(document).ready(function () {
    $("#click a").click(function () {
        alert("This is an alert message!");
    });
    $("#hide a").click(function() {
        $("#hide p").hide()
    });
    $("#show a").click(function() {
        $("#hide p").show()
    });
    $("#toggle a").click(function(){
        $("#toggle p").toggle()
    });
    $("#slideDown a").click(function(){
        $("#slideDown p").slideDown()
    });
    $("#slideUp a").click(function(){
        $("#slideUp p").slideUp()
    });
    $("#slideToggle a").click(function(){
        $("#slideToggle p").slideToggle()
    });
    $("#fadeIn a").click(function(){
        $("#fadeIn p").fadeIn()
    });
    $("#fadeOut a").click(function(){
        $("#fadeOut p").fadeOut()
    });
    $("#addClass a").click(function(){
        $("#addClass p").addClass("new_class_for_#before_p")
    });
    $("#before a").click(function(){
        $("#before p").before("inserted here")
    });
    $("#after a").click(function(){
        $("#after p").after("inserted here")
    });
    $("#append a").click(function(){
        $("#append p").append("inserted here")
    });
    $("#attr a").click(function(){
        var attr = $(this).attr("href")
        $("#attr p").append(attr)
    });
    ;$("#html a").click(function(){
        $("#html p").html(( "<span class='red'>the html in p already <b>replace</b></span>" ))
    });
    $( "button" ).click(function() {
        var text = $(this).text();
        $( "input" ).val( text );
    });
    ;$("#text p").click(function(){
        var text = $(this).text()
        $("#text p").append(text)
    });
})
/* 

    $("#attr a").click(function(){
        $("#attr p").attr("color:blue")
    }); */

