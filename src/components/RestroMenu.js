import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestroMenu = () => {
    const [menuData, setMenuData] = useState(null);

    const { resId } = useParams()
    console.log(resId);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
            
        );

        const json = await data.json();
        setMenuData(json?.data);
    };

    if (!menuData) return <Shimmer />;

    const resInfo = menuData?.cards[2]?.card?.card?.info;

    const {
        name,
        city,
        cloudinaryImageId,
        costForTwoMessage,
        cuisines,
        avgRating,
        totalRatingsString,
    } = resInfo;

    // Extract itemCards
    const itemCards =
        menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.itemCards;

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
