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

var blurElement = {a:0};//start the blur at 0 pixels



//here you pass the filter to the DOM element
function applyBlur()
{
    TweenMax.set($(".swiper-container"), {webkitFilter:"blur(" + blurElement.a + "px)",filter:"blur(" + blurElement.a + "px)"});  
};
$(document).ready(function() {


  $(window).resize(function() {
    resize();
    
  }).resize();
  
  //填完wish後
  $(".inputwish .btn").click(function(e) {
      
    	exit_event(function(){


    	})

  });



});

function resize(){


}
function init(){

    intro();

}
////首頁進場
function intro(){

	$("#wrapper .content .inner").fadeIn(function(){
		
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

	});

}

function exit_event(callback){

	$(".swiper-button-next,.swiper-button-prev,.wishtitle,.inputwish").fadeOut();
    $(".ahb_wish").addClass("active");
	TweenMax.to($(".swiper-container"), 2 ,{delay:0.5, top:'150px', opacity:1, ease : Expo.easeOut});


	// $("#event").fadeOut(function(){

	// 	 callback();

	// });
	//TweenMax.to(blurElement, 2, {a:20, onUpdate:applyBlur});

	setTimeout(function(){ 

	$("#event").fadeOut(function(){

		
		callback();

	});

	},1600);
	
	setTimeout(function(){ 


	start_animate();
	},1580);
    

}
///
function changepage(e,callback){

	if(e!=nowpage){

		if(nowpage=="index"){

			exit_index(function(){
				nowpage=e;
				callback();

			})
		}
		if(nowpage=="event"){

			exit_index(function(){
				nowpage=e;
				callback();

			})
		}
	}

}
function start_animate(){

	 TweenMax.set($(".user_ahb"), {top: '0px', opacity:1, opacity:1});
	
	$("#animate").fadeIn(function(){
		TweenMax.to($(".user_ahb"), 2 ,{ top:'150px', opacity:1, ease : Expo.easeOut});
	});

    // setTimeout(function(){ 

    // 	TweenMax.to($(".user_ahb"), 2 ,{ top:'-380px', opacity:1, ease : Expo.easeOut,onComplete:exit_animate()});


    // },3000);



    

}
function exit_animate(){

	$("#animate").fadeOut(function(){

		start_form();
	});

}


function start_form(){

	$("#form").fadeIn(function(){

		
	});

}
function exit_form(){


}

function start_done(){


}

function exit_done(){

	
}
