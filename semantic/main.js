console.log('linked and loaded'); 


var $resume;
var $contact;
var $apps;
var $music;

$(function (){

	$('.ui.sticky')
	  .sticky({
	    context: '#sticky-container'
  	});

	$resume = $("#resume");
	$resume.click(function(){
		$('.ui.modal').modal('show');
	});

	$contact = $('#contact');
	$contact.on('click', function(){
		window.scrollTo( 0, 400 );
	});

	$apps = $('#coding-projects');
	$apps.on('click', function(){
		window.scrollTo( 0, 1000 );
	});

	$music = $('#music-projects');
	$music.on('click', function(){
		window.scrollTo( 0, 1400 );
	});



});