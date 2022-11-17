import './TasksAddForm.css';

const TaskAddForm = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Добавлено');
    }

    return (
        <form className="add-task" onSubmit={onSubmit}>
            <input type="text" className="add-task__name" placeholder='Введите название задачи' />
            <input type="text" className="add-task__description" placeholder='Введите описание задачи' />
            <input type="time" className="add-task__time" />
            <input type="date" className="add-task__date" />
            <button type='submit'>Добавить</button>
        </form>
    );
}

export default TaskAddForm;