//load圖片用
(function($) {
	var imgList = [];
	$.extend({
		preload: function(imgArr, option) {
			var setting = $.extend({
				init: function(loaded, total) {},
				loaded: function(img, loaded, total) {},
				loaded_all: function(loaded, total) {}
			}, option);
			var total = imgArr.length;
			var loaded = 0;
			
			setting.init(0, total);
			for(var i in imgArr) {
				imgList.push($("<img />")
					.on("load", function(){
						loaded++;
						setting.loaded(this, loaded, total);
						if(loaded == total) {
							setting.loaded_all(loaded, total);
						}
					})
					.attr("src", imgArr[i])
				);
			}
			
		}
	});














	
})(jQuery);



