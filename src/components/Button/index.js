function Button(props) {
    let { title, arr, onClick,children } = props;
    console.log(arr)
    return (
        <button onClick={onClick}>{children}</button>
    )
}

export default Button;