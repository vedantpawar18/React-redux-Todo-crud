import * as types from "./actionTypes"

const todosRequest= () =>{
    return {
        type: types.GET_TODOS_REQUEST
    }
}
const todosSuccess= (payload) =>{
    return {
        type: types.GET_TODOS_SUCCESS,
        payload
    }
}
const todosFailure= () =>{
    return {
        type: types.GET_TODOS_FAILURE
    }
}

const addTodoRequest= () =>{
    return {
        type: types.ADD_TODOS_REQUEST
    }
}

const addTodoSuccess= () =>{
    return {
        type: types.ADD_TODOS_SUCCESS
    }
}

const addTodoFailure= () =>{
    return {
        type: types.ADD_TODOS_FAILURE
    }
}

export {todosFailure, todosRequest, todosSuccess, addTodoFailure,addTodoSuccess,addTodoRequest}