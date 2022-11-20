import { useState } from 'react';
import NameSpan from './tasksTableItemContent/Name/NameSpan';
import NameInput from './tasksTableItemContent/Name/NameInput';
import DescriptionSpan from './tasksTableItemContent/Description/DescriptionSpan';
import DescriptionInput from './tasksTableItemContent/Description/DescriptionInput';
import TimeSpan from './tasksTableItemContent/Time/TimeSpan';
import TimeInput from './tasksTableItemContent/Time/TimeInput';
import DateSpan from './tasksTableItemContent/Date/DateSpan';
import DateInput from './tasksTableItemContent/Date/DateInput';
import Files from './tasksTableItemContent/Files';
import Progress from './tasksTableItemContent/Progress';
import EditButton from './tasksTableItemContent/EditButton';
import './TasksTableItem.css';

const TasksTableItem = ({name, description, time, date, files, progress, done, onDelete, onToogleProp, onEditProp, id}) => {
    const [edit, setEdit] = useState([
        {
            name: false,
            description: false,
            time: false,
            date: false
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

    const checkDeadline = (time, date, doneTask) => {
        if (doneTask) {
            return ((new Date(`${date}T${time}`)) - (new Date(`${doneTask}`)))
        }
        return ((new Date(`${date}T${time}`)) - (new Date()))
    }
    
    let classNames = 'task';
    if (checkDeadline(time, date) < 0) {
        classNames += ' overdue-task';
    }

    if (done && progress && checkDeadline(time, date, done) > 0) {
        classNames += ' done-task';
    }

    const Name = ({edit}) => {
        const WhoAmI = edit;
        if (WhoAmI) {
            return <NameInput name={name} 
                              onEditProp={onEditProp}
                              id={id}
                              onEdit={onEdit} />
        }
        return <NameSpan name={name} />
    }

    const Description = ({edit}) => {
        const WhoAmI = edit;
        if (WhoAmI) {
            return <DescriptionInput description={description}
                                     onEditProp={onEditProp}
                                     id={id}
                                     onEdit={onEdit} />
        }
        return <DescriptionSpan description={description} />
    }

    const TimeDeadline = ({edit}) => {
        const WhoAmI = edit;
        if (WhoAmI) {
            return <TimeInput time={time}
                              onEditProp={onEditProp}
                              id={id}
                              onEdit={onEdit} />
        }
        return <TimeSpan time={time} />
    }

    const DateDeadline = ({edit}) => {
        const WhoAmI = edit;
        if (WhoAmI) {
            return <DateInput date={date}
                              onEditProp={onEditProp}
                              id={id}
                              onEdit={onEdit} />
        }
        return <DateSpan date={date} />
    }

    return (
        <tr className={classNames}>
            <td className='task-name'>
                <div>
                    <Name edit={edit[0].name} />
                    <EditButton toogle='name'
                                edit={edit[0].name} 
                                onEdit={(e) => onEdit(e.currentTarget.getAttribute('data-toogle'))} />
                </div>
            </td>
            <td className='task-description'>
                <div>
                    <Description edit={edit[0].description} />
                    <EditButton toogle='description' 
                                edit={edit[0].description} 
                                onEdit={(e) => onEdit(e.currentTarget.getAttribute('data-toogle'))} />
                </div>
            </td>
            <td className='task-time'>
                <div>
                    <TimeDeadline edit={edit[0].time} />
                    <EditButton toogle='time' 
                                edit={edit[0].time} 
                                onEdit={(e) => onEdit(e.currentTarget.getAttribute('data-toogle'))} />
                </div>
            </td>
            <td className='task-date'>
                <div>
                    <DateDeadline edit={edit[0].date} />
                    <EditButton toogle='date' 
                                edit={edit[0].date} 
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