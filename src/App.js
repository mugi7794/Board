import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/route";
import UserProvider from "./context/context";


function App() {

  return ( 
    <UserProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </UserProvider>
  );
}

export default App;

