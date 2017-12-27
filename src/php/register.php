<?php
	header('content-type:applicatiion/json;charset=utf-8');
	header('access-control-allow-origin:*');
	// echo 11; 
	// print_r($_POST);
	$username = $_POST['username'];
	$password = $_POST['password'];

	//连接数据库
	$conn = mysqli_connect('127.0.0.1','root','root','kaifanla',3306);
	if(!$conn){
		die('连库失败！！');
	}
	mysqli_query($conn,'SET NAMES UTF8');
	//检测用户名是否存在
	$check_query = mysqli_query($conn,"select name from user where name='{$username}'");
	// print_r($check_query);
	if($row = mysqli_fetch_array($check_query)){
		$res = array(
			'code'=>'-1',
			'message'=>"错误:该用户名,$username,已存在.",
		);
		echo json_encode($res);
		exit;
	}else{
		$sql = "INSERT INTO user(name,pw)VALUES('{$username}','{$password}')";
		mysqli_query($conn,$sql);
		$res = array(
			'code'=>'0',
			'message'=>'信息注册成功！！'
		);
		echo json_encode($res);
	}
	//写库
	// $password = MD5($password);
	// $regdate = time();
	// $sql = "INSERT INTO user(name,pw)VALUES('{$username}','{$password}')";
	// mysqli_query($conn,$sql);
?>	