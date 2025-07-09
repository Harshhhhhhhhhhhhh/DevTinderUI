import axios from "axios";
import BASE_URL from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestsSlice";

const Requests = () => {
    const dispatch = useDispatch();
    const requests = useSelector((store) => store.request);

    const fetchRequests = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/requests/received", {
                withCredentials: true,
            });
            dispatch(addRequests(res.data.data));
        } catch (err) {
            console.error("Error fetching requests:", err);
        }
    };

    useEffect(() => {
        fetchRequests();
    }, []);

    if (!requests) return null;
    if (requests.length === 0)
        return (
            <h1 className="text-center mt-10 text-xl text-gray-600">
                No Requests Found
            </h1>
        );

    return (
        <div className="p-6">
            <div className="flex justify-center mb-6">
                <h1 className="font-bold text-3xl">Requests</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {requests.map((request) => (
                    <div
                        key={request._id}
                        className="card bg-base-100 shadow-md border border-gray-200"
                    >
                        <figure className="flex justify-center items-center h-48 bg-gray-100">
                            <img
                                src={request.photoUrl || "/default-avatar.png"}
                                alt={`${request.firstName} ${request.lastName}`}
                                className="w-24 h-24 object-cover rounded-full border-2 border-gray-300"
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h3 className="card-title text-lg font-semibold">
                                {request.firstName} {request.lastName}
                            </h3>
                            <p className="text-sm text-gray-600">{request.about}</p>

                            {/* ✅ Buttons added here */}
                            <div className="mt-4 flex gap-4">
                                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                                    Accept
                                </button>
                                <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                                    Reject
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Requests;
