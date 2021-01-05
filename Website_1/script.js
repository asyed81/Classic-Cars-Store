
//Fade out first description and arrow, fade in 2nd description on scroll

$(window).scroll(function(){
    $(".MustangInfo").css("opacity", -0.1 + $(window).scrollTop() / 700);
    $(".scrDwnArrows").css("opacity", 0.7 - $(window).scrollTop() / 240);
    $(".top").css("opacity", 1 - $(window).scrollTop() / 250);

});

//Fade in first cars information on window load
$(document).ready(function(){
    $("#fade1").hide(0).delay(300).fadeIn(1000);
    $("#fade2").hide(0).delay(400).fadeIn(2500);
    $("#fade3").hide(0).delay(800).fadeIn(3500);
});

  //if passsed element is in view port returns true
  var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

//Checks radio button respective to element view port location
var selectBtn1 = document.getElementById('btn1');
var selectBtn2 = document.getElementById('btn2');
var tpSlide = document.getElementById('main-parallax')

window.addEventListener('scroll', function()
    {if (isInViewport(tpSlide)) {
    selectBtn1.checked = true;   
    }
    else{
        selectBtn2.checked = true;
    } 
})

