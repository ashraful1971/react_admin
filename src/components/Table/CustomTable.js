const CustomTable = (props) => {
    return (
        <table className="w-full text-left text-sm table-auto border-collapse border border-blue-200">
            {props.children}
        </table>
    );
}

export default CustomTable;