const SubmitButton = (props) => {
    return (
        <input type="submit" value={props.text} className="px-6 py-1 bg-blue-600 text-white text-sm shadow-sm rounded-md border-2 border-blue-600 hover:bg-white hover:text-blue-600" />
    )
}

export default SubmitButton
