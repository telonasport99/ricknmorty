import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Characters from "./pages/character/Characters.tsx";

const  router = createBrowserRouter([{
    element:<Characters/>,
    path:'/'
}])

export const Router=()=>{
    return <RouterProvider router={router}/>
}