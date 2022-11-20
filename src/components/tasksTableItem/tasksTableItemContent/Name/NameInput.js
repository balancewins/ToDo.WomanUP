const NameInput = ({name, onEdit, onEditProp, id}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        onEditProp(id, e.currentTarget.getAttribute('data-toogle'), e.target.name.value);
        onEdit(e.currentTarget.getAttribute('data-toogle'))
    }

    return (
        <form data-toogle="name" onSubmit={onSubmit}>
            <input type="text" name="name" defaultValue={name} />
            <button type="submit">V</button>
        </form>
    )
}

export default NameInput;