const RestroCard = (props) => {
    // console.log(props.resData); 

    const {resData} = props

    const {imageUrl, itemName, itemDescription, itemPrice, restaurantName} = resData
    
    return (
        <div className="res-card">
            <img className="res-img" alt="restro-image" src={imageUrl } />
            <div className="details">
                <h3 className="item-name">{itemName}</h3>
                <p className="item-desc">{itemDescription}</p>
                <p className="item-price" style={{fontWeight:"bold"}}>{"Rs. " + itemPrice}</p>
                <p className="restro-name">{restaurantName}</p>
            </div>
        </div>
    )
}

export default RestroCard;