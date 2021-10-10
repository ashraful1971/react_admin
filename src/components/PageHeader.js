import Button from "./Button"

const PageHeader = (props) => {
    return (
        <div className="flex justify-between">
            <h1 className="text-xl font-bold">{props.title}</h1>
            {props.to ? <Button to={props.to}>Add New</Button> : ''}
        </div>
    )
}

export default PageHeader
