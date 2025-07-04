const FeedCard = ({user})=>{
    const {firstName,lastName,age,gender,photoUrl,about}=user
    
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
                    <button className="btn btn-secondary">Interested</button>
                    <button className="btn btn-primary">Ignore</button>
                </div>
            </div>
        </div>
        </div>
    )
}
export default FeedCard