$(function() {
	var sp = 0;
	$(".findMore").anchorHoverEffect({
		type: 'roller3d'
	})
	var xuewuzhijing = new Vivus('xwzj', {
		type: 'oneByOne',
		duration: 120,
		file: 'media/xuewuzhijing.svg',
		start: "inViewport"
	});
	var mabutingxi = new Vivus('mbtx', {
		type: 'oneByOne',
		duration: 120,
		file: 'media/mabutingxi.svg',
		start: "inViewport"
	});

	function showMac() {
		setTimeout(function() {
			$("#imac img").fadeIn(400);
			$("#workOnPC").fadeIn(500);
			imac.destroy();
		}, 1600)
	}

	function showPad() {
		setTimeout(function() {
			$("#ipad img").fadeIn(400);
			$("#workOnPad").fadeIn(500);
			ipad.destroy();
		}, 2000)
	}

	function showPhone() {
		setTimeout(function() {
			$("#iphone img").fadeIn(400);
			$("#workOnApp").fadeIn(500);
			$("#iphone").addClass('ishadow');
			iphone.destroy();
		}, 2200)
	}

	var imac = new Vivus('imac', {
		type: 'delayed',
		duration: 80,
		file: 'media/imac.svg',
		start: "manual"
	});

	var ipad = new Vivus('ipad', {
		type: 'delayed',
		duration: 100,
		file: 'media/ipad.svg',
		start: "manual"
	});

	var iphone = new Vivus('iphone', {
		type: 'delayed',
		duration: 110,
		file: 'media/iphone.svg',
		start: "manual"
	});
	$("#workOnPC .flexslider").flexslider({
		slideshowSpeed: 4000, 
		animationSpeed: 400, 
		touch: true ,
		pauseOnAction:false
	});
	$("#workOnPad .flexslider").flexslider({
		slideshowSpeed: 4000, 
		animationSpeed: 400, 
		touch: true ,
		pauseOnAction:false
	});
	$("#workOnApp .flexslider").flexslider({
		slideshowSpeed: 4000, 
		animationSpeed: 400, 
		touch: true ,
		pauseOnAction:false
	});
	
	$(window).scroll(function() {
		sp = $(window).scrollTop();
		//console.log(sp)
		if (sp >= 200) {

		}
		if (sp >= 1000) {
			$("#sub_bg").fadeIn(800)
		}
		if (sp >= 3000) {
			imac.play();
			ipad.play();
			iphone.play();
			showMac();
			showPad();
			showPhone();
		}
	})

	var sharebtns = $(".share-button");
	var shareflag = true;
	sharebtns.each(function(i, dom) {
		$(dom).click(function() {
			$(this).children().find(".share_text").show(400)
		})
	})
	$(".share-toggle-button").click(function() {
		if (shareflag) {
			$(".share_text").fadeIn(400)
		} else {
			$(".share_text").fadeOut(200)
		}
		shareflag = !shareflag;
	})
	$(".send").click(function() {
		$("#message #email").val("");
		$("#message #sug").val("");
	})
	$("#work_chatroom").click(function(){
		$.ajax({
        type:"GET",
        url:"asset/mywork/chatroom/index.html",
        success: function (data) {
           window.location.href = "http://www.charleszgj.com/asset/mywork/chatroom/index.html"
        },
        err: function (err) {
            $("#pwdCheckFail").text("服务器无响应")
                .fadeIn(200);
        }
    	})
	})
})