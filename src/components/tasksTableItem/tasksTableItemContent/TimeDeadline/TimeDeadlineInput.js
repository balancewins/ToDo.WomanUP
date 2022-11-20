const TimeInput = ({time, onEdit, onEditProp, id}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        onEditProp(id, e.currentTarget.getAttribute('data-toogle'), e.target.time.value);
        onEdit(e.currentTarget.getAttribute('data-toogle'))
    }

    return (
        <form data-toogle="time" onSubmit={onSubmit}>
            <input type="time" name='time' defaultValue={time} />
            <button type="submit">V</button>
        </form>
    );
}

export default TimeInput;