const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Simple Blog</h1>
      <div className="link">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            backgroundColor: "#f1356d",
            borderRadius: "15px",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
