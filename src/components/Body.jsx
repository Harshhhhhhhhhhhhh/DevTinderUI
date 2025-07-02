import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/footer"

const Body = ()=>{
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer  ></Footer>
        </div>
        
    )
}

export default Body