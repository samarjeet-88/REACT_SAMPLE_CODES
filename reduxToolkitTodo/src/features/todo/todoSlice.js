import { createSlice,nanoid } from "@reduxjs/toolkit";



const initialState={
    todos:[{id:1,text:"hello world"}]
}

//state refers to all the things that are currently there. They also allow us to access all the data
//action are the values that we pass to the function
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo:(state,action)=>{
            state.todos.map((todo)=>todo.id===action.payload.id ?{...todo,text:action.payload.text} :todo)
        },
    }
})


export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer