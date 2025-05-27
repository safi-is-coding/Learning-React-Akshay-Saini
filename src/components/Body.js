import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";
// import resList from "../utils/mockData";

import { use, useEffect, useState } from 'react'

const Body = () => {

    const [listOfRestro, setListOfRestro] = useState([])
    const [filteredRestro, setFilteredRestro] = useState([])
    const [searchText, setSearchText] = useState("")

    useEffect(()=> {
        // console.log("useeffect called");
        fetchData()
    }, [])


    const fetchData = async () => {
        const data = await fetch("https://fakerestaurantapi.runasp.net/api/Restaurant/items")

        const jsonData = await data.json();
        // console.log(jsonData);
        // console.log(jsonData.
        setListOfRestro(jsonData)
        setFilteredRestro(jsonData)
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
                        const filteredRestro = listOfRestro.filter((res) => res.itemName.toLowerCase().includes(searchText.toLowerCase()))
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

                        const filteredList = listOfRestro.filter((res) => res.itemPrice > 500 )

                        setFilteredRestro(filteredList)
                        
                        // console.log(listOfRestro);
                    } }
                   
                >
                    Food Above Rs. 500
                </button>

            </div>
            <div className="res-container">

                {
                    filteredRestro.map( (res) => 
                        <RestroCard key={res.itemID} resData={res} />
                    )
                }

            </div>
        </div>
    )
}

export default Body;