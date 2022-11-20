const EditButton = ({onEdit, toogle, edit}) => {
    return (
            <button data-toogle={toogle} onClick={onEdit}>{edit ? 'Изм.' : 'Ред.'}</button>
    );
}

export default EditButton;