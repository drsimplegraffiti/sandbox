import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Simple Blog</h1>
      <div className="link">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            backgroundColor: "#f1356d",
            borderRadius: "15px",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
