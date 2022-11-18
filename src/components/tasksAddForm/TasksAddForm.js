import './TasksAddForm.css';

const TaskAddFormControlled = ({onAdd}) => {

    // const deadline = (time, date) => {
    //     const reverseDate = date.split('-').reverse().join('.');
    //     return `${time} ${reverseDate}`
    // }

    const onSubmit = (e) => {
        e.preventDefault();
        const {name, description, time, date, files} = e.target;
        // onAdd(name.value, description.value, deadline(time.value, date.value));
        onAdd(name.value, description.value, time.value, date.value)
        e.target.reset();
    }

    return (
        <form className="add-task" onSubmit={onSubmit}>
            <input type="text"
                   name='name'
                   className="add-task__name" 
                   placeholder='Введите название задачи'
                   required />
            <input type="text" 
                   name='description'
                   className="add-task__description" 
                   placeholder='Введите описание задачи'
                   required />
            <input type="file"
                   name="file"
                   className='add-task__file' />
            <input type="time" 
                   name='time'
                   className="add-task__time"
                   required />
            <input type="date" 
                   name='date'
                   className="add-task__date"
                   required />
            <button type='submit'>Добавить</button>
        </form>
    );
}

export default TaskAddFormControlled;