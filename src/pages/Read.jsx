import { useParams, NavLink } from "react-router";

function Read() {
    let { id } = useParams();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users[id];

    return (
        <div className="min-vh-100 py-5" style={{ backgroundColor: "#eef1f5" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card border-0 shadow-lg rounded-4">
                            <div className="card-body p-4 p-md-5">

                                {/* Blog Header */}
                                <div className="mb-4">
                                    <span className="badge bg-dark mb-3">Blog #{Number(id) + 1}</span>
                                    <h1 className="fw-bold display-6">{user?.title}</h1>
                                </div>
                                <hr />
                                {/* Blog Content */}
                                <div className="mt-4">
                                    <p className="text-secondary"                                      
                                        style={{fontSize: "18px",lineHeight: "1.8",whiteSpace: "pre-wrap"}}>
                                        {user?.content}
                                    </p>
                                </div>

                                {/* Back Button */}
                                <div className="mt-5">

                                    <NavLink to="/"><button className="btn btn-dark px-4">← Back to Blogs</button>    
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Read;