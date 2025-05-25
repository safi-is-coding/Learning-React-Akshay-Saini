const RestroCard = (props) => {
    // console.log(props.resData); 

    const {resData} = props

    const {imageUrl, name, cuisines, avgRating, costForTwo} = resData?.info
    
    return (
        <div className="res-card">
            <img className="res-img" alt="restro-image" src={imageUrl} />
            <div className="details">
                <h3>{name}</h3>
                <p>{cuisines.join(", ")}</p>
                <p>{avgRating}</p>
                <p>{"Rs. " + costForTwo + " for two"}</p>
            </div>
        </div>
    )
}

export default RestroCard;