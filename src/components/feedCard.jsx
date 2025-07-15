import axios from "axios"
import BASE_URL from "../utils/constants"
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";

const FeedCard = ({user})=>{
    if (!user) return null;
    const {_id,firstName,lastName,age,gender,photoUrl,about}=user;
    const dispatch = useDispatch();

    const handleSendRequest = async(status,userId)=>{
        try{

            const res = await axios.post(BASE_URL + "/request/send/" + status + "/" + userId , {},{withCredentials:true});
            dispatch(removeFeed(userId));

        }
        catch(err){

        }
    }
    
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card bg-base-300 w-96 shadow-sm">
            <figure>
                <img
                    src={photoUrl}
                    alt="Photo" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName} {lastName}</h2>
                {age && gender&&<p>{gender + age}</p>}
                <p>{about}</p>
                <div className="card-actions justify-center my-4">
                    <button className="btn btn-secondary" onClick={()=>handleSendRequest("interested",_id)}>Interested</button>
                    <button className="btn btn-primary" onClick={()=>handleSendRequest("ignored",_id)}>Ignore</button>
                </div>
            </div>
        </div>
        </div>
    )
}
export default FeedCard