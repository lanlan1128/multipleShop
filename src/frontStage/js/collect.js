$(function(){

	// 侧栏删除滑出
	$('.list').on('touchend',function(e){

		var scrollLeft = $(this).scrollLeft(),
			delWidth = $(this).find('.del').width();

		if( scrollLeft < delWidth/2 ) {
			$(this).scrollLeft(0);
		}else {
			$(this).scrollLeft(delWidth);
		}
		
	});

	// 点击删除按钮
	$('.del').tap(function(){
		var self = this;
		$.ajax({
			url: '',
			data: 'GET',
			success: function(data) {
				if(data.status === 1){
					$(self).parents('.list').remove();

			        $('.delTip').show();
			        setTimeout(function(){
			            $('.delTip').hide()
			        },2000);
				}
			}
		});// end ajax
	});

});