import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 3 },
    {
      title: "Joseph testing out filtering",
      body: "lorem ipsum...",
      author: "joseph",
      id: 4,
    },
  ]);

  const [name, setName] = useState("mario");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  useEffect(() => {
    console.log("use Effect ran");
    console.log(blogs);
  }, [name]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName("joe")}>Change Name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
