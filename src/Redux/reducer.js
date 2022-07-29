import * as data from "./actionTypes"

const initialState={
    todos:[],
    isLoading:false,
    isError:false
};

const reducer =(oldState= initialState, action) =>{
    const {type, payload} = action;
    switch(type){
        case data.GET_TODOS_REQUEST :
            return{
                ...oldState,
                isLoading: true,
                isError:false,
            };
        case data.GET_TODOS_SUCCESS :
             return{
                ...oldState,
                 isLoading: false,
                 isError:false,
                 todos: [...payload]
            };

        case data.GET_TODOS_REQUEST :
             return{
                 ...oldState,
                 isLoading: false ,
                 isError:true,
             };

        default :
        return oldState;
    }
}

export {reducer};