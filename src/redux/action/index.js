import { ajaxApi } from "../../utils/index";
import * as servers from '../../servers/Monitor'

//基础表单
export const changeTextAction = {  
    type:'CHANGE_TEXT'  
}  
export const buttonClickAction = {  
    type:'BUTTON_CLICK'  
} 
//分步表单
export const nextFormPage = {
    type:'/step-form/confirm'
}

//请求接口
export const saveReducer = (data,firstIndex,secondIndex) => ({
    type:'SAVE_REDUCER',
    data:{
        data,firstIndex,secondIndex
    },
})
// export const getTest = () => async(dispatch,getState) => {
//     console.log(dispatch,getState,'999999');
//     try{
//         let response = await servers({})
        
//         await dispatch(saveReducer(response.data))
//     }catch(error){
//         console.log(error);
// 
//     }
// }
export const getTest = (dispatch,firstIndex,secondIndex,page) => {
    servers.getFoodListFun({}).then((res) => {
        dispatch(saveReducer(res.data,firstIndex,secondIndex))
    })
}