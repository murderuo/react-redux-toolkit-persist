import { createSlice } from '@reduxjs/toolkit';

const initialState = {todos:[]};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);
      return { todos: [...state.todos, action.payload] };
      // return [...state,action.payload]
    },
    removeTodo: () => {},
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
