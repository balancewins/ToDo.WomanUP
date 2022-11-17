import TasksTableItem from '../tasksTableItem/TasksTableItem';
import './TaskTable.css';

const TaskTable = ({data, onDelete}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <TasksTableItem 
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)} />
        );
    });

    return (
        <table className="tasks-list">
            <caption className="task-list__descr">Список задач:</caption>
            <thead>
                <tr>
                    <th>Заголовок</th>
                    <th>Описание</th>
                    <th>Дата завершения</th>
                    <th>Прогресс</th>
                </tr>
            </thead>
            <tbody>
                {elements}
            </tbody>
        </table>
    );
}

export default TaskTable;