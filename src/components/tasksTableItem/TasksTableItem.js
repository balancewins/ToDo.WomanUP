import { useState } from 'react';
import Name from './tasksTableItemContent/Name';
import Description from './tasksTableItemContent/Description';
import Deadline from './tasksTableItemContent/Deadline';
import Files from './tasksTableItemContent/Files';
import Progress from './tasksTableItemContent/Progress';
import EditButton from './tasksTableItemContent/EditButton';
import './TasksTableItem.css';

const TasksTableItem = ({name, description, time, date, files, progress, onDelete, onToogleProp}) => {
    const [edit, setEdit] = useState([
        {
            name: false,
            description: false,
            deadline: false
        }
    ]);

    const onEdit = (prop) => {
        const newArr = edit.map(item => {
            return {...item, [prop]: !item[prop]}
        })
        setEdit(newArr);
    }

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
                <div>
                    <Name name={name}
                          WhoAmI={edit[0].name}/>
                    <EditButton toogle='name' 
                                onEdit={(e) => onEdit(e.currentTarget.getAttribute('data-toogle'))} />
                </div>
            </td>
            <td className='task-description'>
                <div>
                    <Description description={description}
                                 WhoAmI={edit[0].description} />
                    <EditButton toogle='description' 
                                onEdit={(e) => onEdit(e.currentTarget.getAttribute('data-toogle'))} />
                </div>
            </td>
            <td className='task-deadline'>
                <div>
                    <Deadline deadline={[time, date]}
                              WhoAmI={edit[0].deadline} />
                    <EditButton toogle='deadline' 
                                onEdit={(e) => onEdit(e.currentTarget.getAttribute('data-toogle'))} />
                </div>
            </td>
            <td className='task-files'>
                <div>
                    <Files files={files} />
                </div>
            </td>
            <td className='task-progress'>
                <div>
                    <Progress progress={progress}
                              onDelete={onDelete}
                              onToogleProp={onToogleProp} />
                </div>
            </td>
        </tr>
    );
}

export default TasksTableItem;