import axios from "axios"
import BASE_URL from "../utils/constants"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addConnections } from "../utils/connectionSlice"





const Connections = () => {
    const dispatch = useDispatch()
    const connections = useSelector((store) => store.connection)
    const fetchConnections = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/connections", { withCredentials: true })
            dispatch(addConnections(res.data?.data))


        }
        catch (err) {

        }
    }

    useEffect(() => {
        fetchConnections()
    }, [])

    if (!connections) return;
    if (connections.length == 0) return <h1>No Connection Found</h1>
    return (
        <div className="p-6">
            <div className="flex justify-center mb-6">
                <h1 className="font-bold text-3xl">Connections</h1>
            </div>

            {connections.length === 0 ? (
                <p className="text-center text-gray-500">You don't have any connections yet.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {connections.map((connection) => (
                        <div
                            key={connection._id}
                            className="card bg-base-100 shadow-md border border-gray-200"
                        >
                            <figure>
                                <img
                                    src={connection.photoUrl}
                                    alt={`${connection.firstName} ${connection.lastName}`}
                                    className="w-full h-48 overflow-hidden rounded-t-lg"
                                />
                            </figure>
                            <div className="card-body">
                                <h3 className="card-title text-lg font-semibold">
                                    {connection.firstName} {connection.lastName}
                                </h3>
                                <p className="text-sm text-gray-600">{connection.about}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );


}

export default Connections