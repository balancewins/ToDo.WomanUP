import { useState } from 'react';
import Header from '../headerLogo/HeaderLogo';
import TasksAddForm from '../tasksAddForm/TasksAddForm';
import TasksTable from '../tasksTable/TaskTable';
import './App.css';

function App() {
  const [data, setData] = useState([
    {
      name: 'Тестовое задание Тестовое задание Тестовое задание Тестовое задание Тестовое задание Тестовое задание Тестовое задание Тестовое задание ',
      description: 'Сделать ToDoList согласно ТЗ Сделать ToDoList согласно ТЗ Сделать ToDoList согласно ТЗ Сделать ToDoList согласно ТЗ Сделать ToDoList согласно ТЗ',
      time: '18:00',
      date: '2022-11-17',
      progress: false,
      files: null,
      id: 1
    }
  ]);

  const [maxId, setMaxId] = useState(2);

  const deleteItem = (id) => {
    setData(data.filter(item => item.id !== id));
  }

  

  const addItem = (name, description, time, date, files) => {
    setMaxId(maxId + 1);
    const newItem = {
      name: name,
      description: description,
      time: time,
      date: date,
      progress: false,
      files: null,
      id: maxId
    }

    const newArr = [...data, newItem]
    setData(newArr);
  }

  const onToogleProp = (id, prop) => {
    const newArr = data.map(item => {
      if (item.id === id) {
        return {...item, [prop]: !item[prop]}
      }
      return item;
    })
    setData(newArr);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-main">
        <TasksAddForm 
          onAdd={addItem} />
        <TasksTable 
          data={data}
          onDelete={deleteItem}
          onToogleProp={onToogleProp} />
      </main>
    </div>
  );
}

export default App;
