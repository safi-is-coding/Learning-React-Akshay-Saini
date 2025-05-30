import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="about">
            <h1>About Us</h1>

            <div className="user-cards-container">
                <User name="Safi Maz" location="Jamshedpur" />
                <UserClass name="Maz Safi" location="Ranchi" />

            </div>

        </div>
    );
}

export default About;