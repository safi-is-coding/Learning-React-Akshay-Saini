import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError()
    console.error(err);
    return (
        <div className="error-container">
            <h1>Oops!</h1>
            <h2>Something went wrong.</h2>
            <p>Please try again later.</p>
            <p>Error: {err.status} - {err.statusText}</p>
        </div>
    );
}

export default Error;