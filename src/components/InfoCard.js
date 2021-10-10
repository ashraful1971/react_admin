const InfoCard = (props) => {
    return (
        <div className="flex-1 justify-between flex shadow-sm rounded-md items-center p-5 bg-white">
            <div>
                <p className="text-3xl font-bold text-blue-600">{props.number}</p>
                <p>{props.heading}</p>
            </div>
            <div className="text-4xl text-blue-200 p-1">
                {props.icon}
            </div>
        </div>
    )
}

export default InfoCard;