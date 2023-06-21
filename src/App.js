import React, { useContext } from "react";
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
import UserContext from "./utils/userContext";
import { user } from "./constants"
import { Provider } from "react-redux";
import store from "./utils/store";

const AppLayout = () => {
    return (
        <Provider store={store}>
        <UserContext.Provider value={{user:user}}>
            <Header />
            <Outlet />
            <Footer />
        </UserContext.Provider>
        </Provider>
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