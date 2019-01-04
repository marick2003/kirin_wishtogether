<?php
require_once '../config.php';

require_once libs.'Mobile_Detect.php';


$secret     = '6Ld9gIMUAAAAAJzXWKZNeUnDOBIrXOr_rUMZgfmq';
$response   = $ary_post['g-recaptcha-response'];
$url        = sprintf('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$response);
$res        = json_decode(file_get_contents($url));
if ($res -> success != true) {
    echo 'errorCode';
    exit;
}

 



if(!$ary_post['name'] || 
    !$ary_post['phone'] || 
    !$ary_post['address'] || 
    !$ary_post['email'] ){
    echo 'ret=no';
    exit;
}

$detect = new Mobile_Detect;
if ( $detect->isMobile() ) {
    $is_mobile = '2';
}else{
    $is_mobile = '1';
}


$ary_DBdata = array(
                    'uname' => $ary_post['name'],
                    'email' => $ary_post['email'],
                    'tel' => $ary_post['phone'],
                    'addr' => $ary_post['address'],
                    'type' => $ary_post['type'],
                    'nickname' => $ary_post['nickname'],
                    'wish' => $ary_post['wish'],
                    'is_mobile' => $is_mobile,
                    'ip_addr' => showUserIp()
);


if($obj_user -> create($ary_DBdata)){
    echo 'ret=yes';
}else{
    echo 'ret=no';
}

























?>