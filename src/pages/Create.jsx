import { useState } from "react";
import { NavLink, useNavigate } from "react-router";

function Create() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        let add = {title: title, content: content};
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(add);
        localStorage.setItem("users", JSON.stringify(users));
        console.log(users);
        navigate("/");
    }

    return (
        <div className="min-vh-100 d-flex align-items-center py-5" style={{ backgroundColor: "#eef1f5" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-7">
                        <div className="card border-0 shadow-lg rounded-4">
                            <div className="card-body p-4 p-md-5">

                                {/* Heading */}
                                <div className="text-center mb-4">
                                    <div className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"                         
                                        style={{width: "65px",height: "65px",backgroundColor: "#212529",color: "white",fontSize: "28px"}}>
                                        ✍️
                                    </div>
                                    <h1 className="fw-bold">Create New Blog </h1>
                                    <p className="text-muted">Write something interesting and share your thoughts</p>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label className="form-label fw-semibold">Blog Title</label>                                                                                 
                                        <input type="text" className="form-control form-control-lg" placeholder="Enter your blog title"
                                            value={title} onChange={(e) => setTitle(e.target.value)} required />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label fw-semibold">Blog Content</label>
                                        <textarea className="form-control" rows="8" placeholder="Write your blog content here..."
                                            value={content} onChange={(e) => setContent(e.target.value)} required ></textarea>
                                    </div>
                                    <button type="submit"  className="btn btn-dark btn-lg w-100" > Publish Blog </button>
                                </form>
                                <div className="text-center mt-4">
                                    <NavLink to="/" className="text-decoration-none text-muted">← Back to Blogs 
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

export default Create;