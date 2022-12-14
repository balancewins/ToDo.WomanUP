import { Fragment } from "react";

const Progress = ({progress, onToogleProp, onDelete}) => {
    return (
        <Fragment>
            <label>
                <input type="checkbox" className="checkbox" data-toogle="progress" data-done="done" onChange={onToogleProp} checked={progress} />
                Выполнено
            </label>
            <button className='delete-button' onClick={onDelete}>Удалить</button>
        </Fragment>
    );
}

export default Progress;