
## 09 - RTK

```tsx
function Component() {
  return (
    <div>
      <h2>Count: 0</h2>
      <h2>Status: Pending</h2>

      <div className='btn-container'>
        <button onClick={() => console.log('increment')} className='btn'>
          Increment
        </button>
        <button onClick={() => console.log('decrement')} className='btn'>
          Decrement
        </button>
        <button onClick={() => console.log('reset')} className='btn'>
          Reset
        </button>
      </div>
      <div className='btn-container'>
        <button onClick={() => console.log('active')} className='btn'>
          Set Status to Active
        </button>
        <button className='btn' onClick={() => console.log('inactive')}>
          Set Status to Inactive
        </button>
      </div>
    </div>
  );
}
export default Component;
```

- counterSlice.ts

```ts
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type CounterStatus = 'active' | 'inactive' | 'pending...';

type CounterState = {
  count: number;
  status: CounterStatus;
};

const initialState: CounterState = {
  count: 0,
  status: 'pending...',
};

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    setStatus: (state, action: PayloadAction<CounterStatus>) => {
      state.status = action.payload;
    },
  },
});

export const { increment, decrement, reset, setStatus } = counterSlice.actions;

export default counterSlice.reducer;
```

store.ts

```ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './starter/09-rtk/counterSlice';
// ...

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

type RootState represents the type of the state stored in your Redux store. ReturnType is a utility type provided by TypeScript that can get the return type of a function. store.getState is a function that returns the current state stored in the Redux store. So ReturnType<typeof store.getState> is the type of the state returned by store.getState, which is the type of the state in your Redux store.

type AppDispatch represents the type of the dispatch function in your Redux store. store.dispatch is the function you use to dispatch actions in Redux. typeof store.dispatch gets the type of this function. So AppDispatch is the type of the dispatch function in your Redux store.

hooks.ts

```ts
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

export const useAppDispatch: () => AppDispatch = useDispatch;

This line is creating a custom hook called useAppDispatch that wraps around the useDispatch hook from Redux. The useDispatch hook returns the dispatch function from the Redux store. By creating a custom hook useAppDispatch, you can ensure that the dispatch function is correctly typed with your application's specific dispatch type (AppDispatch).

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

This line is creating a custom hook called useAppSelector that wraps around the useSelector hook from Redux. The useSelector hook allows you to extract data from the Redux store state. By creating a custom hook useAppSelector, you can ensure that the selector functions passed to this hook are correctly typed with your application's specific state type (RootState).

main.tsx

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { store } from './store';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

index.tsx

```tsx
import { useAppSelector, useAppDispatch } from '../../hooks';
import { decrement, increment, reset, setStatus } from './counterSlice';
function Component() {
  const { count, status } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Status: {status}</h2>

      <div className='btn-container'>
        <button onClick={() => dispatch(increment())} className='btn'>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())} className='btn'>
          Decrement
        </button>
        <button onClick={() => dispatch(reset())} className='btn'>
          Reset
        </button>
      </div>
      <div className='btn-container'>
        <button onClick={() => dispatch(setStatus('active'))} className='btn'>
          Set Status to Active
        </button>
        <button className='btn' onClick={() => dispatch(setStatus('inactive'))}>
          Set Status to Inactive
        </button>
      </div>
    </div>
  );
}
export default Component;
```

## Challenge - Task Application

### Setup

- Create the following in './starter/10-tasks':
  - `Form.tsx` (with a basic return)
  - `List.tsx` (with a basic return)
  - `types.ts`
    - Export a type named 'Task' with the following properties:
      - `id: string`
      - `description: string`
      - `isCompleted: boolean`
- In `index.tsx`, import 'Task' type and set up a state value of type 'Task[]'.
- Also, import and render 'Form' and 'List' in `index.tsx`.

### Form

- Create a form with a single input.
- Set up a controlled input.
- Set up a form submit handler and ensure it checks for empty values.

### Add Task

- In `index.tsx`, create an 'addTask' function that adds a new task to the list.
- Pass 'addTask' as a prop to 'Form'.
- In 'Form', set up the correct type and invoke 'addTask' if the input has a value.

### Toggle Task

- In `index.tsx`, create a 'toggleTask' function that toggles 'isCompleted'.
- Pass the function and list as props to 'List'.
- In `List.tsx`:
  - Set up the correct type for props.
  - Render the list.
  - Set up a checkbox in each item and add an 'onChange' handler.
  - Invoke the 'toggleTask' functionality.

### Local Storage

- Incorporate LocalStorage into the application.

## 10 - Tasks

- create Form, List components

types.ts

```ts
export type Task = {
  id: string;
  description: string;
  isCompleted: boolean;
};
```

index.tsx

```tsx
import { useEffect, useState } from 'react';
import Form from './Form';
import List from './List';
import { type Task } from './types';

function Component() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <section>
      <Form />
      <List />
    </section>
  );
}
export default Component;
```

Form.tsx

```tsx
import { useState } from 'react';
import { type Task } from './types';

function Form() {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      alert('please enter a task');
      return;
    }
    //  add task
    setText('');
  };
  return (
    <form className='form task-form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='form-input'
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button type='submit' className='btn'>
        add task
      </button>
    </form>
  );
}
export default Form;
```

index.tsx

```tsx
import { useEffect, useState } from 'react';
import Form from './Form';
import List from './List';
import { type Task } from './types';

function Component() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <Form addTask={addTask} />
      <List />
    </div>
  );
}
export default Component;
```

Form.tsx

```tsx
import { useState } from 'react';
import { type Task } from './types';

type FormProps = {
  addTask: (task: Task) => void;
};

function Form({ addTask }: FormProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      alert('please enter a task');
      return;
    }
    addTask({
      id: new Date().getTime().toString(),
      description: text,
      isCompleted: false,
    });
    setText('');
  };
  return (
    <form className='form task-form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='form-input'
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button type='submit' className='btn'>
        add task
      </button>
    </form>
  );
}
export default Form;
```

index.tsx

```tsx
const toggleTask = ({ id }: { id: string }) => {
  setTasks(
    tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    })
  );
};
return (
  <div>
    <Form addTask={addTask} />
    <List tasks={tasks} toggleTask={toggleTask} />
  </div>
);
```

List.tsx

```tsx
import { type Task } from './types';

type ListProps = {
  tasks: Task[];
  toggleTask: ({ id }: { id: string }) => void;
};

const List = ({ tasks, toggleTask }: ListProps) => {
  return (
    <ul className='list'>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <p className='task-text'>{task.description}</p>
            <input
              type='checkbox'
              checked={task.isCompleted}
              onChange={() => {
                toggleTask({ id: task.id });
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default List;
```

index.tsx

```tsx
import { useEffect, useState } from 'react';
import Form from './Form';
import List from './List';
import { type Task } from './types';

// Load tasks from localStorage
function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
}

function updateStorage(tasks: Task[]): void {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function Component() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const toggleTask = ({ id }: { id: string }) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
  };
  useEffect(() => {
    updateStorage(tasks);
  }, [tasks]);
  return (
    <div>
      <Form addTask={addTask} />
      <List tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
}
export default Component;
```