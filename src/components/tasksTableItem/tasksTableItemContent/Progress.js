import { Fragment } from "react";
const Progress = ({progress, onToogleProp, onDelete}) => {
    return (
        <Fragment>
            <label>
                <input type="checkbox" className="checkbox" data-toogle="progress" onChange={onToogleProp} defaultValue={progress} />
                Выполнено
            </label>
            <button className='delete-button' onClick={onDelete}>Удалить</button>
        </Fragment>
    );
}

export default Progress;