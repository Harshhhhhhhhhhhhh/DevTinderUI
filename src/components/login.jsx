import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [isLoginForm, setLoginForm] = useState(true); // Default = Login mode

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Clear input fields on mount
    setEmailId("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setError("");
  }, []);

  const handleSignIn = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signUp",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      return navigate("/profile");
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong");
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      window.location.href = "/";
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong");

    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginForm) {
      handleLogin();
    } else {
      handleSignIn();
    }
  };

  return (
    <div className="loginBox flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-full max-w-sm bg-primary text-primary-content shadow-xl">
        <div className="card-body p-6">
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            className="w-full max-w-xs space-y-3"
          >
            <h2 className="card-title text-2xl text-center mb-4">
              {isLoginForm ? "Login" : "Sign Up"}
            </h2>

            {!isLoginForm && (
              <>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="input input-bordered w-full text-base text-black placeholder:text-gray-500 bg-white"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  autoComplete="off"
                />
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="input input-bordered w-full text-base text-black placeholder:text-gray-500 bg-white"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  autoComplete="off"
                />
              </>
            )}

            <input
              type="email"
              placeholder="Enter your registered email"
              className="input input-bordered w-full text-base text-black placeholder:text-gray-500 bg-white"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              autoComplete="username"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full text-base text-black placeholder:text-gray-500 bg-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete={isLoginForm ? "current-password" : "new-password"}
            />

            <p className="text-red-500 mt-2">{error}</p>

            <div className="card-actions mt-4 flex flex-col gap-2">
              <button type="submit" className="btn btn-secondary w-full">
                {isLoginForm ? "Login" : "Sign Up"}
              </button>
              <button
                type="button"
                className="btn btn-outline w-full"
                onClick={() => setLoginForm(!isLoginForm)}
              >
                {isLoginForm
                  ? "Don't have an account? Sign Up"
                  : "Already have an account? Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
