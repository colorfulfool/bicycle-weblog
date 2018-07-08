$(document).ready(function () {

	$('body').on('click', '[data-target="trueness"]', function () {
		trueness = $(this);
    truenessContainer = trueness.parents('[data-target="trueness-container"]');
    
		$.ajax(truenessContainer.attr('data-url'), {
			type: 'POST',
			data: { trueness: trueness.attr('data-value') },
			success: function (response) {
				truenessContainer.find('[data-target=trueness]').removeClass('trueness__option--active');
				trueness.addClass('trueness__option--active');
        
				truenessContainer.parents('[data-target="post"]').attr('data-trueness', trueness.attr('data-value'));
			}
		});
	});
  
});