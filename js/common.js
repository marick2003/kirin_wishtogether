  window.fbAsyncInit = function() {
    FB.init({
      appId            : '1830556680498946',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v3.2'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
var GA_TRACKING_ID='UA-15575589-8';
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


    //網站分享連回
    if(getUrlParam("fbclid") && getUrlParam("post")==null){
         
         sendEvent("全站分享","點選_全站分享","全站");
        //  gtag('config', 'UA-15575589-8', {
        //     campaign: {
        //         medium: 'sitesharing',
        //         source: 'Facebook'
        //     }
        // });
         gtag('set', {campaign: {medium: 'sitesharing', source: 'Facebook'}});

    }

    //個人分享連回
    if(getUrlParam("post")=="fb"){

        sendEvent("互動_回訪分享","點選_互動_回訪分享","互動");

    }

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


function sendEvent(category, action, label) {
    if (typeof(gtag) != 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label,
            'value': 0
        });
        log('event: ' + category + ', ' + action + ', ' + label);
    }
}

function sendPage(title) {
    if (typeof(gtag) != 'undefined') {
        gtag('config', GA_TRACKING_ID, {
            'page_title' : title
            // 'page_path': '/home'
        });
        log('pageview: ' + title);
    }
}

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);  
    if (r != null)
        return unescape(r[2]);
    return null; 
}
function log($obj){
    if(window.console){
        window.console.log($obj);
    }
}

function iOS() {

  var iDevices = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ];

  if (!!navigator.platform) {
    while (iDevices.length) {
      if (navigator.platform === iDevices.pop()){ return true; }
    }
  }

  return false;
}