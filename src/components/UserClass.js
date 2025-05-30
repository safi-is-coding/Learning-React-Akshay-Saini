import React from "react"
import Shimmer from "./Shimmer"

// class based component
class UserClass extends React.Component {

    constructor(props) {
        super(props)
        // console.log(props);

        // creating multiple class based state variables
        this.state = {
            userInfo: {
                name: "default name",
                location: "default loc",
                avatar_url: "http:/dummy-photo.com"
            }
        }
    }

    // Api call in this method
    // This method is called once when the component is mounted
    async componentDidMount() {

        const data = await fetch("https://api.github.com/users/safi-is-coding")
        const user = await data.json()
        // console.log(user);

        this.setState({
            userInfo: user
        })

    }

    render() {

        // const {name, location} = this.props
        const { name, location, avatar_url } = this.state.userInfo

        // const {count} = this.state

        // console.log("card 2 rendered");

        if (name === "default name") {
            return <Shimmer/>;
          }
        
        return (
            <div className="user-card">
                <img src={avatar_url} alt="User Avatar" / >
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
            </div>
        )
    }

}

export default UserClass