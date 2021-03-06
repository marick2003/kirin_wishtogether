/*
Copyright (C) 2012 Web3Canvas. All Rights Reserved.
*/


/* Define the number of snow to be used in the animation */
const NUMBER_OF_snow = 20;
var seed_array=[];
var seed_array2=[];
/* 
    Called when the "Falling snow" page is completely loaded.
*/
function snow_init()
{
    seed_array=[];
    /* Get a reference to the element that will contain the snow */
    var container = document.getElementById('snowContainer');
    /* Fill the empty container with new snow */
    for (var i = 0; i < NUMBER_OF_snow; i++) 
    {
        container.appendChild(createAsnow());
    }
}


/*
    Receives the lowest and highest values of a range and
    returns a random integer that falls within that range.
*/
function randomInteger(low, high)
{
    return low + Math.floor(Math.random() * (high - low));
}


/*
   Receives the lowest and highest values of a range and
   returns a random float that falls within that range.
*/
function randomFloat(low, high)
{
    return low + Math.random() * (high - low);
}


/*
    Receives a number and returns its CSS pixel value.
*/
function pixelValue(value)
{
    return value + '%';
}


/*
    Returns a duration value for the falling animation.
*/

function durationValue(value)
{       

   seed_array.push(value);

    return value + 's';
}


/*
    Uses an img element to create each snow. "snow.css" implements two spin 
    animations for the snow: clockwiseSpin and counterclockwiseSpinAndFlip. This
    function determines which of these spin animations should be applied to each snow.
    
*/
function createAsnow()
{
    /* Start by creating a wrapper div, and an empty img element */
    var snowDiv = document.createElement('div');
    var image = document.createElement('img');
    
    /* Randomly choose a snow image and assign it to the newly created element */
    var type=randomInteger(1,5);
    image.src = 'images/snow' + type + '.png';
    
    snowDiv.style.top = "-100px";

    /* Position the snow at a random location along the screen */
    snowDiv.style.left = pixelValue(randomInteger(0, 100));
    
    /* Randomly choose a spin animation */
    var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip';
    
    /* Set the -webkit-animation-name property with these values */
    snowDiv.style.webkitAnimationName = 'fade, drop';
    snowDiv.style.animationName = 'fade, drop';
    image.style.webkitAnimationName = spinAnimationName;
    image.style.animationName= spinAnimationName;
    /* Figure out a random duration for the fade and drop animations */
    var fadeAndDropDuration = durationValue(randomFloat(5, 11));
    
    /* Figure out another random duration for the spin animation */
    var spinDuration = durationValue(randomFloat(4, 8));
    /* Set the -webkit-animation-duration property with these values */
    snowDiv.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;
    snowDiv.style.animationDuration= fadeAndDropDuration + ', ' + fadeAndDropDuration;
    snowDiv.seed=fadeAndDropDuration;
    // var str = fadeAndDropDuration;
    // var lastIndex = str.lastIndexOf(" ");

    //  str = str.substring(0, lastIndex);
   

    var snowDelay = durationValue(randomFloat(0, 5));
    snowDiv.style.webkitAnimationDelay = snowDelay + ', ' + snowDelay;
    snowDiv.style.animationDelay= snowDelay + ', ' + snowDelay;
    image.style.webkitAnimationDuration = spinDuration;
    image.style.animationDuration = spinDuration;
    if(type=='5'){

        snowDiv.className="cloud";
    }
    snowDiv.className="snowclass";
    // add the <img> to the <div>
    snowDiv.appendChild(image);

    /* Return this img element so it can be added to the document */
    return snowDiv;
}

/* Calls the init function when the "Falling snow" page is full loaded */
 //window.addEventListener('load', init, false);

function clearsnow(){
        //$(".snowclass").removeClass("iosaddseed");
         $("#snowContainer").removeClass("iosaddseed");
        $("#snowContainer").empty();
    
}

function addseed(){

//console.log(seed_array);
//$(".snowclass")
 //声明定时器运行次数


   if(iOS()){
   

        // $(".snowclass").css({'animation-name':'none'});
        // $(".snowclass").css({'animation-duration':'none'});
        // $(".snowclass").css({'animation-delay':'none'});
       $(".cloud").fadeOut();
       $("#snowContainer").addClass("iosaddseed");

        var index2=-1;
        //声明步长值step
        var step2;
        //声明当前值cur
        var cur2;
        //声明目标值
        var target2 = 0.4;
            
       //var t= $(this);
       var q2=$("#snowContainer");
       var t2;
      // clearInterval(t.timer);
       t2=setInterval(function(){
        //更新定时器的工作次数
        index2++;
        //更新步长值
        step2 = 0.04*(2*index+1);
        //更新当前值
        
        cur2 = 8;
        //console.log(seed_array[index]);
        //若步长设置值使得元素超过目标点时，将步长设置值更改为目标点值 - 当前值
        //test.style.left = cur + step + 'px';
        //console.log(cur-step);
        //{'width': (percent + '%')}
        q2.css({'-webkit-animation-duration': cur2-step2+'s'});
        q2.css({'animation-duration': cur2-step2+'s'});
        

        if(cur2-step2<=target2){
            clearInterval(t2);
        }
         
    },40);



            
     }else{

    $(".snowclass").each(function( index ) {

        var index=-1;
        //声明步长值step
        var step;
        //声明当前值cur
        var cur;
        //声明目标值
        var target = 0.4;
            
       //var t= $(this);
       var q=$(this);
       var t;
      // clearInterval(t.timer);
       t=setInterval(function(){
        //更新定时器的工作次数
        index++;
        //更新步长值
        step = 0.04*(2*index+1);
        //更新当前值
        
        cur = 10;
        //console.log(seed_array[index]);
        //若步长设置值使得元素超过目标点时，将步长设置值更改为目标点值 - 当前值
        //test.style.left = cur + step + 'px';
        //console.log(cur-step);
        //{'width': (percent + '%')}
        q.css({'-webkit-animation-duration': cur-step+'s'});
        q.css({'animation-duration': cur-step+'s'});
        

        if(cur-step<=target){
            clearInterval(t);
        }
        //更新left值
        
        //当元素到达目标点时，停止定时器
         
    },30);


    });


    }

} 
