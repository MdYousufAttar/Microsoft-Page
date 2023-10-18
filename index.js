$(".prev").click(function() {
    $(".whole-cart")[0].fadeOut(100)
    $(".whole-cart")[1].fadeIn(100)
})
$(".next").click(function() {
    $(".whole-cart")[1].addClass("hidden")
    $(".whole-cart")[0].removeClass("hidden")
})