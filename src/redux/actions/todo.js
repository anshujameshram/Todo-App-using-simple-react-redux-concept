import { ADD_TODO,TOGGLE_TODO,DELETE_TODO,UPDATE_TODO } from "./actions"

export const addToDo=(todo)=>({
    type:ADD_TODO,
    payload:todo
})

export const toggleToDo=(id)=>({
    type:TOGGLE_TODO,
    payload:id
})

export const deleteToDo=(id)=>({
    type:DELETE_TODO,
    payload:id
})

export const updateToDo=(id,newContent)=>({
    type:UPDATE_TODO,
    payload:{id,newContent}
})

