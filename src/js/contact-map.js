$(function(){
	function showModal(id){
		$(document.body).addClass('is-open-modal__contacts');
		$(id).addClass('is-open__contacts');
		console.log(id);
	}
	function hideModals(){
		$(document.body).removeClass('is-open-modal__contacts');
		$('.modal__contacts').removeClass('is-open__contacts');
	}

	$(".modal__contacts-open").on('click', function(e){
		console.log(e);
		showModal('#modal1');
 });
	
	$(document).on('click', function(e){
		if (!(
		($(e.target).parents('.dialog').length)
		||	($(e.target).hasClass('dialog'))
		||	($(e.target).hasClass('modal__contacts-open')))
		) {
			hideModals();
		}
	});
	
});