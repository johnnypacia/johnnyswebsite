console.log('linked and loaded');


var $codingProjects;

var $contact;

$(function (){

	$codingProjects = $("#coding-projects");



	$codingProjects.click(function(){


	$('.ui.modal').modal('show');

	});


	$contact = $('#contact');



	$contact.on('click', function(){
		window.scrollTo( 0, 1000 );
	});

	// $contact.click(function(){
	// window.scrollTo( 0, 1000 );
	// });
  










	// $('a.item').click(function(){
	// 	$('.item').removeClass('active');
	// 	$(this).addClass('active');
	// })

	// $('select.dropdown').dropdown('set selected', ['meteor', 'ember']);

	// $('.ui.modal')
 //     .modal('show');



});