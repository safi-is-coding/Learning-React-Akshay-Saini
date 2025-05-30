import { useState, useEffect } from "react";

const User = (props) => {

    // const {name, location} = props

    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [imageUrl, setImageUrl] = useState(null)

    // console.log("count 1 rendered");

    useEffect(() => {
        fetchUser()
    }, [])

    const fetchUser = async () => {
        const data = await fetch("https://api.github.com/users/akshaymarch7")
        const user = await data.json()
        // console.log(user);

        setName(user.name)
        setLocation(user.location)
        setImageUrl(user.avatar_url)
    }

    return (
        <div className="user-card">
            <img src={imageUrl} alt="User Avatar" />
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
        </div>
    )
}

export default User;