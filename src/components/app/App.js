import { useState } from 'react';
import Header from '../headerLogo/HeaderLogo';
import Services from '../services/Services';
import TasksAddForm from '../tasksAddForm/TasksAddForm';
import TasksTable from '../tasksTable/TaskTable';
import DB from '../db/DB';
import './App.css';

/** Создание копии класса со вспомогательными функциями. За пределами App() для того, чтоб не при каждом рендере не создавалась новая копия */
const service = new Services();

function App() {
  /** Стэйт для хранения списка задач */
  const [data, setData] = useState(DB);

  let maxId = 4;

  /** 
   * Функция удаления задачи
   * @param {number} id - id удаляемой задачи 
   */
  const deleteItem = (id) => {
    setData(data.filter(item => item.id !== id));
  }

  /** Функция добавления задачи
   * Увеличивает счётчик maxId во избежание пересечения id задач
   * @param {string} name - заголовок задачи
   * @param {string} description - описание задачи
   * @param {string} time - время завершения задачи
   * @param {string} date - дата завершения задачи
   * @param {null} files - файлы, прикрепленные к задаче. На данный момент не активны, планировалось осуществить возможность прикрепления файлов при подключении firebase 
   */
  const addItem = (name, description, time, date, files) => {
    maxId += 1;
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

  /**
   * Функция изменения заголовка, описания, времени/даты завершения задачи.
   * @param {number} id - id изменяемой задачи
   * @param {string} prop - ключ изменяемого свойства
   * @param {string} value - изменяемое значение свойства
   */
  const onEditProp = (id, prop, value) => {
    const newArr = data.map(item => {
      if (item.id === id) {
        return {...item, [prop]: value}
      }
      return item;
    })
    setData(newArr);
  }

  /**
   * Функция изменения прогресса выполнения задачи. Изменяемое значение булевое.
   * @param {number} id - id изменяемой задачи
   * @param {string} prop - ключ изменяемого свойства
   */
  const onToogleProp = (id, prop) => {
    const newArr = data.map(item => {
      if (item.id === id) {
        return {...item, done: service.getNowDate(), [prop]: !item[prop]}
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
          onToogleProp={onToogleProp}
          onEditProp={onEditProp} />
      </main>
    </div>
  );
}

export default App;
