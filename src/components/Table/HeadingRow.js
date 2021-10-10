const HeadingRow = (props) => {
    return (
        <tr className="border bg-blue-00 font-bold">
            {props.children}
        </tr>
    );
}

export default HeadingRow;