import TasksTableItem from '../tasksTableItem/TasksTableItem';
import './TaskTable.css';

const TaskTable = () => {
    return (
        <table className="tasks-list">
            <caption className="task-list__descr">Список задач:</caption>
            <thead>
                <th>Заголовок</th>
                <th>Описание</th>
                <th>Дата завершения</th>
                <th>Прогресс</th>
            </thead>
            <tbody>
                <TasksTableItem />
            </tbody>
        </table>
    );
}

export default TaskTable;