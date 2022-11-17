import { useState } from 'react';
import Header from '../headerLogo/HeaderLogo';
import TaskAddForm from '../tasksAddForm/TasksAddForm';
import TaskTable from '../tasksTable/TaskTable';
import './App.css';

function App() {
  const [data, setData] = useState([
    {
      name: 'Тестовое задание1',
      description: 'Сделать ToDoList согласно ТЗ',
      deadline: '18:00 18.11.2022',
      progress: '++',
      id: 1
    }
  ]);

  const [maxId, setMaxId] = useState(2);

  const deleteItem = (id) => {
    setData(data.filter(item => item.id !== id));
  }

  const addItem = (name, description, deadline) => {
    setMaxId(maxId + 1);
    const newItem = {
      name: name,
      description: description,
      deadline: deadline,
      progress: null,
      id: maxId
    }

    const newArr = [...data, newItem]
    setData(newArr);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-main">
        <TaskAddForm 
          onAdd={addItem} />
        <TaskTable 
          data={data}
          onDelete={deleteItem} />
      </main>
    </div>
  );
}

export default App;
