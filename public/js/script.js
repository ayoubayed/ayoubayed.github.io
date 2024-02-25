$(document).ready(function () {
  $("#languages,#competences,#formations").hide();

  $("#Formations").click(function () {
    $(this).addClass("active");
    $("#Journal,#Compétences,#Langues").removeClass("active");
    $("#formations").show();
    $(
      "#professional1,#professional2,#professional3,#professional4,#professional5,#professional6,#professional7,#professional8,#professional9,#professional10,#timeline,#languages,#competences"
    ).hide();
  });

  $("#Journal").click(function () {
    $(this).addClass("active");
    $("#Formations,#Compétences,#Langues").removeClass("active");
    $(
      "#professional1,#professional2,#professional3,#professional4,#professional5,#professional6,#professional7,#professional8,#professional9,#professional10,#timeline"
    ).show();
    $("#formations,#competences,#languages").hide();
  });

  $("#Compétences").click(function () {
    $(this).addClass("active");
    $("#Formations,#Journal,#Langues").removeClass("active");
    $("#competences, #front").show();
    $(
      "#professional1,#professional2,#professional3,#professional4,#professional5,#professional6,#professional7,#professional8,#professional9,#professional10,#timeline,#languages,#formations,#deploy,#back"
    ).hide();
  });

  $("#Langues").click(function () {
    $(this).addClass("active");
    $("#Formations,#Journal,#Compétences").removeClass("active");
    $("#languages").show();
    $(
      "#professional1,#professional2,#professional3,#professional4,#professional5,#professional6,#professional7,#professional8,#professional9,#professional10,#timeline,#competences,#formations"
    ).hide();
  });

  $("#backend").click(function () {
    $(this).addClass("active");
    $("#frontend, #deployment").removeClass("active");
    $("#back").show();
    $(
      "#professional1,#professional2,#professional3,#professional4,#professional5,#professional6,#professional7,#professional8,#professional9,#professional10,#timeline,#formations, #deploy,#front"
    ).hide();
  });

  $("#deployment").click(function () {
    $(this).addClass("active");
    $("#frontend, #backend").removeClass("active");
    $("#deploy").show();
    $(
      "#professional1,#professional2,#professional3,#professional4,#professional5,#professional6,#professional7,#professional8,#professional9,#professional10,#timeline,#formations, #back,#front"
    ).hide();
  });

  $("#frontend").click(function () {
    $(this).addClass("active");
    $("#deploy, #backend").removeClass("active");
    $("#front").show();
    $(
      "#professional1,#professional2,#professional3,#professional4,#professional5,#professional6,#professional7,#professional8,#professional9,#professional10,#timeline,#formations, #back,#deploy"
    ).hide();
  });
});
