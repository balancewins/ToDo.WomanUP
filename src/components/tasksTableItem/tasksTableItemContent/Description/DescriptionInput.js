const DescriptionInput = ({description, onEdit, onEditProp, id}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        onEditProp(id, e.currentTarget.getAttribute('data-toogle'), e.target.description.value);
        onEdit(e.currentTarget.getAttribute('data-toogle'));
    }

    return (
        <form data-toogle="description" onSubmit={onSubmit}>
            <textarea type="text" name="description">{description}</textarea>
            <button type="submit">V</button>
        </form>
    )
}

export default DescriptionInput;