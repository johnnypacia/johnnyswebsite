console.log('linked and loaded');

$( function (){
	$('a.item').click(function(){
		$('.item').removeClass('active');
		$(this).addClass('active');
	})

	$('select.dropdown').dropdown('set selected', ['meteor', 'ember']);

	$('.ui.modal')
  .modal('show')
;
});