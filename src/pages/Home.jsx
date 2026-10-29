import { NavLink } from "react-router";
import { useState } from "react";

function Home() {

    const [users, setUsers] = useState(
        JSON.parse(localStorage.getItem("users")) || []
    );

    function handleDelete(index) {
        let newUser = users.filter((add, i) => i !== index);
        localStorage.setItem("users", JSON.stringify(newUser));
        setUsers(newUser);
    }

    return (
        <div className="min-vh-100 bg-light">
            {/* Header */}
            <div className="bg-dark text-white py-4 shadow">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h1 className="fw-bold mb-1">My Blog</h1>
                            <p className="mb-0 text-secondary">Share your thoughts with the world</p>                                                         
                        </div>
                        <NavLink to="/create">
                            <button className="btn btn-light fw-semibold px-4">+ Create Blog</button>                                                          
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* Blog Section */}
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Latest Blogs</h2>
                    <p className="text-muted">
                        Read interesting posts and discover new ideas
                    </p>
                </div>
                {users.length === 0 ? (
                    <div className="text-center bg-white rounded-4 shadow-sm p-5">
                        <h3 className="text-muted">No blogs available</h3>
                        <p className="text-muted">Create your first blog and start writing!</p>                                                  
                        <NavLink to="/create">
                            <button className="btn btn-dark px-4">Create Your First Blog</button>                                                        
                        </NavLink>
                    </div>
                ) : (
                    <div className="row g-4">
                        {users.map((user, index) => (
                            <div className="col-md-6 col-lg-4" key={index}>
                                <div className="card h-100 border-0 shadow-sm rounded-4">
                                    <div className="card-body p-4 d-flex flex-column">
                                        <div className="mb-3">
                                            <span className="badge bg-secondary">Blog #{index + 1}</span>                                                                                         
                                        </div>
                                        <h3 className="card-title fw-bold">{user.title}</h3>                                                                                  
                                        <p className="card-text text-muted mt-2 flex-grow-1">{user.content}</p>                                                                                  
                                        <div className="d-flex gap-2 mt-3">
                                            <NavLink to={`/read/${index}`} className="flex-grow-1">                                                                                                                                         
                                                <button className="btn btn-dark w-100">Read More</button>                                                                                                
                                            </NavLink>
                                            <button className="btn btn-outline-danger" onClick={() => handleDelete(index)}>Delete</button>                                                                                                                                                                                                                                
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home;