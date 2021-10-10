const Card = (props) => {
    return (
        <div className={`bg-white shadow-sm rounded-md ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Card;
