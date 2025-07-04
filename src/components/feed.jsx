import axios from "axios"
import BASE_URL from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import FeedCard from "./feedCard"
import { addFeed } from "../utils/feedSlice";

const Feed = ()=>{
    const [error,setError]=useState("");
    const dispatch = useDispatch();
    const feed = useSelector((store)=>store.feed)

    const getFeed=async()=>{
        
        try{
            if(feed)return;
            const res =await axios.get(BASE_URL+"/user/feed",{withCredentials:true});
            dispatch(addFeed(res.data)); 
            

        }
        catch(err){
            setError(err?.response?.data || "Something went wrong");

        }

    }
    useEffect(()=>{
        getFeed()
    },[])
        
    return (
        feed&&(<div><FeedCard user={feed[0]}></FeedCard></div>)
    )

}

export default Feed