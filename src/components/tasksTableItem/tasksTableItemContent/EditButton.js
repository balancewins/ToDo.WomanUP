const EditButton = ({onEdit, toogle}) => {
    return (
            <button data-toogle={toogle} onClick={onEdit}>Ред.</button>
    );
}

export default EditButton;