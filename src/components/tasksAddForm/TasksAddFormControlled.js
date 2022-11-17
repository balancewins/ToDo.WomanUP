import { useState } from 'react';
import './TasksAddForm.css';

const TaskAddFormControlled = ({onAdd}) => {
    const [data, setData] = useState({
        name: '',
        description: '',
        time: '00:00',
        date: '2022-11-17'
    });

    const deadline = (time, date) => {
        const reverseDate = date.split('-').reverse().join('.');
        return `${time} ${reverseDate}`
    }

    const onValueChange = (e) => {
        const newData = JSON.parse(JSON.stringify(data));
        newData[e.target.name] = e.target.value;
        newData.deadline = deadline(newData.time, newData.date);
        setData(newData)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd(data.name, data.description, data.deadline);
    }

    return (
        <form className="add-task" onSubmit={onSubmit}>
            <input type="text"
                   name='name'
                   value={data.name} 
                   className="add-task__name" 
                   placeholder='Введите название задачи'
                   onChange={onValueChange}
                   required />
            <input type="text" 
                   name='description'
                   value={data.description}
                   className="add-task__description" 
                   placeholder='Введите описание задачи'
                   onChange={onValueChange}
                   required />
            <input type="time" 
                   name='time'
                   value={data.time}
                   className="add-task__time"
                   onChange={onValueChange}
                   required />
            <input type="date" 
                   name='date'
                   value={data.date}
                   className="add-task__date"
                   onChange={onValueChange}
                   required />
            <button type='submit'>Добавить</button>
        </form>
    );
}

export default TaskAddFormControlled;