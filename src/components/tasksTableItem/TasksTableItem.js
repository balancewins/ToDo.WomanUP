import { useState } from 'react';
import NameSpan from './tasksTableItemContent/Name/NameSpan';
import NameInput from './tasksTableItemContent/Name/NameInput';
import DescriptionSpan from './tasksTableItemContent/Description/DescriptionSpan';
import DescriptionInput from './tasksTableItemContent/Description/DescriptionInput';
import TimeDeadlineSpan from './tasksTableItemContent/TimeDeadline/TimeDeadlineSpan';
import TimeDeadlineInput from './tasksTableItemContent/TimeDeadline/TimeDeadlineInput';
import DateDeadlineSpan from './tasksTableItemContent/DateDeadline/DateDeadlineSpan';
import DateDeadlineInput from './tasksTableItemContent/DateDeadline/DateDeadlineInput';
import Files from './tasksTableItemContent/Files';
import Progress from './tasksTableItemContent/Progress';
import EditButton from './tasksTableItemContent/EditButton';
import './TasksTableItem.css';

const TasksTableItem = ({name, description, time, date, files, progress, done, onDelete, onToogleProp, onEditProp, id}) => {
    /** Стейт для хранения возможности редактирования конкретного поля */
    const [edit, setEdit] = useState(
        {
            name: false,
            description: false,
            time: false,
            date: false
        }
    );
    
    /**
     * Функция изменения состояния возможности редактирования
     * @param {string} prop - ключ изменяемого свойства
     */
    const onEdit = (prop) => {   
        setEdit({...edit, [prop]: !edit[prop]});
    }

    /** Заглушка для неактивных на данных момент файлов */
    if (!files) {
        files = 'Нет прикрепленных файлов';
    }

    /**
     * Функция для отслеживания выполнения задачи в срок
     * @param {string} time - заданное время завершения задачи
     * @param {string} date - заданная дата завершения задачи
     * @param {string} doneTask - время фактического выполнения задачи. В случае отсутствия такового, отслеживает текущие дату/время.
     * @returns 
     */
    const checkDeadline = (time, date, doneTask) => {
        if (doneTask) {
            return ((new Date(`${date}T${time}`)) - (new Date(`${doneTask}`)))
        }
        return ((new Date(`${date}T${time}`)) - (new Date()))
    }
    
    /** Проверки на выполнение задач в срок и добавление соответствующих классов */
    let classNames = 'task';
    if (checkDeadline(time, date) < 0) {
        classNames += ' overdue-task';
    }

    if (done && progress && checkDeadline(time, date, done) > 0) {
        classNames += ' done-task';
    }

    /** Функции для условного рендеринга в зависимости от положения связанного ключа стейта edit */
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
            return <TimeDeadlineInput time={time}
                              onEditProp={onEditProp}
                              id={id}
                              onEdit={onEdit} />
        }
        return <TimeDeadlineSpan time={time} />
    }

    const DateDeadline = ({edit}) => {
        const WhoAmI = edit;
        if (WhoAmI) {
            return <DateDeadlineInput date={date}
                              onEditProp={onEditProp}
                              id={id}
                              onEdit={onEdit} />
        }
        return <DateDeadlineSpan date={date} />
    }

    return (
        <tr className={classNames}>
            <td className='task-name'>
                <div>
                    <Name edit={edit.name} />
                    <EditButton toogle='name'
                                edit={edit.name} 
                                onEdit={(e) => onEdit(e.currentTarget.getAttribute('data-toogle'))} />
                </div>
            </td>
            <td className='task-description'>
                <div>
                    <Description edit={edit.description} />
                    <EditButton toogle='description' 
                                edit={edit.description} 
                                onEdit={(e) => onEdit(e.currentTarget.getAttribute('data-toogle'))} />
                </div>
            </td>
            <td className='task-time'>
                <div>
                    <TimeDeadline edit={edit.time} />
                    <EditButton toogle='time' 
                                edit={edit.time} 
                                onEdit={(e) => onEdit(e.currentTarget.getAttribute('data-toogle'))} />
                </div>
            </td>
            <td className='task-date'>
                <div>
                    <DateDeadline edit={edit.date} />
                    <EditButton toogle='date' 
                                edit={edit.date} 
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