$(document).ready(function(){
	$("#icon").click(function(){
    $("#navigation").toggleClass("open").toggleClass("menu");
      $("#icon").toggleClass("icon-close").toggleClass("icon-menu");
	});
	$(window).scroll(function() {
    var windowHeight = $(window).scrollTop();
		console.log(+windowHeight)
    if (windowHeight >= 230) {
      $(".about").addClass("fade-up fade");
    } else  {
      $(".about").removeClass("fade-up fade");
    }
    if (windowHeight >= 965) {
      $(".services").addClass("fade-up");
    } else  {
      $(".services").removeClass("fade-up");
    }
    if (windowHeight >= 1600) {
			$(".estimate").addClass("fade");
    } else  {
      $(".estimate").removeClass("fade");
    }
    if (windowHeight >= 1800) {
      $(".estimate_content").addClass("Mright fade");
      $(".estimate_form").addClass("Mleft fade");
    } else  {
      $(".estimate_content").removeClass("Mright fade");
      $(".estimate_form").removeClass("Mleft fade");
    }
		if (windowHeight >= 2450) {
			$(".email").addClass("fade");
		} else  {
			$(".email").removeClass("fade");
		}
  });
  });
