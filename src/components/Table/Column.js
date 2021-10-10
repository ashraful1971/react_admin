const Column = (props) => {
    return (
        <td className="p-3 border" {...props}>{props.children}</td>
    );
}

export default Column;