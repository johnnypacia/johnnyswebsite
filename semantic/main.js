console.log('linked and loaded'); 

var $gradient;
var $resume;
var $contact;
var $apps;
var $music;

$(function (){

	$('.ui.sticky')
	  .sticky({
  	});

	$resume = $("#resume");
	$resume.click(function(){
		$('.ui.modal').modal('show');
	});

	$contact = $('#johnny-contact');

	$contact.on('click', function(){
		$('.ui.sidebar').sidebar('toggle');
		
	});

	$apps = $('#coding-projects');
	$apps.on('click', function(){
		window.scrollTo( 0, 1600 );
		$('a').transition({
	    animation : 'pulse',
	    reverse   : true,
	    interval  : 200
	  	});
	});

	$music = $('#music-projects');
	$music.on('click', function(){
		window.scrollTo( 0, 3000 );
		$('a').transition({
	    animation : 'pulse',
	    reverse   : true,
	    interval  : 200
	  	});
	});

	$gradient = $('.ui.demo.segment ui.items')
	  .visibility({
	    once       : false,
	    continuous : true,
	    onPassing  : function(calculations) {
	      var newColor = 'rgba(0, 0, 0, ' + calculations.percentagePassed +')';
	      $(this)
	        .css('background-color', newColor)
	      ;
	    }
	  })
	;

});