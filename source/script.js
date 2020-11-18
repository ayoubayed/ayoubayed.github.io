$(document).ready(function () {
   
   $(".dropdown-content>li>a").hover(function () {
        $(this).css("background-color", "#3949ab");
    }, function () {
        $(this).css("background-color", "#424242 ");
    })

    $('.modal').modal(); 
    $(".modal-trigger").css("background-color" ,"green")


    $("#infos,#competences,#archive").hide();

    $("#sub_form").click(function () {
        M.toast({ html: '<b>Envoie-moi plutôt un e-mail ;)</b>', classes: 'white red-text' })
        myToast.cancel();
    })

    $(".mdr").click(function () {
        M.toast({ html: '<b>Si tu veux en savoir plus, contactes-moi par e-mail !</b>', classes: 'white red-text' })
        myToast.cancel();
    })


    $("#friend").click(function () {
        M.toast({ html: '<b>C\'est mon cv, pas mon facebook !</b>', classes: 'white red-text' })
        myToast.cancel();
    })

    $(".com").click(function () {
        M.toast({ html: '<b>N\'hésite pas à m\'envoyer tes commentaires par e-mail ! </b>', classes: 'white red-text' })
        myToast.cancel();
    })

    $(".love").click(function () {
        M.toast({ html: '<b>N\'hésite pas à me suivre sur linkedin !</b>', classes: 'white red-text' })
        myToast.cancel();
    })

    $(".share").click(function () {
        M.toast({ html: '<b>N\'hésite pas à partager mon profil !</b>', classes: 'white red-text' })
        myToast.cancel();
    })


    $("#journal").click(function () {
        $("main").show();
        $("#infos,#competences").hide();
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
