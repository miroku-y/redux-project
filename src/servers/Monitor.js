import { ajaxApi } from '../utils/index'

export const getFoodListFun = (data) => ajaxApi('/data/dish_getbtpage.php',{method:'get',data:data,});
