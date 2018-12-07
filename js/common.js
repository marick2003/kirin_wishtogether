var windowWidth, windowHeight;

function getWindowInfo(){
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
}
     var loadingImg = [];  
      // loading
      function loading() {
        for ( var i = 0; i < $('img').size(); i++ ) {
            loadingImg.push($('img').eq(i).attr('src'));
          }

        $.preload(loadingImg, {
          loaded: function(img, loaded, total) {
            var percent = Math.floor( ( loaded / total ) * 100);
            loadingProgram(percent);
          },
          loaded_all: function(loaded, total) {

            $("#loading").fadeOut(function(){

              showis18();
              init();


              
            })
            
          }
        }); 
      }
$( document ).ready(function() {
	

  loading();
  $(".menu-toggle").on('click', function() {

    $(this).toggleClass("active");
     console.log($(this).is(":active"))
     var act = $(this).hasClass("active");

      if(act){
         show_menu();
      }else{
         close_menu();
      }

  });
  // 點選menu或popup外面
  $(document).click(function(e){
  	if ( e.target.id == 'menu' && $('body').hasClass('menu-open') ) {
  		$('.menu-toggle').click();
  	} else if ( e.target.id == 'popup' && $('#popup .box.open').length > 0 ) {
  		$('#popup .box.open').find('.btn[data-close=true]').click();
  	}
  });

  $(".is18btn.active").click(function(e) {
      
      $("#is18").fadeOut(function(){

          intro();
      });

  });

});

function show_menu(){

$('body').addClass('menu-open');

}
function close_menu(){

$('body').removeClass('menu-open');
}

// loading
function loadingProgram(percent) {
  $('#loading .main .number').html(percent + '%');
  $('#loading .main .bar .program').css({'width': (percent + '%')});
}

function showis18(){

  $("#is18").fadeIn();
}

window.onresize = function (event){
    getWindowInfo();
};

onresize();