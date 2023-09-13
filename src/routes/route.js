import { createBrowserRouter } from "react-router-dom";
import BoardPage from "../page/board/index";

const router = createBrowserRouter([
    {
        path: "/",
        element : <BoardPage/>,
    },
    // {
    //     path: 
    //     element: 
    // }
])

export default router;