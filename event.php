<!DOCTYPE html>
<html>
<head>
	<?php include 'include/header.php';?>
	<link href="css/event.css?v=<?php echo(ceil(time() / 600)) ?>" rel="stylesheet" type="text/css" />
	<script type="text/javascript" src="js/event.js?v=<?php echo(ceil(time() / 600)) ?>" ></script>
</head>
<body >
<!-- shell-->
<?php include 'include/shell.php';?>
	<div id="wrapper"> 
		<div class="CanvasImg"></div>
		<?php include 'include/loading.php';?>
		<div class="content">
			<!-- snow -->
			<div id="snowContainer" class="airhotballoons_bg"></div>

			

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
					 	<img class="active" src="images/event_wish01.png">
					 	<img src="images/event_wish02.png">
					 	<img src="images/event_wish03.png">
					 	<img src="images/event_wish04.png">
					 	<img src="images/event_wish05.png">
					 </div>
					 <div class="inputwish">
					 	
					     <div class="text">
					     	<p>暱稱：</p>
					     	<input class="ipt-text nickname" type="text" name="" maxlength="10" placeholder="暱稱10字內...">
					     </div>
					     <div class="text">
					     	<p>你的願望：</p>
					     	<textarea class="ipt-text wishtxt" type="text" name="" maxlength="50" placeholder="願望50字內..."></textarea>
					     </div>
						<div class="btn">
							<img src="images/index_btn.png">
							<img class="arrowicon animated infinite slideInLeft" src="images/arrow.png">
						</div>
					 </div>
					 
				</div>

				<div id="animate">
				    
					<div class="user_ahb">
						<div class="ahb_wish">
							
								<img src="images/ahb01.png">
							    <img src="images/ahb02.png">
							    <img src="images/ahb03.png">
							    <img src="images/ahb04.png">
							    <img src="images/ahb05.png">

					     </div>
					     <div class="wish_b01">
					     	<!-- <img src="images/event_b01.png"> -->
					     	<p></p>
					     </div>
					     <div class="wish_b02">
					     	<!-- <img src="images/event_b02.png"> -->
					     	<p></p>
					     </div>
					</div>
					<canvas id="celebration"></canvas>
					
		
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
						<input id="tel" class="tel form_style" type="tel" placeholder="" maxlength="10">
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
					<a href="https://goo.gl/maps/RxigTTqhKCK2" target="_blank">
						<div class="site_btn">
							<img src="images/done_btn3.png">
						</div>
					</a>
					<div class="done_txt1">
						<img src="images/done_txt1.png">
					</div>
					<a href="https://line.me/R/ti/p/%40pdz2869x" target="_blank">
						<div class="line_btn">
							<img src="images/done_btn4.png">
						</div>
					</a>
					<div class="qrcode">
						<img src="images/done_qrcode.jpg">
					</div>
					
				</div>
			</div>
			

			
		</div>

		
	</div>
	<!-- footer-->
	<?php include 'include/footer.php';?>

</body>
<script type="text/javascript">
	
</script>
</html>