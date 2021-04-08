jQuery(document).ready(function(){
	"use strict";
	$('#slider-carousel').carouFredSel({
		responsive:true,// Xác định xem các mục nó có nên phản ứng lại với băng chuyền hay không, nếu có thì các mục sẽ thay đổi kích thước để điền vào các băng truyền
		width: '100%',
		circular: true,//Xác định xem băng chuyền có phải là hình tròn không.
		scroll:{
			items:1,
			duration: 500,// khoảng thời gian
			pauseOnHover:true
		},
		auto:true,
		items:
		{
			visible:{
				min:1,
				max:1
			},
			height:"variable"
		},
		pagination:{
			container:".sliderpager",
			pageAnchorBuilder:false
		}
	});

	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if(top >=60)
		{
			$("header").addClass('secondary');
		}
		else
		{
			if($("header").hasClass('secondary'))
			{
				$("header").removeClass('secondary');
			}
		}
	});
});