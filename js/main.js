$(document).ready(function() {


  $(window).resize(function() {
    resize();
    
  }).resize();

  $(".is18btn.active").click(function(e) {
  		
  		$("#is18").fadeOut(function(){

  				intro();

  		});

  });

});

function resize(){


}
////首頁進場
function intro(){

$("#wrapper .content .inner").fadeIn();


}