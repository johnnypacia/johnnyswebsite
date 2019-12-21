console.log('linked and loaded'); 

var $gradient;
var $recording;
var $contact;
var $apps;
var $music;

$(function (){

	$('.ui.sticky')
	  .sticky({
  	});

	$recording = $("#recording");
	$recording.on('click', function (){
		$('#production').removeClass('active');
		$("#recording").addClass('active');
		$('#production').style.visibility = "hidden";
	});



	// click(function(){
	// 	$('.recording').item('show');
	// 	$('.production').item('hide');
	// });

	$contact = $('#johnny-contact');

	$contact.on('click', function(){
		$('.ui.sidebar').sidebar('toggle');
		
	});

	$('.right')
	  .on('click', function() {
	    console.log('right');
	    $('.slide')
	      .siblings('.active:not(:last-of-type)') 
	      .removeClass('active')
	      .next()
	      .addClass('active');
	});

	$('.left')
	  .on('click', function() {
	    console.log('left');
	    $('.slide')
	      .siblings('.active:not(:first-of-type)')
	      .removeClass('active')
	      .prev()
	      .addClass('active');
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

	$gradient = $('body')
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

	$gradient = $('.items')
	  .visibility({
	    once       : false,
	    continuous : true,
	    onPassing  : function(calculations) {
	      var newColor = 'rgba(255,255,255, ' + calculations.percentagePassed +')';
	      $(this)
	        .css('p', newColor)
	      ;
	    }
	  })
	;
});