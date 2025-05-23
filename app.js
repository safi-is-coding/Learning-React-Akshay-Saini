const heading = React.createElement(
    "h1", // tag name
    { id: "heading" }, //attributes 
    "Hello World from React" // value
)

console.log(heading); // object


const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement(
            "div",
            { id: "child" },
            [React.createElement("h1", {}, "I am a h1 child"), React.createElement("h2", {}, "I am a h2 child")]
        ),

        React.createElement(
            "div",
            { id: "child2" },
            [React.createElement("h1", {}, "I am a h1 child"), React.createElement("h2", {}, "I am a h2 child")]
        )
    ]
);


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent) // take the object and convert it to html tag 
