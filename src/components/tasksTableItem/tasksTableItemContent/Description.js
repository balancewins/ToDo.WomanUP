const Description = ({description, WhoAmI}) => {
    return (
        <span data-toogle="description">{WhoAmI ? 'И тут меняется' : description}</span>
    );
}

export default Description;