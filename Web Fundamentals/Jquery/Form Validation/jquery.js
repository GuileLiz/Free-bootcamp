$(document).ready(function () {
    $( function() {
        $( "#datepicker" ).datepicker();
    } );
    /* $("form").submit(function(){
        return false;
    }); */
    $("form").submit(function(){
        var firstName=$(".firstName").val();
        var lastName=$(".lastName").val();
        var date=$(".date").val();
        if (!firstName || !lastName || !date) {
            alert("fill out the required fields");
            if(!firstName){
                $(".firstName").css("border","5px solid red")
            } 
            if (!lastName){
                $(".lastName").css("border","5px solid red")
            } 
            if (!date){
                $(".date").css("border","5px solid red")
            }
        } else {
            alert("success");
            $(".personal_details").css("border","1px solid black")
        }
        return false; 
    });
})

/* $(.firstName).css("border","4px solid yellow"); */