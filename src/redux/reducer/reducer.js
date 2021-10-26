import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const TodoReducer = createSlice({
    name: "Todo",
    initialState,
    reducers:{
        //here we will write our reducers

        //Adding Todo
        getAddTodo:(state, action) => {
            state.push(action.payload);
            return state;
        },

        // Remove Todo
        getRemoveTodo:(state, action) => {
            return state.filter(item => item.id !== action.payload);
        },
        

        //Completed Todo
        getCompleteTodo : (state, action) => {
            return state.map((todo) => {
                if(todo.id === action.payload) {
                    return {
                        ...todo,
                        completed : true,
                    }
                }
                return todo;
            })
        }
    }
})


export const {getAddTodo, getRemoveTodo, getCompleteTodo} = TodoReducer.actions;
export const reducer = TodoReducer.reducer;