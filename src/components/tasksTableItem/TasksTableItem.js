import { useState } from 'react';
import NameSpan from './tasksTableItemContent/Name/NameSpan';
import NameInput from './tasksTableItemContent/Name/NameInput';
import DescriptionSpan from './tasksTableItemContent/Description/DescriptionSpan';
import DescriptionInput from './tasksTableItemContent/Description/DescriptionInput';
import DeadlineSpan from './tasksTableItemContent/Deadline/DeadlineSpan';
import DeadlineInput from './tasksTableItemContent/Deadline/DeadlineInput';
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

    const Name = ({edit}) => {
        const WhoAmI = edit;
        if (WhoAmI) {
            return <NameInput name={name} />
        }
        return <NameSpan name={name} />
    }

    const Description = ({edit}) => {
        const WhoAmI = edit;
        if (WhoAmI) {
            return <DescriptionInput description={description} />
        }
        return <DescriptionSpan description={description} />
    }

    const Deadline = ({edit}) => {
        const WhoAmI = edit;
        if (WhoAmI) {
            return <DeadlineInput deadline={[time, date]} />
        }
        return <DeadlineSpan deadline={[time, date]} />
    }

    return (
        <tr className={classNames}>
            <td className='task-name'>
                <div>
                    <Name edit={edit[0].name} />
                    <EditButton toogle='name' 
                                onEdit={(e) => onEdit(e.currentTarget.getAttribute('data-toogle'))} />
                </div>
            </td>
            <td className='task-description'>
                <div>
                    <Description edit={edit[0].description} />
                    <EditButton toogle='description' 
                                onEdit={(e) => onEdit(e.currentTarget.getAttribute('data-toogle'))} />
                </div>
            </td>
            <td className='task-deadline'>
                <div>
                    <Deadline edit={edit[0].deadline} />
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