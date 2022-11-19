const Name = ({name, WhoAmI}) => {
    return (
        <span data-toogle="name">{WhoAmI ? 'Оно изменяется-таки' : name}</span>
    )
}

export default Name;