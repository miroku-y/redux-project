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
    }else if(action.type.hasOwnProperty('data')){
        //更新数据
        console.log('准备请求数据');
        return {
            ...state,
            foodList:action.type.data,
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
        //分步表单
        case '/step-form/confirm':
            return {
                ...state,
                stepFormPage:action.type
            }
        
        default:
            return initialState;
    }
}
