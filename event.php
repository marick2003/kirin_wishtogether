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
	<link href="css/event.css" rel="stylesheet" type="text/css" />
	<script type="text/javascript" src="js/libs/jquery-1.11.2.min.js" ></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>

	<!-- The snow.js file creates the snow -->
	<script src="js/snow.js" type="text/javascript" charset="utf-8"></script>
	<script type="text/javascript" src="js/libs/swiper.min.js" ></script>
	<script type="text/javascript" src="js/libs/loading.js" ></script>
	<script type="text/javascript" src="js/common.js" ></script>
	<script type="text/javascript" src="js/libs/tw-city-selector.min.js" ></script>
	
	<script type="text/javascript" src="js/event.js" ></script>
</head>
<body >
	<header>
		<div class="center">
			<div class="logo">
				<img src="images/logo.png">
			</div>
			<div class="menu-toggle">
		    	<div class="one"></div>
		    	<div class="two"></div>
		    	<div class="three"></div>
	   		</div>
		</div>	
	</header>
<div id='menu'>
	<div class='main'>
		<ul class='menu'>
			<li class='btn bounceBtn'>
				<a href='edit.php'>
					<div class='center'>
						<div class='main'>
							<div class='text'></div>
						</div>
					</div>
				</a>
			</li>
			<li class='btn bounceBtn'>
				<a href='card-review.php'>
					<div class='center'>
						<div class='main'>
							<div class='text'></div>
						</div>
					</div>
				</a>
			</li>
			<li class='btn bounceBtn'>
				<a href='edit.php?page=2017word'>
					<div class='center'>
						<div class='main'>
							<div class='text'></div>
						</div>
					</div>
				</a>
			</li>
		
			
		</ul>
		<div class='social'>
			<ul>
				<li class='btn bounceBtn'>
					<a href='https://www.instagram.com/kirin_bar_beer/' target='_blank'>
						<div class='center'>
							<div class='main'>
								<div class='text'></div>
							</div>
						</div>
					</a>
				</li>
				<li class='btn bounceBtn'>
					<a href='https://www.facebook.com/kirinbar/' target='_blank'>
						<div class='center'>
							<div class='main'>
								<div class='text'></div>
							</div>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</div>
	<div id="wrapper"> 
		<div class="CanvasImg"></div>
		<?php include 'include/loading.php';?>
		<div class="content">
			<!-- snow -->
			<div id="snowContainer" class="airhotballoons_bg">
				
			</div>

			

			<div class="inner">
				
				<!-- -->
				<div id="event">
					  <!-- Swiper -->
					  <div class="swiper-container">
					    <div class="swiper-wrapper">
					      <div class="swiper-slide">
					      	<div class="ahb_wish">
					      		<img src="images/ahb01.png">
					      	</div>
					      </div>
					      <div class="swiper-slide">
					      	<div class="ahb_wish">
					      		<img src="images/ahb02.png">
					      	</div>
					      </div>
					      <div class="swiper-slide">
					      	<div class="ahb_wish">
					      		<img src="images/ahb03.png">
					      	</div>
					      </div>
					      <div class="swiper-slide">
					      	<div class="ahb_wish">
					      		<img src="images/ahb04.png">
					      	</div>
					      </div>
					      <div class="swiper-slide">
					      	<div class="ahb_wish">
					      		<img src="images/ahb05.png">
					      	</div>
					      </div>
					    </div>
					    <!-- Add Arrows -->
					    <div class="swiper-button-next"></div>
					    <div class="swiper-button-prev"></div>
					  </div>
					 <div class="wishtitle">
					 	<img src="images/event_wish01.png">
					 </div>
					 <div class="inputwish">
					 	
					     <div class="text">
					     	<p>暱稱：</p>
					     	<input class="ipt-text" type="text" name="" maxlength="10" placeholder="暱稱10字內...">
					     </div>
					     <div class="text">
					     	<p>你的願望：</p>
					     	<textarea class="ipt-text" type="text" name="" maxlength="50" placeholder="願望50字內..."></textarea>
					     </div>
						<div class="btn">
							<img src="images/index_btn.png">
							<img class="arrowicon animated infinite slideInLeft" src="images/arrow.png">
						</div>
					 </div>
					 
				</div>

				<div id="animate">
				    <canvas id="celebration"></canvas>	
					<div class="user_ahb">
						<div class="ahb_wish">
							<div class="item">
								<img src="images/ahb01.png">
							</div>
					     </div>
					     <div class="wish_b01">
					     	<!-- <img src="images/event_b01.png"> -->
					     </div>
					     <div class="wish_b02">
					     	<!-- <img src="images/event_b02.png"> -->
					     </div>
					</div>
					
		
				</div>

				<div id="form">
					<div class="title">
						<img src="images/form_title.png">
					</div>
					<div class="award">
						<img src="images/form_award.png">
					</div>
					<div class="tip">
						<img src="images/form_tip.png">
					</div>
					<div class="form_container">
						<div class="startform">
						<input class="name form_style" type="text" placeholder="">
						<input class="tel form_style" type="tel" placeholder="" maxlength="10">
						<input class="email form_style" type="email" placeholder="">
						<div class="my-selector-c">
							<div>
								<select class="county form_style"></select>
							</div>
							<div>
								<select class="district form_style"></select>
							</div>						
						</div>
						<input class="address form_style" type="text" placeholder="">
						<div class="check_btn"></div>
						<div class="rule_btn">
							<a href="https://www.kirin.com.tw/privacy.php" target="_blank"></a>
						</div>
						
					</div>
					</div>
					<div class="btn">
						<img src="images/form_btn.png">
					</div>
				 		
					
				</div>
				<div id="done">
					<div class="title">
						<img src="images/done_title.png">
					</div>
					<div class="fb_btn">
						<img src="images/done_btn1.png">
					</div>
					<div class="again_btn">
						<img src="images/done_btn2.png">
					</div>
					<div class="date_text">
						<img src="images/done_date.png">
					</div>
					<div class="done_txt2">
						<img src="images/done_txt2.png">
					</div>
					<div class="site_btn">
						<img src="images/done_btn3.png">
					</div>
					<div class="done_txt1">
						<img src="images/done_txt1.png">
					</div>
					<div class="line_btn">
						<img src="images/done_btn4.png">
					</div>
					<div class="qrcode">
						<img src="images/done_qrcode.jpg">
					</div>
					
				</div>
			</div>
			

			
		</div>

		
	</div>
	<footer>
		<div class="center">
			<img class="footer-img01" src="images/footer-img01.png">
		</div>

	</footer>

</body>
</html>