const EditButton = ({onEdit, toogle, edit}) => {
    return (
            <button data-toogle={toogle} onClick={onEdit}>{edit ? 'Х' : 'Ред.'}</button>
    );
}

export default EditButton;