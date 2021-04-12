$(document).ready(function() {
    $("#languages,#competences,#formations").hide();
    
    $("#Formations").click(function() {
        $(this).addClass("active");
        $("#Journal,#Compétences,#Langues").removeClass("active");
        $("#formations").show();
        $("#professional1,#professional2,#professional3,#professional4,#professional5,#professional6,#professional7,#timeline,#languages,#competences").hide();
    });

    $("#Journal").click(function() {
        $(this).addClass("active");
        $("#Formations,#Compétences,#Langues").removeClass("active");
        $("#professional1,#professional2,#professional3,#professional4,#professional5,#professional6,#professional7,#timeline").show();
        $("#formations,#competences,#languages").hide();
    });

    $("#Compétences").click(function() {
        $(this).addClass("active");
        $("#Formations,#Journal,#Langues").removeClass("active");
        $("#competences").show();
        $("#professional1,#professional2,#professional3,#professional4,#professional5,#professional6,#professional7,#timeline,#languages,#formations").hide();
    });

    $("#Langues").click(function() {
        $(this).addClass("active");
        $("#Formations,#Journal,#Compétences").removeClass("active");
        $("#languages").show();
        $("#professional1,#professional2,#professional3,#professional4,#professional5,#professional6,#professional7,#timeline,#competences,#formations").hide();
    });

});