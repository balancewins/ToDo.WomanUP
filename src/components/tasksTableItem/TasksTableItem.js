import './TasksTableItem.css';

const TasksTableItem = ({name, description, deadline, progress, onDelete}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{description}</td>
            <td>{deadline}</td>
            <td>
                {progress}
                <button onClick={onDelete}>Удалить</button>
            </td>
        </tr>
    );
}

export default TasksTableItem;