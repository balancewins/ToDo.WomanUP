import { useState } from 'react';
import Header from '../headerLogo/HeaderLogo';
import Services from '../services/Services';
import TasksAddForm from '../tasksAddForm/TasksAddForm';
import TasksTable from '../tasksTable/TaskTable';
import './App.css';

function App() {
  const [data, setData] = useState([
    {
      name: 'Тестовое задание ',
      description: 'Сделать ToDoList согласно ТЗ',
      time: '18:00',
      date: '2022-11-19',
      progress: false,
      files: null,
      id: 1
    },
    {
      name: 'Редактируемые поля',
      description: 'Разобраться как сделать редактируемые поля',
      time: '18:00',
      date: '2022-11-20',
      progress: true,
      done: '2022-11-20T17:10',
      files: null,
      id: 2
    },
    {
      name: 'Проверка выполнения задачи в срок',
      description: 'Добавить скрытое свойство, отслеживающее дату и время выполнения задачи',
      time: '23:00',
      date: '2022-11-20',
      progress: true,
      done: '2022-11-20T21:20',
      files: null,
      id: 3
    },
    {
      name: 'google.firebase.com',
      description: 'Подключить БД',
      time: '23:00',
      date: '2022-11-20',
      progress: false,
      files: null,
      id: 4
    }
  ]);

  const [maxId, setMaxId] = useState(5);

  const service = new Services();

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
      done: null,
      files: null,
      id: maxId
    }

    const newArr = [...data, newItem]
    setData(newArr);
  }

  const onToogleProp = (id, prop) => {
    const newArr = data.map(item => {
      if (item.id === id) {
        if (prop === 'progress') {
          return {...item, done: service.getNowDate(), [prop]: !item[prop]}
        }
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
