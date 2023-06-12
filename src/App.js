import React from "react";
import  ReactDOM  from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import SignUp from "./components/SignUp";
import Cart from "./components/Cart";
import Instamart from "./components/Instamart";
import LogIn from "./components/Login";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />, 
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />, 
            },
            {
                path: "/instamart",
                element: <Instamart />, 
            },
            {
                path: "/cart",
                element: <Cart />, 
            },
            {
                path: "/signup",
                element: <SignUp />, 
            },
            {
                path: "/login",
                element: <LogIn />, 
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu  />, 
            },
        ]
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);