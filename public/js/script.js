cript$(function(){$("#accordionSolution").on("hidden.bs.collapse",function(){$(".collapsible-header").removeClass("active")}),$("#accordionSolution").on("shown.bs.collapse",function(){$(".collapsible-header").removeClass("active"),$(".show").prev().addClass("active")}),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(a){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);(e=e.length?e:$("[name="+this.hash.slice(1)+"]")).length&&(a.preventDefault(),$("html, body").animate({scrollTop:e.offset().top-30},1e3,function(){var a=$(e);if(a.focus(),a.is(":focus"))return!1;a.attr("tabindex","-1"),a.focus()}))}});var a=[],e=$(".navbar-collapse"),s=$("a",e);s.each(function(){a.push($($(this).attr("href")))}),$(window).scroll(function(r){var t=a[0].height()/2+200,n=$(this).scrollTop()+$(window).height()/2;for(var i in a){var o=a[i];scrolled_id=o.attr("id"),$(window).width()>="1200"&&(n>t?($("#navbar-second").show("slow"),$("#navbar-second").css("display","flex")):$("#navbar-second").hide("slow")),n>o.offset().top+200&&(s.removeClass("current"),s.parent("li").removeClass("active"),$('a[href="#'+scrolled_id+'"]',e).addClass("current"),$('a[href="#'+scrolled_id+'"]',e).parent().addClass("active"))}}),$.fn.isInViewport=function(){var a=$(this).offset().top,e=a+$(this).outerHeight(),s=$(window).scrollTop(),r=s+$(window).height();return e>s&&a<r},$(window).on("resize scroll",function(){$(".progress-bar").hasClass("animateProgressbar")||$(".skill_progress").each(function(){$(this).isInViewport()?($(".progress-bar").addClass("animateProgressbar"),$(".progress-bar").each(function(){var a=$(this).attr("aria-valuenow");$(this).animate({width:a+"%",percent:100},{progress:function(e,s,r){$(this).css("width",a*s+"%")}})}),$("#Stage_box1").find(".ani_donut").addClass("run_animation0"),$("#Stage_box2").find(".ani_donut").addClass("run_animation1")):$(".progress-bar").stop()})}),$(".contact-input").keyup(function(){this.value?$(this).addClass("has-val"):$(this).removeClass("has-val")}),$(function(){var a=$("#message"),e=$(document.createElement("div")),s=null;a.addClass("txt"),e.addClass("div-hidden common"),$("body").append(e),a.on("keyup",function(){s=(s=$(this).val()).replace(/\n/g,"<br>"),e.html(s+'<br class="line-break">'),$(this).css("height",e.height())})}),$(function(){$("#form_contact").submit(function(){return function(){var a=$("#name").val(),e=$("#email").val(),s=$("#message").val(),r=new Array(a,e,s),t=0;$("#form_contact").prev("div.alert").remove(),$(".input-group-append").remove(),$(".form-control").removeClass("success-feedback"),$(".form-control").removeClass("error-feedback"),$(".invalid-feedback").hide(),$(".invalid-feedback").text("* Champ requis"),""==r[0]?($("#name").after('<div class="input-group-append"><span class="input-group-text-error"><i class="fas fa-exclamation"></i> Champs obligatoire</span></div>'),$("#name").addClass("error-feedback"),t++):/^[A-Za-z\u00C0-\u017F]?([ \-']?[A-Za-z\u00C0-\u017F]+[ \-']?[A-Za-z\u00C0-\u017F]+[ \-']?[A-Za-z\u00C0-\u017F]+[ \-']?[A-Za-z\u00C0-\u017F])+$/.test(a)||($("#name").after('<div class="input-group-append"><span class="input-group-text-error"><i class="fas fa-exclamation"></i> Lettres uniquement</span></div>'),$("#name").addClass("error-feedback"),t++);""==r[1]?($("#email").after('<div class="input-group-append"><span class="input-group-text-error"><i class="fas fa-exclamation"></i> Champs obligatoire</span></div>'),$("#email").addClass("error-feedback"),t++):/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(e)||($("#email").after('<div class="input-group-append"><span class="input-group-text-error"><i class="fas fa-exclamation"></i> Entrez une adresse mail valide</span></div>'),$("#email").addClass("error-feedback"),t++);""==r[2]&&($("#message").after('<div class="input-group-append"><span class="input-group-text-error"><i class="fas fa-exclamation"></i> Champs obligatoire</span></div>'),$("#message").addClass("error-feedback"),t++);0===t&&$.post("controller/mail.php",{nom:a,email:e,message:s},function(a){$("#form_contact").before(a)});return!1}()})})});