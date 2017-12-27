<?php
    header('content-type:application/json;charset=utf-8');
    header('access-control-allow-origin:*');
    $username = $_GET['username'];
    $password = $_GET['password'];

    //连接数据库
    $conn = mysqli_connect('127.0.0.1','root','root','kaifanla',3306);
    if(!$conn){
        die('连库失败！！');
    }
    mysqli_query($conn,'SET NAMES UTF8');
    //校验用户信息是否正确
    $check_query = mysqli_query($conn,"select name,pw from user where name='{$username}' and pw='{$password}'");
    // print_r($check_query);
    if($row = mysqli_fetch_array($check_query)){
        $res = array(
            'code'=>'0',
            'message'=>'信息匹配成功！！',
        );
        echo json_encode($res);
    }else{
        $res = array(
            'code'=>'-1',
            'message'=>'信息不准确，请重新输入。',
        );
        echo json_encode($res);
    }
?>