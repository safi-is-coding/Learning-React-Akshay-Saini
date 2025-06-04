import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestrauntMenu from "../utils/useRestrauntMenu";

const RestroMenu = () => {
    // const [menuData, setMenuData] = useState(null);

    const { resId } = useParams()
    // console.log(resId);
    
    const resInfo = useRestrauntMenu(resId)


    if (!resInfo) return <Shimmer />;

    const {
        name,
        city,
        cloudinaryImageId,
        costForTwoMessage,
        cuisines,
        avgRating,
        totalRatingsString,
    } = resInfo?.cards[2]?.card?.card?.info;
    console.log(cloudinaryImageId);

    // Extract itemCards
    const itemCards =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.itemCards;

    return (
        <div className="menu">
            <h1>{name} - {city}</h1>
            <p>{cuisines?.join(", ")}</p>
            <p>{costForTwoMessage} • ⭐ {avgRating} ({totalRatingsString})</p>

            <h2>Menu</h2>

            <ul>
              {Array.isArray(itemCards) && itemCards.length > 0 ? (
                itemCards.map((item) => (
                  <li key={item.card.info.id}>
                    {item.card.info.name} - ₹
                    {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    <img src={cloudinaryImageId} alt="menu-image"/>
                  </li>
                ))
              ) : (
                <li>No menu items found</li>
              )}
            </ul>

        </div>
    );
};


export default RestroMenu;
