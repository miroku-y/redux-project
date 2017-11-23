import { ajaxApi } from '../utils/index'

export function getFoodListFun(data){
    return ajaxApi('/data/dish_getbtpage.php',{
        method:'post',
        data:data,
    });
}
