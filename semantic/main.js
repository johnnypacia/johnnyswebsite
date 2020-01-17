console.log('linked and loaded'); 

var $gradient;
var $recording;
var $contact;
var $production;
var $music;

$(function (){


	$recording = $("#recording");
	$recording.on('click', function (){
		$('#production').removeClass('active');
		$('.production.music').removeClass('active');
		$('.production.music').css("visibility", "hidden");
		$('.recording.music').addClass('active');
		$('.recording.music').css("visibility", "visible");
	});


	$production = $('#production');
	$production.on('click', function (){
		$('#recording').removeClass('active');	
		$('#production').addClass('active');
		$('.recording.music').removeClass('active');
		$('.recording.music').css("visibility", "hidden");
		$('.production.music').addClass('active');
		$('.production.music').css("visibility", "visible");
	});


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
 

	// $gradient = $('body')
	//   .visibility({
	//     once       : false,
	//     continuous : true,
	//     onPassing  : function(calculations) {
	//       var newColor = 'rgba(0, 0, 0, ' + calculations.percentagePassed +')';
	//       $(this)
	//         .css('background-color', newColor)
	//       ;
	//     }
	//   })
	// ;

});