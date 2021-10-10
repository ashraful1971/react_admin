import { Link } from 'react-router-dom'

const Button = (props) => {
    return (
        <div>
            <Link className="px-6 py-2 bg-blue-600 text-white text-sm shadow-sm rounded-full border-2 border-blue-600 hover:bg-white hover:text-blue-600" to={props.to}>{props.children}</Link>
        </div>
    )
}

export default Button
