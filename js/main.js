$(document).ready(function(){
	$("html").addClass("js");
	$("html").removeClass("no-js");
	$(".menu-link").click(function(e) {
	  e.preventDefault();
	  $('body').removeClass("active-sidebar");
	  $('body').toggleClass("active-nav");
	  
	});
	$(".sidebar-link").click(function(e) {
	  e.preventDefault();
	  $('body').removeClass("active-nav");
	  $('body').toggleClass("active-sidebar");
	  
	});
});