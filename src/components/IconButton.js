import { Link } from 'react-router-dom'

const IconButton = (props) => {
    return (
        <Link to={props.to} className={props.className}>
            <div className={`${props.color} p-2 text-white rounded-full shadow-sm inline-block text-md`}>
                {props.children}
            </div>
        </Link>
    )
}

export default IconButton
