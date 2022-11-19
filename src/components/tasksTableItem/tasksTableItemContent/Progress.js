const Progress = ({progress, onToogleProp, onDelete}) => {
    return (
        <div>
            <label>
                <input type="checkbox" className="checkbox" data-toogle="progress" onChange={onToogleProp} defaultValue={progress} />
                Выполнено
            </label>
            <button className='delete-button' onClick={onDelete}>Удалить</button>
        </div>
    );
}

export default Progress;