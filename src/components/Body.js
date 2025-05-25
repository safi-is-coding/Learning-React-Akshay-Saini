import RestroCard from "./RestroCard";
import resList from "../utils/mockData";

import { useState } from 'react'

const Body = () => {

    const [listOfRestro, setListOfResto] = useState(resList)

    
    return (
        <div className="body">
            <div className="search-container">
                <input type="text" placeholder="Search for restaurants, dishes, etc." className="search"/>
                <button className="search-btn">Search</button>
            </div>
            <div className="filter">
                <button 
                    className="filter-btn" 

                    onClick={ () => {
                        // filter logic

                        const filteredList = listOfRestro.filter((res) => res.info.avgRating > 4.5)

                        setListOfResto(filteredList)
                        
                        // console.log(listOfRestro);
                    } }
                   
                >
                    Top Rated Restraunts
                </button>

                <button
                    className="filter-btn"
                    
                    onClick={ ()=> {
                        setListOfResto(resList)
                    }}
                >
                    All Restro Cards
                </button>
            </div>
            <div className="res-container">

                {/* {
                    resList.map((restro) => <RestroCard key={restro.info.id} resData={restro} />)

                } */}

                {
                    listOfRestro.map( (res) => 
                        <RestroCard key={res.info.id} resData={res} />
                    )
                }

            </div>
        </div>
    )
}

export default Body;