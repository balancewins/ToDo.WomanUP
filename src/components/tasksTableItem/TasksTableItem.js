// import { useState } from 'react';
import Name from './tasksTableItemContent/Name';
import Description from './tasksTableItemContent/Description';
import Deadline from './tasksTableItemContent/Deadline';
import Files from './tasksTableItemContent/Files';
import Progress from './tasksTableItemContent/Progress';
import './TasksTableItem.css';

const TasksTableItem = ({name, description, time, date, files, progress, onDelete, onToogleProp}) => {

    if (!files) {
        files = 'Нет прикрепленных файлов';
    }

    const checkDeadline = (time, date) => {
        return (new Date(`${date}T${time}`) - new Date())
    }
    
    let classNames = 'task';
    if (checkDeadline(time, date) < 0) {
        classNames += ' overdue-task';
    }

    if (progress && checkDeadline(time, date) > 0) {
        classNames += ' done-task'
    }

    return (
        <tr className={classNames}>
            <td className='task-name'>
                <Name name={name} />
            </td>
            <td className='task-description'>
                <Description description={description} />
            </td>
            <td className='task-deadline'>
                <Deadline deadline={[time, date]} />
            </td>
            <td className='task-files'>
                <Files files={files} />
            </td>
            <td className='task-progress'>
                <Progress progress={progress}
                          onDelete={onDelete}
                          onToogleProp={onToogleProp} />
            </td>
        </tr>
    );
}

export default TasksTableItem;