import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact"; 
import Error from "./components/Error"; 
import RestroMenu from "./components/RestroMenu";
// import Grocery from "./components/Grocery";

// chunking
// dynamic bundling
// lazy loading
// on demand loading
const Grocery = lazy(() => import("./components/Grocery"))



const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>} ><Grocery/></Suspense> 
            },
            {
                path:"/restaurant/:resId",
                element: <RestroMenu />
            }
        ],
        errorElement: <Error/>
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
