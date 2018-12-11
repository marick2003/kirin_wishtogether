<?php

    //echo '22';

    $shareType = '';
    $shareTitle = '';
    $shareDescription = '';
    $sharePic = '';
    $shareNum = '';
    $shareName = '';
    //$addString = 'https://www.facebook.com/adidasBasketballTW/photos_stream';
    //$addString = 'http://goo.gl/Gdd6Fc';





    if($_GET['pic']){
      $shareSrc=$_GET['pic'];

		}else{
      $shareSrc= '';
		}
   if($_GET['p']){
      $shareName=$_GET['p'];

        }else{
      $shareName= '';
        }

?>





<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8" />
	<title>KIRIN Bar BEER 全員發願升空Bar</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>         
    <meta name="description" content="一起發願 讓2019如你所願" />
  <meta property="og:site_name" content="14年了，無印良品與你在一起" />
	<meta property="og:title" 			 content="一起發願 讓2019如你所願" />
	<meta property="og:description" 	 content= "跟著<?php echo $shareName?>發新願，抽日本九州機票 & 威秀限量電影票" />
  <meta property="og:type"             content="website" />


	<meta property="og:image:secure_url" content="https://www.kirin.com.tw/barbeer/event/wishtogether/2018/images/meta.jpg" />
	<meta property="og:image"            content="https://www.kirin.com.tw/barbeer/event/wishtogether/2018/images/meta.jpg" />
	<meta property="og:image:url"        content="https://www.kirin.com.tw/barbeer/event/wishtogether/2018/images/meta.jpg" />


	
    <script>
        window.location.replace("https://www.kirin.com.tw/barbeer/event/wishtogether/2018/?share=fb");
    </script>	 
</head>
<body>    
</body>
</html>