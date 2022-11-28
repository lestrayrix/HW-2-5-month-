
import { types } from "./types"

const initial = {
    number:'',
    number2:'',
    result:''
}

export const reducer =(state=initial,action)=>{

    switch(action.type){
        case types.ONCHANGE1:
            return{...state,number: action.payload}
        case types.ONCHANGE2:
            return {...state, number2: action.payload}
        case types.PLUS:
            return {...state, result: state.number!=='' && state.number2 !==''? state.number+state.number2 : alert('Empty space,please enter number'),number:'',number2:''}
        case types.MINUS:
            return {...state, result: state.number!=='' && state.number2 !=='' ? state.number-state.number2 : alert('Empty space,please enter number'),number:'',number2:''}
        case types.DEVIDE:
            return {...state, result: state.number!=='' && state.number2 !==''? state.number/state.number2 : alert('Empty space,please enter number'),number:'',number2:''}
        case types.MULTIPLY:
            return {...state, result: state.number!=='' && state.number2!=='' ? state.number*state.number2 : alert('Empty space,please enter number'),number:'',number2:''}
        default: return state
    }
}