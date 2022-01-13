import { useState } from "react";
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
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's Blogs"
      />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "yoshi")}
        title="Yoshi's Blogs"
      />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "joseph")}
        title="Joseph's Blogs"
      />
    </div>
  );
};

export default Home;
