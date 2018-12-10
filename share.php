<?php

    //echo '22';

    $shareType = '';
    $shareTitle = '';
    $shareDescription = '';
    $sharePic = '';
    $shareNum = '';
    //$addString = 'https://www.facebook.com/adidasBasketballTW/photos_stream';
    //$addString = 'http://goo.gl/Gdd6Fc';





    if($_GET['pic']){
      $shareSrc=$_GET['pic'];

		}else{
      $shareSrc= '';
		}
   if($_GET['p']){
      $shareNum=$_GET['p'];

        }else{
      $shareNum= '';
        }

?>





<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8" />
	<title>14年了，無印良品與你在一起</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>         
    <meta name="description" content="4/18前，上傳照片並分享生活中最喜歡的無印良品用品的理由！完成活動步驟，即有機會抽中好禮！    
可獲得微粒貼身靠枕一只! (限定色，市價720元，共20個名額)" />
  <meta property="og:site_name" content="14年了，無印良品與你在一起" />
  <meta property="fb:app_id" 			 content="886661574828058" />
	<meta property="og:title" 			 content="14年了，無印良品與你在一起" />
	<meta property="og:description" 	 content="4/18前，上傳照片並分享生活中最喜歡的無印良品用品的理由！完成活動步驟，即有機會抽中好禮！    
可獲得微粒貼身靠枕一只! (限定色，市價720元，共20個名額)" />
    <meta property="og:type"             content="website" />


	<meta property="og:image:secure_url" content="https://muji13th.muji.tw/mujiinyourlife2018/uploads/<?php echo $shareSrc?>" />
	<meta property="og:image"            content="https://muji13th.muji.tw/mujiinyourlife2018/uploads/<?php echo $shareSrc?>" />
	<meta property="og:image:url"        content="https://muji13th.muji.tw/mujiinyourlife2018/uploads/<?php echo $shareSrc?>" />


	
    <script>
        window.location.replace("https://muji13th.muji.tw/mujiinyourlife2018/?p=<?php echo $shareNum?>");
    </script>	 
</head>
<body>    
</body>
</html>