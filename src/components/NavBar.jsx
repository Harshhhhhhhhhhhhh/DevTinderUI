import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import BASE_URL from "../utils/constants";
import { removeUser } from "../utils/userSlice";
import Connections from "./Connections";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogout = async ()=>{
    try{
      await axios.post(BASE_URL + "/logout" , {} , {withCredentialscre:true});
      dispatch(removeUser())
      return navigate("/login");

    }
    catch(err){
      console.log(err.message)

    }
  }



  return (
    <div className="navbar bg-base-500 shadow-sm">
      {/* Left side */}
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl">🧑‍💻DevTinder</Link>
      </div>

      {/* Right side */}
      <div className="navbar-end flex gap-2">
        {user && (<p>Welcome , {user.firstName}</p>)}
        <div className="dropdown dropdown-end">

          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">
            {user && (<div className="w-10 rounded-full ">
              <img
                alt="Tailwind CSS Navbar component"
                src={user.photoUrl} />
            </div>)}
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li><Link to="/connections">Connections</Link></li>
            <li><a onClick={handleLogout}>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>

  )
}
export default NavBar;