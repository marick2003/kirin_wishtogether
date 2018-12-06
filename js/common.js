
$( document ).ready(function() {
	
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

});

function show_menu(){

$('body').addClass('menu-open');

}
function close_menu(){

$('body').removeClass('menu-open');
}
