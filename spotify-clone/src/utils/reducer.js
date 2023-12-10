import { reducersType } from "./constants";

export const initialState ={
    token:null,
}

const Tokenreducer = (state, action)=>{
    switch(action.type){
        case reducersType.SET_TOKEN:{
            console.log("state",state.token)
            return{
                ...state,
                token:action.token,
            }
        }
        default : return state
    }
}



export default Tokenreducer;