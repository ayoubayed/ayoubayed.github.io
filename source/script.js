$(document).ready(function () {

    $("#infos,#competences,#archive").hide();
    

    $("#friend").click(function () {
        M.toast({ html: '<b>C\'est mon cv, pas mon facebook !</b>', classes: 'white red-text' })
        myToast.cancel();
    })

    $("#journal").click(function () {
        $("main").show();
        $("#infos,#competences").hide();
        M.toast({ html: '<b>Défiles pour lire mon journal !</b>', classes: 'white red-text' })
    })


    $("#propos").click(function () {
        $("main,#competences").hide();
        $("#infos,footer").show();
        
    });


    $("#amis").click(function () {
        $("main,#infos,#archive").hide();
        $("#competences,footer").show();
        
    });

    $("#chieve").click(function () {
        $("main,#infos,#competences").hide();
        $("#archive,footer").show();
        
    });

    $(".btn1").hover(function () {
        $(this).css("background-color", "#3949ab");
    }, function () {
        $(this).css("background-color", "#26a69a");
    })
});
