import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Todo from "./components/Todo";
function Router()
{   
    return(
<BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
        <Route path="/todo" element={<Todo/>}></Route> 
        <Route path="/signup" element={<Signup/>}></Route> 
        <Route path="/" element={<Home />}></Route>
    </Routes>
</BrowserRouter>


    )

}
export default Router;