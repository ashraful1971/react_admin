const InputField = (props) => {
    return (
        <div>
            <label className="w-full">{props.label}</label>
            <input className="w-full border px-3 py-1.5 my-2 rounded-md" type={props.type} name="name" placeholder={props.placeholder} />
        </div>
    )
}

export default InputField
