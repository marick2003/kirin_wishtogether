var ahb_array=[
{top:'38%',left:'34%'},
{top:'28%',left:'53%'},
{top:'-15%',left:'35%'},
{top:'38%',left:'25%'},
{top:'49%',left:'1%'},
{top:'0%',left:'61%'},
{top:'9%',left:'18%'},
{top:'52%',left:'80%'},
{top:'5%',left:'0%'},
{top:'36%',left:'64%'},
{top:'17%',left:'90%'}]

var nowpage="index";
$(document).ready(function() {

   sendPage("/index");
  $(window).resize(function() {
    resize();
    
  }).resize();

  //init();


  ///進互動
  $("#index .btn").click(function(e) {
  		
  		    sendEvent("首頁_即刻發願","點選_首頁_即刻發願","首頁");
  			changepage("event",function(){

  				window.open('./wish.php','_self');
  			})

  });
  $(".logo").click(function(e) {
  		
  		

  });

});

function resize(){


}
function init(){

	
	$("#index").css({'display': 'block'});
	$("#index .title .step1").each(function( index ) {
		TweenMax.set($(this), {scale:0,opacity:1,rotationX:120, transformOrigin:"center top"});
	});
	$("#index .title .step2").each(function( index ) {
		TweenMax.set($(this), {opacity:0,rotationX:120, transformOrigin:"center top"});
	});
    $("#index .btn").each(function( index ) {
		TweenMax.set($(this), {opacity:0,rotationX:120, transformOrigin:"center top"});
	});

}
////首頁進場
function intro(){

$("#wrapper .content .inner").fadeIn(function(){

	
	snow_init();
	start_index();

});


}
function start_index(){
	init();
	$(".ahb" ).each(function( index ) {
	   TweenMax.set($(this), {left:ahb_array[index].left,scale:Math.random() * 0.6+0.2, top:"100%", opacity:1});
	});
	$("#snowContainer").fadeIn();

	var time = 3;
	var complete = function (e) {
    	
	};
	$(".ahb" ).each(function( index ) {
	   TweenMax.to($(this), time ,{delay:0.2*index, top:ahb_array[index].top, opacity:1, ease : Expo.easeOut,onComplete:complete($(this))});
	});


	setTimeout(function(){ 

	$("#index .title .step1").each(function( index ) {
		TweenMax.to($(this), 3 ,{delay:0.2*index,scale:1,rotationX:0, transformOrigin:"center top", opacity:1, ease: Elastic.easeOut});
	});

	 }, 2000);


	
	setTimeout(function() { 

	$("#index .title .step2").each(function( index ) {
		TweenMax.to($(this), 3 ,{delay:0.2*index, opacity:1,rotationX:0, transformOrigin:"center top",ease: Elastic.easeOut});
	});

     }, 2500);
	setTimeout(function() {
		$("#index .title .title04").addClass('animated infinite swing delay-5s');
	    
		TweenMax.to($("#index .btn"), 3 ,{delay:0*index, opacity:1,rotationX:0, transformOrigin:"center top", ease: Elastic.easeOut});
     }, 3000);
	//snowContainer
	$(".snowContainer div" ).each(function( index ) {
	   
	});

}
//////index 退場
function exit_index(callback){

	var time = 4;
	var complete = function (e) {
    	
	};
	$(".ahb" ).each(function( index ) {
	   TweenMax.to($(this), time ,{delay:0.01*index, top:'-80%', opacity:1, ease : Expo.easeOut,onComplete:complete($(this))});
	});

	$(".title .step1").each(function( index ) {
		TweenMax.to($(this), 0.5 ,{delay:0.02*index,scale:0.5, opacity:0, ease: Power2.easeOut });
	});
	$(".title .step2").each(function( index ) {
		TweenMax.to($(this), 1 ,{delay:0.2*index, opacity:0, ease: Power2.easeOut});
	});
	TweenMax.to($("#index .btn"), 1 ,{delay:0*index, opacity:0, ease: Power2.easeOut});

	setTimeout(function(){ 

		$("#index").fadeOut(function(){
			callback();
		})

	 }, 1000);
	
}

////互動頁進場
function start_event(){


$("#event").fadeIn(function(){



});


}

function exit_event(){




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