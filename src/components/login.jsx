import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import  {addUser} from "../utils/userSlice"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [emailId, setEmailId] = useState("harsh123@gmail.com");
    const [password, setPassword] = useState("Harsh123@");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const handleLogin = async () => {
        try {
            const res = await axios.post("http://localhost:3000/login", {
                emailId,
                password
            },
                { withCredentials: true }
            )
            
            dispatch(addUser(res.data.data));
            return navigate("/");


        }
        catch (err) {
            console.error(err);
        }
    }

    return (

        <div className="loginBox flex justify-center items-center min-h-screen bg-base-200">
            <div className="card w-full max-w-sm bg-primary text-primary-content shadow-xl">
                <div className="card-body p-6">
                    <h2 className="card-title text-2xl">Login</h2>
                    <div className="w-full max-w-xs">
                        <input
                            type="text"
                            placeholder="Enter your registered emailId"
                            className="input input-bordered w-full mb-4 text-base text-black placeholder:text-gray-500 bg-white"
                            value={emailId}
                            onChange={(e) => setEmailId(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full text-base text-black placeholder:text-gray-500 bg-white"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="card-actions justify-end mt-4">
                        <button className="btn btn-secondary w-full" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Login;