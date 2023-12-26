import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';

import { useForm } from 'react-hook-form';

import * as yup from 'yup';

const schema = yup.object({
  todoName: yup.string().label('TODO').trim().required('必須です。'),
});

export default function TodoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { todoName: '' },
    resolver: yupResolver(schema),
  });

  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const onSubmit = () => {
    setTodoList((list) => [...list, { id: list.length + 1, name: todo }]);
    setTodo('');
  };

  const onError = (error) => {
    console.log(error);
  };

  const onDelete = (id) => {
    setTodoList((list) => list.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <div>
          <label htmlFor="todoName">TODO:</label>
          <input
            id="todoName"
            type="text"
            {...register('todoName')}
            value={todo}
            onChange={(data) => setTodo(data.target.value)}
          ></input>
          <button type="submit">送信</button>
          <div style={{ color: 'red' }}>{errors.todoName?.message}</div>
        </div>
      </form>
      {/* TODOリスト */}
      <div>
        <ul>
          {todoList.map((todo) => (
            <li key={todo.id}>
              {todo.name}
              <button onClick={() => onDelete(todo.id)}>削除</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
