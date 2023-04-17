import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Application from "../pages/app";
import Register from "../components/authentication/registration";
import MainPage from "../components/authentication/mainPage";
const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>
    },
    {
        path: '/application',
        element: <Application/>
    },
    {
        path: "/registration",
        element:<Register/>
    },
    {
        path:'/mainPage',
        element:<MainPage/>
    },

])

export default router
