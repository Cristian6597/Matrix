$(document).ready(function(){
    $("#button1").click(function(){
        $("#testo1").hide();
    });
});

$(document).ready(function() {
    $("#button2").click(function(){
        $("#text2").append("<p>New text appended</p>");
    })
})

$(document).ready(function() {
    $("#button3").click(function(){
        $("#cambia-testo").css("color", "red");
    });
});
