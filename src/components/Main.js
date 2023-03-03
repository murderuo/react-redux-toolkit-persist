import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, logout } from './redux/userSlice';
import { nanoid } from '@reduxjs/toolkit';
import { addTodo } from './redux/todosSlice';

function Main() {
  // const allusers=store.getState()
  // console.log(allusers.users);
  const state = useSelector(state => {
    console.log(state);
    return state;
  });

  const users = state.users.users;
  const todos = state.todos.todos;
  console.log('users:', users);
  console.log('todos:', todos);

  const dispatch = useDispatch();

  const [user, setUser] = useState({ id: '', name: '', surname: '' });
  const [todo, setTodo] = useState({ id: '', content: '' });

  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-6 mx-auto">
            <div className="border p-4 mt-5">
              <div className="d-flex flex-column">
                <div className="d-flex justify-content-between p-1 flex-wrap">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" onChange={e => setUser({ ...user, [e.target.name]: e.target.value })} />
                </div>
                <div className="d-flex justify-content-between p-1 flex-wrap">
                  <label htmlFor="">Surname</label>
                  <input type="text" name="surname" id="surname" onChange={e => setUser({ ...user, [e.target.name]: e.target.value })} />
                </div>
                <div className="d-flex justify-content-around w-50 mx-auto p-3">
                  <button className="p-1" onClick={() => dispatch(addUser({ ...user, id: nanoid() }))}>
                    Log in
                  </button>
                  <button className="p-1" onClick={() => dispatch(logout())}>
                    Log out
                  </button>
                </div>
              </div>
            </div>
            {users?.length > 0 && (
              <div className="border text-center">
                <label className="fw-bold"> session storage</label>
                {users?.map(user => (
                  <div key={user.id} className="d-flex justify-content-around">
                    <label htmlFor="">Name: {user?.name}</label>
                    <label htmlFor="">Surname: {user?.surname}</label>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-6 mx-auto">
            <div className="border p-4 mt-5">
              <div className="d-flex flex-column">
                <div className="d-flex justify-content-between p-1 flex-wrap">
                  <label htmlFor="todo">Todo:</label>
                  <input type="text" name="content" id="content" onChange={e => setTodo({ ...todo, [e.target.name]: e.target.value })} />
                </div>
                <div className="d-flex justify-content-around w-50 mx-auto p-3">
                  <button className="p-1" onClick={() => dispatch(addTodo({ ...todo, id: nanoid() }))}>
                    Add Todo
                  </button>
                </div>
              </div>
            </div>
            {todos?.length > 0 && (
              <div className="border text-center">
                <label className="fw-bold"> local storage</label>
                {todos?.map(todo => (
                  <div key={todo.id} className="d-flex justify-content-around">
                    <label>Todo: {todo?.content}</label>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
