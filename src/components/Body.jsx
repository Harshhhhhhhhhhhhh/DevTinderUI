import { Outlet, useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/footer"
import BASE_URL from "../utils/constants"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "../utils/userSlice"
import { useEffect } from "react"

const Body =  ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((store)=>store.user);

    const fetchUser = async()=>{
        if(userData)return;

        try{
            const res = await axios.get(BASE_URL+"/profile/view" ,{withCredentials:true});
            dispatch(addUser(res.data));
            
        }
        catch(err){
            if(err.response?.status == 401){
                navigate("/login")
                
            }
        }
        
    

    }


        
    useEffect(()=>{
        fetchUser();
    },[])



    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer  ></Footer>
        </div>
        
    )
}

export default Body