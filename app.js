import React from "react";
import ReactDOM from "react-dom/client"

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/free-vector/hand-drawn-spicy-logo-design_23-2149667267.jpg?t=st=1748115395~exp=1748118995~hmac=ada9cffb6f12106ab0abce793582832fe3efc61aee9c65e0170e60e2eb47b645&w=996" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer">
            <p>© 2023 Foodie Inc. All rights reserved.</p>
            <p>Follow us on:
                <a href="https://www.facebook.com" target="_blank">Facebook</a>
                <a href="https://www.twitter.com" target="_blank">Twitter</a>
                <a href="https://www.instagram.com" target="_blank">Instagram</a>
            </p>
        </div>
    )
}


  

const RestroCard = (props) => {
    console.log(props.resData); 

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

const resList = [
    {
      cardType: "restaurant",
      info: {
        id: "201",
        name: "The Spice Route",
        imageUrl: "https://img.freepik.com/free-photo/spices-spoons-wooden-table_176420-105.jpg?ga=GA1.1.1106566596.1748115283&semt=ais_hybrid&w=740",
        cuisines: ["Indian", "Thai"],
        avgRating: "4.2",
        deliveryTime: 30,
        costForTwo: 300,
        areaName: "Koramangala",
        promoted: false
      }
    },
    {
      cardType: "restaurant",
      info: {
        id: "202",
        name: "Pizza Planet",
        imageUrl: "https://img.freepik.com/free-photo/crispy-mixed-pizza-with-olives-sausage_140725-3095.jpg?ga=GA1.1.1106566596.1748115283&semt=ais_hybrid&w=740",
        cuisines: ["Italian", "Pizza"],
        avgRating: "4.5",
        deliveryTime: 25,
        costForTwo: 500,
        areaName: "Indiranagar",
        promoted: true
      }
    },
    {
      cardType: "restaurant",
      info: {
        id: "203",
        name: "Burger Hub",
        imageUrl: "https://img.freepik.com/free-photo/front-view-woman-eating-meat-burger_141793-17490.jpg?ga=GA1.1.1106566596.1748115283&semt=ais_hybrid&w=740",
        cuisines: ["Burgers", "Fast Food"],
        avgRating: "4.0",
        deliveryTime: 20,
        costForTwo: 250,
        areaName: "MG Road",
        promoted: false
      }
    },
    {
      cardType: "restaurant",
      info: {
        id: "204",
        name: "Taco Fiesta",
        imageUrl: "https://img.freepik.com/free-photo/delicious-taco-studio_23-2150799509.jpg?ga=GA1.1.1106566596.1748115283&semt=ais_hybrid&w=740",
        cuisines: ["Mexican"],
        avgRating: "4.1",
        deliveryTime: 22,
        costForTwo: 280,
        areaName: "BTM Layout",
        promoted: false
      }
    },
    {
      cardType: "restaurant",
      info: {
        id: "205",
        name: "Green Bowl",
        imageUrl: "https://img.freepik.com/free-photo/vegetables-salad-table_23-2148515515.jpg?ga=GA1.1.1106566596.1748115283&semt=ais_hybrid&w=740",
        cuisines: ["Healthy", "Salads"],
        avgRating: "4.7",
        deliveryTime: 18,
        costForTwo: 270,
        areaName: "HSR Layout",
        promoted: false
      }
    },
    {
        cardType: "restaurant",
        info: {
          id: "206",
          name: "Wok Express",
          imageUrl: "https://img.freepik.com/free-photo/gourmet-grilled-meat-plate-glowing-with-heat-generated-by-ai_188544-24644.jpg?ga=GA1.1.1106566596.1748115283&semt=ais_hybrid&w=740",
          cuisines: ["Chinese", "Asian"],
          avgRating: "4.3",
          deliveryTime: 28,
          costForTwo: 320,
          areaName: "JP Nagar",
          promoted: true
        }
      },
      {
        cardType: "restaurant",
        info: {
          id: "207",
          name: "Cheesy Cravings",
          imageUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
          cuisines: ["Fast Food", "Snacks"],
          avgRating: "4.1",
          deliveryTime: 26,
          costForTwo: 220,
          areaName: "Whitefield",
          promoted: false
        }
      },
      {
        cardType: "restaurant",
        info: {
          id: "208",
          name: "Biryani Blues",
          imageUrl: "https://img.freepik.com/premium-photo/indian-mutton-biryani-prepared-basmati-rice-served-with-yogurt-dip-moody-background-selective-focus_466689-53059.jpg?ga=GA1.1.1106566596.1748115283&semt=ais_hybrid&w=740",
          cuisines: ["Hyderabadi", "Biryani"],
          avgRating: "4.6",
          deliveryTime: 24,
          costForTwo: 350,
          areaName: "Marathahalli",
          promoted: true
        }
      },
      {
        cardType: "restaurant",
        info: {
          id: "209",
          name: "Sushi Samba",
          imageUrl: "https://img.freepik.com/premium-photo/plate-with-sushi-rolls-gray-surface-japanese-food_185193-14987.jpg?ga=GA1.1.1106566596.1748115283&semt=ais_hybrid&w=740",
          cuisines: ["Japanese", "Sushi"],
          avgRating: "4.4",
          deliveryTime: 35,
          costForTwo: 600,
          areaName: "Jayanagar",
          promoted: false
        }
      },
      {
        cardType: "restaurant",
        info: {
          id: "210",
          name: "Curry Kingdom",
          imageUrl: "https://img.freepik.com/premium-photo/chicken-tikka-masala-with-spicy-curry-meat-served-rustic-ceramic-bowl-popular-indian-dish-concrete-background-top-view_92134-1273.jpg?ga=GA1.1.1106566596.1748115283&semt=ais_hybrid&w=740",
          cuisines: ["North Indian", "Punjabi"],
          avgRating: "4.2",
          deliveryTime: 27,
          costForTwo: 300,
          areaName: "Rajajinagar",
          promoted: false
        }
      }
      
  ]

  


const Body = () => {
    return (
        <div className="body">
            <div className="search-container">
                <input type="text" placeholder="Search for restaurants, dishes, etc." className="search"/>
                <button className="search-btn">Search</button>
            </div>
            <div className="res-container">

                {
                    resList.map((restro) => <RestroCard key={restro.info.id} resData={restro} />)

                }

            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)
