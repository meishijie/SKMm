(function($) {
	var items = new Array(),
		errors = new Array(),
		onComplete = function() {},
		current = 0;
	
	var jpreOptions = {
		splashVPos: '35%',
		loaderVPos: '75%',
		splashID: '#jpreContent',
		showSplash: true,
		showPercentage: true,
		autoClose: true,
		closeBtnText: 'Start!',
		onetimeLoad: false,
		debugMode: false,
		splashFunction: function() {}
	}
	

	var getCookie = function() {
		if( jpreOptions.onetimeLoad ) {
			var cookies = document.cookie.split('; ');
			for (var i = 0, parts; (parts = cookies[i] && cookies[i].split('=')); i++) {
				if ((parts.shift()) === "jpreLoader") {
					return (parts.join('='));
				}
			}
			return false;
		} else {
			return false;
		}
		
	}
	var setCookie = function(expires) {
		if( jpreOptions.onetimeLoad ) {
			var exdate = new Date();
			exdate.setDate( exdate.getDate() + expires );
			var c_value = ((expires==null) ? "" : "expires=" + exdate.toUTCString());
			document.cookie="jpreLoader=loaded; " + c_value;
		}
	}
	
	
	var createContainer = function() {


		
		jOverlay = $('<div class="load_box"></div>')/*创建最大DIV*/
		//注：缓加载盒子中图片上线后需要更换为死链接图片
		.attr('id', 'jpreOverlay')
		.css({
			position: "fixed",
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			zIndex: 9999999
		})
		.appendTo('body');
		

		jLoader = $('<h3><a href="" target="_blank"> 网速不给力...</a> </h3>')														/*创建进度条外框DIV*/
		.attr('id', 'h3')
			.css({
			position: "fixed",
			zIndex: 9999999
		})
		.appendTo('body');
		
		
		jLoader = $('<div></div>')														/*创建进度条外框DIV*/
		.attr('id', 'jpreLoader')
		.appendTo(jOverlay);
		
		var posWidth = $(window).width() - $(jLoader).width();
		$(jLoader).css({
			position: 'absolute',
			top: jpreOptions.loaderVPos,
			left: Math.round((50 / $(window).width()) * posWidth) + '%'
		});
		
		jBar = $('<div></div>')																/*创建进度条DIV*/
		.attr('id', 'jpreBar')
		.css({
			width: '0%',
			//height: '100%'
		})
		.appendTo(jLoader);
		
		if(jpreOptions.showPercentage) {								/*百分比的位置*/
			jPer = $('<div style="font-size:20px;"></div>')
			.attr('id', 'jprePercentage')
			.css({
				position: 'absolute',
				height: '100%',
				top:jpreOptions.loaderVPos,
				left:0
			})
			.appendTo(jLoader)
			.html('Loading...');
		}

	}
	

	var getImages = function(element) {
		$(element).find('*:not(script)').each(function() {
			var url = "";

			if ($(this).css('background-image').indexOf('none') == -1 && $(this).css('background-image').indexOf('-gradient') == -1) {
				url = $(this).css('background-image');
				if(url.indexOf('url') != -1) {
					var temp = url.match(/url\((.*?)\)/);
					url = temp[1].replace(/\"/g, '');
				}
			} else if ($(this).get(0).nodeName.toLowerCase() == 'img' && typeof($(this).attr('src')) != 'undefined') {
				url = $(this).attr('src');
			}
			
			if (url.length > 0) {
				items.push(url);
			}
			
		});
		
	}
	

	var preloading = function() {
		for (var i = 0; i < items.length; i++) {
			if(loadImg(items[i]));
		}
	}
	var loadImg = function(url) {
		var imgLoad = new Image();
		$(imgLoad)
		.load(function() {
			completeLoading();
		})
		.error(function() {
			errors.push($(this).attr('src'));
			completeLoading();
		})
		.attr('src', url);
	}
	

	var completeLoading = function() {
		current++;

		var per = Math.round((current / items.length) * 100);
		
		
		$(jprePercentage).stop().animate({
			left: per + '%'											
		}, 500, 'linear');												/*百分比文字移动距离*/
		
		$(jBar).stop().animate({
			width: per + '%'											/*这个是进度条具体数值*/
		}, 500, 'linear');
		
		
		
		
		
		
		
		
		
		
		if(jpreOptions.showPercentage) {
			$(jPer).text(per+"%");
		}
		

		if(current >= items.length) {
			current = items.length;
			setCookie();	
			
			if(jpreOptions.showPercentage) {
				$(jPer).text("100%");
			}
			
			
			if (jpreOptions.debugMode) {
				var error = debug();
			}
			
			
		
			$(jBar).stop().animate({
				width: '100%'
			}, 500, 'linear', function() {
			
				if( jpreOptions.autoClose )
					loadComplete();
				else
					$(jButton).fadeIn(1000);
			});	
		}	
	}
	
	
	var loadComplete = function() {
		$(jOverlay).fadeOut(200, function() {						/*多少秒后执行加载完成后的回执函数	注:把数字修改成时间*/
			$(jOverlay).remove();
			$("#h3").css({"display":"none"});
			onComplete();	
		});
	}
	
	
	var debug = function() {													/*bug系统,有bug的时候的提示,具体英文根据项目做修改*/
		if(errors.length > 0) {
			var str = 'ERROR - IMAGE FILES MISSING!!!\n\r'
			str	+= errors.length + ' image files cound not be found. \n\r';	
			str += 'Please check your image paths and filenames:\n\r';
			for (var i = 0; i < errors.length; i++) {
				str += '- ' + errors[i] + '\n\r';
			}
			return true;
		} else {
			return false;
		}
	}
	
	$.fn.jpreLoader = function(options, callback) {
        if(options) {
            $.extend(jpreOptions, options );
        }
		if(typeof callback == 'function') {
			onComplete = callback;
		}
		
		
		$('body').css({
			'display': 'block'
		});
		
		return this.each(function() {
			if( !(getCookie()) ) {
				createContainer();
				getImages(this);
				preloading();
			}
			else {	
				$(jpreOptions.splashID).remove();
				onComplete();
			}
		});
    };

})(jQuery);