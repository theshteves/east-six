$(document).ready( function() {
    $("#wallpaper").fadeOut(1);
    $("#join1").fadeOut(1);
    $("header").fadeOut(1);
    $("main").toggle("slide", {direction: "up", distance: 100}, 1);
    $("h2").fadeOut(1);
]    
    $("h2").show("clip", 1000);
    $("header").delay(1500).show("bounce", 1000);
    $("#wallpaper").delay(2500).fadeIn(2000);
    $("#join1").delay(3000).fadeIn(1000);
    $("main").delay(3000).effect("slide", {direction: "down", distance: 100}, 1000);
    
    $(window).on("scroll", function() {
	var navHeight = $(window).height() - 80;
	if ($(window).scrollTop() > navHeight) {
                 $("menu").css("position","fixed");
             }
             else {
                 $("menu").css("position","absolute");
             }
    });
    $("#join1").click( function() {
	$("main").effect("bounce", {times: 1}, 500);
    });

});