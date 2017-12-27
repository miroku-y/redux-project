import React from 'react';

const initialState = {
    text:'Hello',
    active:false,
    secondIndex:'basic-table',
    firstIndex:'table',
    stepFormPage:'',
    monitorPages:{
        foodList:[],
        page: '1',
        pageSize: '2',
        total: '',
    }
}
export const reducer = (state = initialState,action) => {
    console.log(action,'111')
    
    //修改翻页信息（total）
    // if(action.type.hasOwnProperty('total')){
    //     debugger;
    //     let { total, firstIndex, secondIndex} = action.type;
    //     return {
    //         ...state,
    //         monitorPages:{
    //             total,
    //             firstIndex, 
    //             secondIndex,
    //             page:action.type.page,
    //             pageSize:action.type.pageSize,
    //         }
    //     }
    // }
    //F5刷新时用
    if(action.type.hasOwnProperty('lineHeight')){
        return {
            ...state,
            secondIndex:action.type.type,
            firstIndex:action.type.lineHeight
        }
    }
    switch (action.type){
        case 'CHANGE_TEXT':
            return {
                ...state,
                text:state.text=='Hello'?'world':'Hello',
            }
        case 'BUTTON_CLICK':
            return {
                ...state,
                text:'Hello Hello Hello world',
            }
        //一级菜单
        case 'form':
            return {
                ...state,
                firstIndex:action.type
            };
        case 'dashboard':
            return {
                ...state,
                firstIndex:action.type
            }
        case 'table':
            return {
                ...state,
                firstIndex:action.type
            }
        case 'user':
            return {
                ...state,
                firstIndex:action.type
            }
        //二级菜单
        case 'basic-form':
            return {
                ...state,
                secondIndex:action.type
            }
        case 'basic-table':
            return {
                ...state,
                secondIndex:action.type
            }
        case 'analysis':
            return {
                ...state,
                secondIndex:action.type
            }
        case 'monitor':
            return {
                ...state,
                secondIndex:action.type,
            }
        case 'step-form':
            return {
                ...state,
                secondIndex:action.type
            }
        case 'login':
            return {
                ...state,
                secondIndex:action.type
            }
        case 'register':
            return {
                ...state,
                secondIndex:action.type
            }
        //分步表单
        case '/step-form/confirm':
            return {
                ...state,
                stepFormPage:action.type
            }
        //渲染监控页面
        case 'SAVE_REDUCER':
            // debugger;
            let {
                firstIndex,
                secondIndex,
            } = action.data;
            let { list, page,total,pageSize}= action.data.data;
            console.log(action);
            return {
                ...state,
                firstIndex: firstIndex,
                secondIndex:secondIndex,
                monitorPages:{
                    page: page,
                    foodList: list,
                    total: total,
                    pageSize: pageSize,
                }
            }
        default:
            return initialState;
    }
}
