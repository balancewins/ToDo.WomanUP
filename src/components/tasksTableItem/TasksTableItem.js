// import { useState } from 'react';
import './TasksTableItem.css';

const TasksTableItem = ({name, description, time, date, progress, onDelete, onToogleProp}) => {
    let classNames = "";
    if (progress) {
        classNames += 'active' 
    }

    return (
        <tr className={classNames}>
            <td>
                <input type="text" defaultValue={name}/>
            </td>
            <td>
                <input type="text" defaultValue={description}/>
            </td>
            <td>
                <div>
                    <input type="time" defaultValue={time} />
                    <input type="date" defaultValue={date} />
                </div>
            </td>
            <td>
                <div>
                    <label>
                        <input type="checkbox" className="checkbox" data-toogle="progress" onChange={onToogleProp} />
                        Выполнено
                    </label>
                    <button className='delete-button' onClick={onDelete}>Удалить</button>
                </div>
            </td>
        </tr>
    );
}

export default TasksTableItem;