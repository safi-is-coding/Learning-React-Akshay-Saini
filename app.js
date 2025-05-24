import React from "react";
import ReactDOM from "react-dom/client"

// React ELement
const heading = React.createElement("h1", {id:"heading"}, "Namaste React")
console.log(heading)

// React ELement
const title =  (
    <h1 id="heading">
        Namaste React from React Element
    </h1>
)

const Title = () => (
    <h1 id="heading">
        Namaste React from Title React Component
    </h1>
)

const number = 1000

// React Component
const HeadingComponent = () => (
    <div className="container">
        <Title/>

        <h2> {title} </h2>

        <h1>Namaste React from Heading React Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent/>)
