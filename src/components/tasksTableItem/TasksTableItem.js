// import { useState } from 'react';
import './TasksTableItem.css';

const TasksTableItem = ({name, description, time, date, files, progress, onDelete, onToogleProp}) => {
    if (!files) {
        files = 'Нет прикрепленных файлов';
    }

    const checkDate = (time, date) => {
        return (new Date(`${date}T${time}`) - new Date())
    }
    
    let classNames = 'task';
    if (checkDate(time, date) < 0) {
        classNames += ' overdue-task';
    }
    if (progress) {
        if (checkDate(time, date) > 0) {
            classNames += ' done-task'
        } 
    }
    
    return (
        <tr className={classNames}>
            <td>
                <span data-toogle="name">{name}</span>
            </td>
            <td>
                <span data-toogle="description">{description}</span>
            </td>
            <td>
                <div>
                    <span data-toogle="time">{time}</span>
                    <span data-toogle="date">{date.split('-').reverse().join('.')}</span>
                </div>
            </td>
            <td data-toogle="files">
                {files}
            </td>
            <td>
                <div>
                    <label>
                        <input type="checkbox" className="checkbox" data-toogle="progress" onChange={onToogleProp} defaultValue={progress} />
                        Выполнено
                    </label>
                    <button className='delete-button' onClick={onDelete}>Удалить</button>
                </div>
            </td>
        </tr>
    );
}

export default TasksTableItem;