import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";
// import resList from "../utils/mockData";

import { useEffect, useState } from 'react'

const Body = () => {

    const [listOfRestro, setListOfRestro] = useState([])
    const [filteredRestro, setFilteredRestro] = useState([])
    const [searchText, setSearchText] = useState("")

    useEffect(()=> {
        // console.log("useeffect called");
        fetchData()
    }, [])


    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.8045665&lng=86.2028754&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const jsonData = await data.json();
        console.log(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        // ?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants

        // console.log(jsonData.
        setListOfRestro(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestro(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
 
    // conditional rendering using terinary operator
    return listOfRestro.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="Search for restaurants, dishes, etc." 
                    className="search" 
                    value={searchText}
                    onChange={(e)=> {
                        setSearchText(e.target.value)
                        // console.log(searchText);
                    }}
                
                />
                <button 
                    className="search-btn" 
                    onClick={() => {
                        // console.log(searchText);
                        const filteredRestro = listOfRestro.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
                        // console.log(filteredRestro);
                        setFilteredRestro(filteredRestro)
                    }}
                >
                    Search
                </button>
            </div>
            <div className="filter">
                <button 
                    className="filter-btn" 

                    onClick={ () => {
                        // filter logic

                        const filteredList = listOfRestro.filter((res) => res.info.avgRating > 4.5 )

                        setFilteredRestro(filteredList)
                        
                        // console.log(listOfRestro);
                    } }
                   
                >
                    Rating Above 4.5
                </button>

            </div>
            <div className="res-container">

                {
                    filteredRestro.map( (res) => 
                        <RestroCard key={res.info.id} resData={res} />
                    )
                }

            </div>
        </div>
    )
}

export default Body;