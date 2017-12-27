<?php
    // header("Content-type:Application/json");
    header('content-type: applicatiion/json; charset=utf-8');
    header("access-control-allow-origin:*");
    $pageSize=2;
    $page=1;
    @$page=$_REQUEST['page'];
    if(empty($page)){
        $data = array(
            'code'=>'-1',
            'message'=>'参数未传入',
        );
        echo json_encode($data);
        exit;
        // $page=0;
    }
    if($page == 1){
        $start = 0;
    }else{
    	$count = $page-$pageSize;
    	$start = $page + $count;
    }
    $conn=mysqli_connect('127.0.0.1','root','root','kaifanla',3306);
    mysqli_query($conn,'SET NAMES UTF8');
    $sql="SELECT did,name,detail,material,img_sm FROM kf_dish LIMIT $start,$pageSize";
    $result=mysqli_query($conn,$sql);
    $count_sql = "SELECT name FROM kf_dish";
    $total_count = mysqli_query($conn,$count_sql);//数据总集合
    $output=[];
    while(($row=mysqli_fetch_assoc($result))!=NULL){
        $output[]=$row;
    }
    $res['list'] = $output;
    $res['total'] = mysqli_num_rows($total_count);
    $res['page'] = $_REQUEST['page'];
    $res['pageSize'] = $pageSize;
    $data=array(  
      'code'=>'1',  
      'message'=>'成功',  
      'data'=> $res
    );  
    // var_dump($data);
    echo json_encode($data);
?>