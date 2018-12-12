var ahb_array=[
{top:'62%',left:'33%'},
{top:'54%',left:'53%'},
{top:'-15%',left:'29%'},
{top:'38%',left:'25%'},
{top:'49%',left:'1%'},
{top:'0%',left:'61%'},
{top:'9%',left:'18%'},
{top:'52%',left:'80%'},
{top:'5%',left:'0%'},
{top:'36%',left:'64%'},
{top:'17%',left:'90%'}]

var nowpage="index";
var swiper;
var form_final;
var blurElement = {a:0};//start the blur at 0 pixels
var windowWidth, windowHeight;
var nickname,wishtxt,wishnum=1;

function getWindowInfo(){

    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
}
window.onresize = function (event){
    getWindowInfo();
};

onresize();

 var canvas ;
 var celebrationCanvas;

//here you pass the filter to the DOM element
function applyBlur()
{
    TweenMax.set($(".swiper-container"), {webkitFilter:"blur(" + blurElement.a + "px)",filter:"blur(" + blurElement.a + "px)"});  
};
$(document).ready(function() {

    document.title = '輸入願望｜KIRIN Bar BEER 全員發願升空Bar';
    sendPage()
    new TwCitySelector({
			el: ".my-selector-c",
			elCounty: ".county", // 在 el 裡查找 dom
			elDistrict: ".district" // 在 el 裡查找 dom
		
		});
  canvas=document.getElementById('celebration');
  celebrationCanvas= new CelebrationCanvas(document.getElementById('celebration'), 375, windowHeight);
  $(window).resize(function() {
    resize();
    
  }).resize();
  
  //填完wish後
  $(".inputwish .btn").click(function(e) {
        
      if($(".nickname").val()!="" && $(".wishtxt").val()!="")
      {
        sendEvent("互動_即刻發願","點選_互動_即刻發願","互動");
        nickname=$(".nickname").val();
        wishtxt=$(".wishtxt").val();
        exit_event(function(){


        })

      }else{

        alert("請輸入暱稱與願望");
      }

    	

  });

  $(".check_btn").click(function(){

      $( this ).toggleClass( "check" );
                         
   });
  $(".fb_btn").click(function(){
                

            sendEvent('互動_臉書分享', '點選_互動_臉書分享', '互動');
            FB.ui({
            method: 'feed',
            link: 'https://www.kirin.com.tw/barbeer/event/wishtogether/2018/demo/share.php' + '?p='+nickname,
            // picture: 'http://www.newbalance.com.tw/event/2017/mybetaword/uploads/'+save_pic_url
            name:"【全員發願升空Bar】熱血發射你的 2019 新心願",
             description: "跟著"+nickname+"發新願，抽日本九州機票 & 威秀限量電影票"
          }, function(response) {

            //console.log(response);
               if (response && !response.error_message) {
                      
                        
                    }

          });



    });

  $(".site_btn").click(function(){


  });

  $(".line_btn").click(function(){


        sendEvent('互動_加入line', '點選_完成_加入line', '完成');

  });

  $("#form .btn").click(function(){

          if(check_form() && form_final){
                form_final=false;
               sendEvent('互動_填寫個資', '點選_互動_填寫個資', '互動');
                var _str="name="+$(".startform .name").val()+"&phone="+$(".startform .tel").val()+"&email="+$('.startform .email').val()+"&address="+$(".startform .county").val()+" "+$(".startform .district").val()+" "+$('.startform .address').val()+"&type="+wishnum+"&nickname="+nickname+"&wish="+wishtxt;
                $.ajax({
                            type: "POST",
                            url: "../api/sendForm.php",
                            data:_str,
                            dataType: "text",
      
                            error: function(xhr) {
      
                              console.log(xhr);
                       
                          },
                            success: function(response) {
                                form_final=true;
                             console.log(response);
                             if(response.slice(4)=='yes'){
                                 
                               exit_form(function(){

                                  start_done();

                                 });

                             }  
                             
                        }
                       
                  }); 
         
                
           }

    });
$(".again_btn").click(function(e) {

      exit_done(function(){
          intro();
      });
   });

  });

function resize(){


}
function init(){

    intro();

}
////首頁進場
function intro(){

	$("#wrapper .content .inner,#snowContainer,#event").fadeIn(function(){
		form_final=true;
		snow_init();
		start_event();
	});


}

////互動頁進場
function start_event(){
 
	$(".ahb_wish").removeClass("active");
	TweenMax.set($(".swiper-container"), {top:0, opacity:1, opacity:1});
	$(".swiper-button-next,.swiper-button-prev,.wishtitle,.inputwish").fadeIn();
	$("#snowContainer").fadeIn();
	$(".swiper-button-next,.swiper-button-prev").fadeIn();

	$("#event").fadeIn(function(){

			swiper = new Swiper('.swiper-container', {

		      pagination: {
		        el: '.swiper-pagination'
		      },
		      navigation: {
		        nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
		      },
		    });

        $(".wishtitle img").removeClass("active");
        $(".wishtitle img").eq(0).addClass("active");
        wishnum=swiper.realIndex;
        swiper.on('slideChange', function () {

            console.log(swiper.realIndex);
         wishnum=swiper.realIndex;
        $(".wishtitle img").removeClass("active");
        $(".wishtitle img").eq(swiper.realIndex).addClass("active");

        });


	});


}

function exit_event(callback){

	  $(".swiper-button-next,.swiper-button-prev,.wishtitle,.inputwish").fadeOut();
    $(".ahb_wish").addClass("active");
	  //TweenMax.to($(".swiper-container"), 1 ,{delay:0.5, top:'0px', opacity:1, ease : Expo.easeOut});


	// $("#event").fadeOut(function(){

	// 	 callback();

	// });
	//TweenMax.to(blurElement, 2, {a:20, onUpdate:applyBlur});

	setTimeout(function(){ 

	   $("#event").fadeOut(function(){
		    callback();
	   });

	},500);
	
	setTimeout(function(){ 
	 start_animate();
	},500);
    

}
///

function start_animate(){

  $('.wish_b01 p ,.wish_b02 p').empty();
  $('.wish_b01 p').append(nickname);
  $(".wish_b02 p").append(wishtxt);
  $(".user_ahb .ahb_wish img").removeClass("active");
  $(".user_ahb .ahb_wish img").eq(wishnum).addClass("active");


	TweenMax.set($(".user_ahb"), {top: '0px', opacity:1, opacity:1});
	
	$("#animate").fadeIn(100,function(){
		TweenMax.to($(".user_ahb"), 2 ,{ opacity:1, ease : Expo.easeOut});
	});
	var t=0;
	TweenMax.set($('.wish_b01'), {opacity:0,rotationX:120, transformOrigin:"center top"});
	TweenMax.set($('.wish_b02'), {opacity:0,rotationX:120, transformOrigin:"center top"});

	TweenMax.to($('.wish_b01'),2 ,{delay:0.5,rotationX:0, transformOrigin:"center top", opacity:1, ease: Elastic.easeOut});
	TweenMax.to($('.wish_b02'),2 ,{delay:1,rotationX:0, transformOrigin:"center top", opacity:1, ease: Elastic.easeOut});


	setTimeout(function(){

		celebrationCanvas.animate();

	},2000);

  setTimeout(function(){

    addseed();

  },3000);
    

	setTimeout(function(){
		
		TweenMax.to($(".user_ahb"), 4 ,{delay:2, top:'-707px', opacity:1, ease : Expo.easeOut});
	
	},3500);

    setTimeout(function(){ 

    	$("#snowContainer").fadeOut(function(){

    			clearsnow();
    			exit_animate();

    	})
    	

    },7000);


}
function exit_animate(){

	$("#animate").fadeOut(100,function(){

		start_form();
	});

}


function start_form(){

  document.title = '填寫資料｜KIRIN Bar BEER 全員發願升空Bar';
  sendPage("/personal");
	$("#form").fadeIn(function(){

		    
	});

}
function exit_form(callback){

	$("#form").fadeOut(function(){

			callback();
		
	});
}

function start_done(){

  document.title = '完成｜KIRIN Bar BEER 全員發願升空Bar';
  sendPage("/finish");
	$("#done").fadeIn(function(){

		
	});

}

function exit_done(callback){

	$("#done").fadeOut(function(){
		callback();
	});
}
/* 
 *
 * Modified and customized version of Szenia Zadvornykh’s work, “Party
 * Preloader,” on Codepen: https://codepen.io/zadvorsky/pen/CoDes
 * 
 */
var Point = function(x, y) {
  this.x = x || 0;
  this.y = y || 0;
};

var Particle = function(ctx, p0, p1, p2, p3) {
  this.ctx = ctx;
  this.p0 = p0;
  this.p1 = p1;
  this.p2 = p2;
  this.p3 = p3;

  this.time = 0;
  this.duration = 3 + Math.random() * 1;
  this.color =  '#' + Math.floor((Math.random() * 0xffffff)).toString(16);

  this.w = 8;
  this.h = 6;

  this.complete = false;
};

Particle.prototype = {
  update: function() {
    // (1/60) is timeStep
    this.time = Math.min(this.duration, this.time + (1/60));

    var f = Ease.outCubic(this.time, .0125, 1, this.duration);
    var p = cubeBezier(this.p0, this.p1, this.p2, this.p3, f);

    var dx = p.x - this.x;
    var dy = p.y - this.y;

    this.r =  Math.atan2(dy, dx) + (Math.PI * 0.5);
    this.sy = Math.sin(Math.PI * f * 10);
    this.x = p.x;
    this.y = p.y;

    this.complete = this.time === this.duration;
  },
  draw: function() {
    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.rotate((Math.random()*180)*Math.PI/180);
    this.ctx.scale(1, this.sy);

    this.ctx.fillStyle = this.color;
    // this.ctx.fillRect(-this.w * 0.5, -this.h * 0.5, this.w, this.h);
    
    
    this.ctx.beginPath();
    this.ctx.moveTo(-this.w*0.5 , -this.w*0.5 ); 
    this.ctx.lineTo(-this.w*0.5, this.h*0.5 );
    this.ctx.lineTo(this.h*0.5, this.h*0.5 );
    this.ctx.fill();
    
  
    this.ctx.restore();

  }
};

function CelebrationCanvas(canvas, width, height) {
  var particles = [];
  var ctx = canvas.getContext('2d');

  canvas.width = width;
  canvas.height = height;
  createParticles();

  function animate() {
    requestAnimationFrame(loop);
  }

  function createParticles() {
    for (var i = 0; i < 128; i++) {
      var p0 = new Point(width * 0.5, height * 0.2);
      var p1 = new Point(Math.random() * width, Math.random() * height);
      var p2 = new Point(Math.random() * width, Math.random() * height);
      var p3 = new Point(Math.random() * width, height + 150);

      particles.push(new Particle(ctx, p0, p1, p2, p3));
    }
  }

  function update() {
    particles.forEach(function(p) {
      p.update();
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(function(p) {
      p.draw();

    });
  }

  function loop() {
    update();
    draw();

    if (checkParticlesComplete()) {
      // reset
       particles.length = 0;
       createParticles();
      // setTimeout(function(){
      //   animate();
      // }, (Math.random()*2000));
    } else {
      animate();
    }
  }

  function checkParticlesComplete() {
    for (var i = 0; i < particles.length; i++) {
      if (particles[i].complete === false) return false;
    }
    return true;
  }

  return {
    animate: animate
  };
}

/**
 * easing equations from http://gizma.com/easing/
 * t = current time
 * b = start value
 * c = delta value
 * d = duration
 */
var Ease = {
	inCubic: function (t, b, c, d) {
		t /= d;
		return c*t*t*t + b;
	},
	outCubic: function(t, b, c, d) {
		t /= d;
		t--;
		return c*(t*t*t + 1) + b;
	},
	inOutCubic: function(t, b, c, d) {
		t /= d/2;
		if (t < 1) return c/2*t*t*t + b;
		t -= 2;
		return c/2*(t*t*t + 2) + b;
	},
	inBack: function (t, b, c, d, s) {
		s = s || 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	}
};

function cubeBezier(p0, c0, c1, p1, t) {
	var p = new Point();
	var nt = (1 - t);

	p.x = nt * nt * nt * p0.x + 3 * nt * nt * t * c0.x + 3 * nt * t * t * c1.x + t * t * t * p1.x;
	p.y = nt * nt * nt * p0.y + 3 * nt * nt * t * c0.y + 3 * nt * t * t * c1.y + t * t * t * p1.y;

	return p;
}




   function check_form(){

            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            var reg2 =/[a-zA-Z0-9]/g;
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var error=[];
    
            if($(".startform .name").val()=="")
            {
                alert('請填寫姓名');
                return false;
            }else if($('.startform .tel').val().length!=10)
            {
                 alert('請填寫正確手機格式');
                return false;
            }else if(!/^\d+$/.test($('.startform .tel').val()) ){
    
                alert('請填寫正確手機格式');
                return false;
              
            }else if(!re.test($('.startform .email').val())){
    
                alert('請填寫正確Email');
                return false;
              
            }else if($(".startform .county").prop('selectedIndex')<=0){
    
                alert("請選擇城市");
                return false;
    
            }else if($(".startform .district").prop('selectedIndex')<=0){
    
                alert("請選擇區域");
                
                return false;
            }else if($('.startform .address').val()=="")
            {
    
                 alert("請填寫地址");
                 return false;
            }else if(!$(".startform .check_btn").hasClass("check")){

                alert("請勾選同意活動辦法");
                return false;
            }
    
            return true;
        }