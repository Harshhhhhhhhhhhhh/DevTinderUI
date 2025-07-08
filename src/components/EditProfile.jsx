import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../utils/constants";
import { addUser } from "../utils/userSlice";
import FeedCard from "./feedCard";

const EditProfile = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl || "");
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "");
  const [about, setAbout] = useState(user.about || "");
  const [error, setError] = useState("");

  const saveProfile = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photoUrl,
          age,
          gender,
          about,
        },
        { withCredentials: true }
      );

      dispatch(addUser(res.data.data));
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col md:flex-row justify-center items-center gap-6 p-6">
      {/* Edit Profile Card */}
      <div className="card w-full max-w-sm bg-primary text-primary-content shadow-xl">
        <div className="card-body p-6">
          <h2 className="card-title text-2xl">Edit Profile</h2>
          <div className="w-full max-w-xs">
            <input
              type="text"
              placeholder="Enter your First name"
              className="input input-bordered w-full mb-4 text-base text-black placeholder:text-gray-400 bg-white"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter your Last name"
              className="input input-bordered w-full mb-4 text-base text-black placeholder:text-gray-400 bg-white"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter your age"
              className="input input-bordered w-full mb-4 text-base text-black placeholder:text-gray-400 bg-white"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter your gender"
              className="input input-bordered w-full mb-4 text-base text-black placeholder:text-gray-400 bg-white"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />

            <textarea
              placeholder="Enter about yourself"
              className="textarea textarea-bordered w-full mb-4 text-base text-black placeholder:text-gray-400 bg-white"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            ></textarea>

            <input
              type="text"
              placeholder="Enter your photoUrl"
              className="input input-bordered w-full mb-4 text-base text-black placeholder:text-gray-400 bg-white"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </div>

          <div className="card-actions justify-end mt-4">
            <button 
            className="btn btn-secondary w-full"
            onClick={saveProfile}>
            Submit</button>
          </div>
        </div>
      </div>

      {/* FeedCard beside EditProfile */}
      <FeedCard user={{ firstName, lastName, photoUrl, age, gender, about }} />
    </div>
  );
};

export default EditProfile;
