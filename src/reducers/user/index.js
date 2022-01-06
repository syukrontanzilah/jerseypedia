import {GET_USER} from '../../actions/userAction'

const initialState = {
    dataUser: false
}

export default function (state = initialState, action){
    switch(action.type){
        case GET_USER :
            console.log("masuk reducer", action)
            return {
                ...state,
                dataUser: action.payload
            }
        default:
            return state
    }
}

