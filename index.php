<!DOCTYPE html>
<html>
<head>
	<title>wishtogether</title>
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
	<link href="css/reset.css" rel="stylesheet" type="text/css" />
	<link href="css/common.css" rel="stylesheet" type="text/css" />
	<!-- The snow.css file animates the snow -->
	<link rel="stylesheet" href="css/snow.css" type="text/css" media="screen" charset="utf-8">
	<link href="css/swiper.css" rel="stylesheet" type="text/css" />
	<link href="css/animate.css" rel="stylesheet" type="text/css" />
	<link href="css/main.css" rel="stylesheet" type="text/css" />
	<script type="text/javascript" src="js/libs/jquery-1.11.2.min.js" ></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>

	<!-- The snow.js file creates the snow -->
	<script src="js/snow.js" type="text/javascript" charset="utf-8"></script>
	<script type="text/javascript" src="js/libs/swiper.min.js" ></script>
	<script type="text/javascript" src="js/libs/loading.js" ></script>
	<script type="text/javascript" src="js/common.js" ></script>
	<script type="text/javascript" src="js/main.js" ></script>
</head>
<body >

<!-- shell-->
<?php include 'include/shell.php';?>
	<div id="wrapper"> 
		<div class="CanvasImg"></div>
		<?php include 'include/loading.php';?>
		<div class="content">
			<!-- snow -->
			<div id="snowContainer" class="airhotballoons_bg">
				<div class="ahb style01"></div>
				<div class="ahb style02"></div>
				<div class="ahb style03"></div>
				<div class="ahb style04"></div>
				<div class="ahb style05"></div>
				<div class="ahb style03"></div>
				<div class="ahb style01"></div>
				<div class="ahb style02"></div>
				<div class="ahb style04"></div>
				<div class="ahb style02"></div>
				<div class="ahb style05"></div>
			</div>

			<div id='is18'>
				<div class='center'>
					<img class="is18-img01" src="images/is18_title.png">
					<div class="is18btn active">
						<div class="italic">
								YES 已滿18歲
						</div>
						
					</div>
					<a href='https://www.facebook.com/kirinbar/'>
					<div class="is18btn">
						<div class="italic">
								NO 還沒18歲
						</div>
					</div>	
					</a>	
					<img class='is18-img02' src='images/is18-img02.png'>
				</div>
			</div>

			<div class="inner">
				<div id="index">
					<div class="title">
						<div class="title01 step1">
							<img src="images/index_title01.png">
						</div>
						<div class="title02 step1">
							<img src="images/index_title02.png">
						</div>
						<div class="title03 step1">
							<img src="images/index_title03.png">
						</div>
						<div class="title04 step1">
							<img src="images/index_title04.png">
						</div>
						<div class="text01 step2">
							<img src="images/index_txt01.png">
						</div>
						<div class="text02 step2">
							<img src="images/index_txt02.png">
						</div>
					</div>
					
					<div class="btn step3">
						<img src="images/index_btn.png">
						<img class="arrowicon animated infinite slideInLeft" src="images/arrow.png">
					</div>
				</div>
				
			</div>
			

			
		</div>

		
	</div>
	<!-- footer-->
	<?php include 'include/footer.php';?>

</body>
</html>