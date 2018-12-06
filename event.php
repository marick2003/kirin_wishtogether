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
	<script type="text/javascript" src="js/common.js" ></script>
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
					     	<input type="text" name="">
					     </div>
					     <div class="text">
					     	<p>你的願望：</p>
					     	<input type="text" name="">
					     </div>
						<div class="btn">
							<img src="images/index_btn.png">
							<img class="arrowicon animated infinite slideInLeft" src="images/arrow.png">
						</div>
					 </div>
					 
				</div>

				<div id="animate">
					


				</div>

				<div id="form">
					

					
				</div>
				<div id="done">
					

					
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