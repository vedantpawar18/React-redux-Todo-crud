import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { addTodoFailure,addTodoRequest, addTodoSuccess,todosRequest, todosFailure,  todosSuccess } from '../Redux/action'
import TodoInput from './TodoInput'

const Todo = () => {

    const dispatch= useDispatch();
    const {todos, isLoading, isError}= useSelector(store=> {return {
        todos:store.todos,
        isLoading:store.isLoading,
        isError: store.isError
    }
    }, shallowEqual);

    console.log(todos)
    

    const getTodos = () =>{
        dispatch(todosRequest());
        return   (axios.get("http://localhost:8080/todos", )
        .then((r)=>{
            // console.log(r.data);
            dispatch(todosSuccess(r.data));
        })
        .catch((e)=>{
            console.log(e)
            dispatch(todosFailure());
        })
        )
    }

    const addTodos =(payload) =>{
        dispatch(addTodoRequest())
        return axios.post("http://localhost:8080/todos",payload)
        .then(r =>{
            console.log(r.data)
            dispatch(addTodoSuccess())
    }).then(() => dispatch(getTodos()))
    .catch(e =>{
        console.log(e)
        dispatch(addTodoFailure())
    })
    };

    const deleteTodo = (id) =>{
        return axios({
            url:`http://localhost:8080/todos/${id}`,
            method:"DELETE"
        }).then(()=>{
            getTodos();
        })
    }

    function handleToggle(id, newStatus){
        return axios({
            url:`http://localhost:8080/todos/${id}`,
            method:"PATCH",
            data:{
                status:newStatus
            }
        }).then(()=>getTodos());
    }

    useEffect(() =>{
      getTodos();
    },[])
  return (
    <div>
        <h1>Todo</h1>
        <TodoInput addTodos={addTodos} />
        <h3>Todos List</h3>
        <ul style={{border:"1px solid black", width:"30%", margin:"auto"}}>
            {
                todos.length>0 && todos.map((item)=>{
                    return <li style={{display:"flex",justifyContent:"space-between",padding:"10px", gap:"16px", margin:"auto"}} key={item.id}>{item.title}
                    <div>
                        <button onClick={()=>deleteTodo(item.id)}>Delete</button> <button onClick={()=> handleToggle(item.id, !item.status)}>{item.status? "Done":"Not Done"}</button></div></li>
                })
            }
        </ul>
    </div>
  )
}

export default Todo