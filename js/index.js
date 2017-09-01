 $(function() {

 	console.log( $('img') );
 	for(var j=0;j<$('img').length;j++){
	 	$('img')[j].onload =function() {
	        console.log('loaded');
	    }
 	}
 	var android_url = 'http://www.i618.com.cn/i618/htqf/htqf5714.apk';
 	var apple_url = 'https://itunes.apple.com/cn/app/hui-tong-qi-fu/id982205587?mt=8';

    $("#ido").fullpage({
    	continuousVertical: true,//循环播放
        // navigation: true,//导航
    	navigationPosition: 'right',
    	//自定义导航
    	anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],
        menu: '#menu',
        touchSensitivity: 15,
        afterLoad:function(name,index){
        	if( index == 1 ){
        		bub1 = setTimeout(function(){
        			$('.section1').addClass('act');
        		},10);
        	}
        	if( index == 2 ){
        		bub2 = setTimeout(function(){
        			$('.section2').addClass('act');
        			$('.ball').addClass('animated fadeInRight');
        			$('.app2_word').addClass('animated bounceInUp');
        		},10);
        	}
        	if( index == 3 ){
        		bub3 = setTimeout(function(){
        			$('.section3').addClass('act');
        			$('.deng').addClass('animated rotateIn');
        			$('.app3word').addClass('animated bounceInUp');
        		},10);
        	}
        	if( index == 4 ){
        		bub4 = setTimeout(function(){
        			$('.section4').addClass('act');
        			$('.phone').addClass('animated wobble');
        			$('.app4_word').addClass('animated bounceInUp');
        		},50);
        	}
        	if( index == 5 ){
        		bub5 = setTimeout(function(){
        			$('.section5').addClass('act');
        			var imgs = $('.goldHolder img');
        			for(var i=0;i<imgs.length;i++){
        				var yz = Math.floor( Math.random()*300 ) + 1000 + 'px';
        				var delay = Math.floor( Math.random()*300 ) + 'ms';
        				$(imgs[i]).css({
        					transform: 'translate3d(0px,'+yz+',0px)',
        					transitionDelay: delay,
        				});
        			}


        		},50);
        	}
        },
        onLeave:function(index,next,dir){
        	console.log( index,next,dir );
        	if( index == 1 ){
        		$('.section1').ready(function(){
        			clearTimeout( bub1 );
        		}).removeClass('act');
        	}
        	if( index == 2 ){
        		$('.section2').ready(function(){
        			clearTimeout( bub2 );
        			$('.ball').removeClass('animated fadeInRight');
        			$('.app2_word').removeClass('animated bounceInUp');
        		}).removeClass('act');
        	}
        	if( index == 3 ){
        		$('.section3').ready(function(){
        			clearTimeout( bub3 );
        			$('.deng').removeClass('animated rotateIn');
        			$('.app3word').removeClass('animated bounceInUp');

        		}).removeClass('act');
        	}
        	if( index == 4 ){
        		$('.section4').ready(function(){
        			clearTimeout( bub4 );
        			$('.app4_word').removeClass('animated bounceInUp');
        			$('.phone').removeClass('animated wobble');
        		}).removeClass('act');
        	}
        	if( index == 5 ){
        		$('.section5').ready(function(){
        			clearTimeout( bub5 );
        			$('.goldHolder').empty();
        			creatGold();
        		}).removeClass('act');
        	}
        }
    });




    $('.download').on('touchend',function(){
    	console.log('123');
		if (/android/i.test(navigator.userAgent)){
			console.log('android');
			if (/micromessenger/i.test(navigator.userAgent)){
				document.getElementById("wxalert").style.display="block";
			}else{
				setTimeout(function(){
					window.location.href = android_url;
				},150);
			}
		}else if (/ipad|iphone|mac/i.test(navigator.userAgent)) {
			console.log('iphone');
			if (navigator.userAgent.match(/OS [7-9]_\d[_\d]* like Mac OS X/i)){
				window.location.href = apple_url;
			}else{
				window.location.href = apple_url;
			}
		}else{
			console.log('nonono');
			$('.noapp').addClass('active');
		}
	});

	$('.ok').on('touchend',function(){
		setTimeout(function(){
			$('.noapp').removeClass('active');
		},150);
	});

	function creatGold(){
		for(var i=0;i<50;i++){
			var r = Math.ceil( Math.random()*5 );
			var left = Math.floor( Math.random()*85 ) + 5 + '%';
			var w = Math.floor( Math.random()*40 ) + 25 + 'px';

			var img = new Image();
			img.src =  'images/app5/y'+r+'.png';
			$(img).css({
				top: '-200px',
				left: left,
				width: w,
				
			});
			$(img).appendTo( $('.goldHolder') );
		}
	}
	creatGold();
});