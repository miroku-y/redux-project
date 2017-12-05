import React from 'react';

const initialState = {
    text:'Hello',
    active:false,
    secondIndex:'basic-table',
    firstIndex:'table',
    stepFormPage:'',
    foodList:[],
}
export const reducer = (state = initialState,action) => {
    console.log(action,'111')
    
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
            return {
                ...state,
                firstIndex:action.data.firstIndex,
                secondIndex:action.data.secondIndex,
                foodList:action.data.data.list,
            }
        default:
            return initialState;
    }
}
