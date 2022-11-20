const DateInput = ({date, onEdit, onEditProp, id}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        onEditProp(id, e.currentTarget.getAttribute('data-toogle'), e.target.date.value);
        onEdit(e.currentTarget.getAttribute('data-toogle'))
    }

    return (
        <form data-toogle="date" onSubmit={onSubmit}>
            <input type="date" name='date' defaultValue={date} />
            <button type="submit">V</button>
        </form>
    );
}

export default DateInput;