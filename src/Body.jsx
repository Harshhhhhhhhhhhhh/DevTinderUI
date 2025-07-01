import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./footer"

const Body = ()=>{
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        
    )
}

export default Body