$(document).ready( function() {

    $('#particles').particleground({
	dotColor: '#ffffff',
	lineColor: '#5cbdaa'
    });

    $('#greeting').typewrite({
	'delay': 50,
	'extra_char': ''
    });

    $("#wallpaper").fadeOut(1000);
    $("#greeting").fadeOut(1000);

    /*
    $("header").fadeOut(1);
    $("main").toggle("slide", {direction: "up", distance: 100}, 1);
    $("#greeting").fadeOut(1);
    */

    $("#greeting").show("clip", 1000);
    $("#wallpaper").delay(2500).fadeIn(2000);

    /*
    $("header").delay(1500).show("bounce", 1000);
    $("#join1").delay(3000).fadeIn(1000);
    $("main").delay(3000).effect("slide", {direction: "down", distance: 100}, 1000);
    */
    /*
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
	 */
});
