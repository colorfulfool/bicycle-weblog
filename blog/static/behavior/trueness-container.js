$(document).ready(function () {

	$('body').on('click', '[data-behavior="trueness"]', function () {
		trueness = $(this);
    truenessContainer = trueness.parents('[data-behavior="trueness-container"]');
    
		$.ajax(truenessContainer.attr('data-url'), {
			type: 'POST',
			data: { trueness: trueness.attr('data-value') },
			success: function (response) {
				truenessContainer.find('[data-behavior=trueness]').removeClass('trueness__option--active');
				trueness.addClass('trueness__option--active');
        
				truenessContainer.parents('[data-behavior="post"]').attr('data-trueness', trueness.attr('data-value'));
			}
		});
	});
  
});