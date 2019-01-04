
const NUMBER_OF_snow = 20;
var seed_array=[];
var seed_array2=[];

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


function randomInteger(low, high)
{
    return low + Math.floor(Math.random() * (high - low));
}



function randomFloat(low, high)
{
    return low + Math.random() * (high - low);
}


function pixelValue(value)
{
    return value + '%';
}


function durationValue(value)
{       

   seed_array.push(value);

    return value + 's';
}



function createAsnow()
{
    var snowDiv = document.createElement('div');
    var image = document.createElement('img');
    
   
    var type=randomInteger(1,5);
    image.src = 'images/snow' + type + '.png';
    
    snowDiv.style.top = "-100px";

    
    snowDiv.style.left = pixelValue(randomInteger(0, 100));
    
   
    var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip';
    
   
    snowDiv.style.animationName = 'fade, drop';
    image.style.webkitAnimationName = spinAnimationName;
    image.style.animationName= spinAnimationName;
    
    var fadeAndDropDuration = durationValue(randomFloat(5, 11));
    
    
    var spinDuration = durationValue(randomFloat(4, 8));
   
    snowDiv.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;
    snowDiv.style.animationDuration= fadeAndDropDuration + ', ' + fadeAndDropDuration;
    snowDiv.seed=fadeAndDropDuration;
 
   

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

    
}



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
