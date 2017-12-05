import { ajaxApi } from '../utils/index'

export const getFoodListFun = (data) => ajaxApi('/data/dish_getbtpage.php',{method:'get',data:data,});
//注册
export const registerFun = (data) => ajaxApi('/data/register.php',{method:'post',data:data});
//登录
export const loginFun = (data) => ajaxApi('/data/login.php',{method:'get',data:data});