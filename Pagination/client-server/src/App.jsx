import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0)
  const [posts, setPosts] = useState([]);

  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);
  useEffect(() => {
    fetch(`http://localhost:3434/posts?page=${pageNumber}`)
      .then(response => response.json())
      .then(({ totalPages, posts }) => {
        console.log(totalPages, posts);
        setPosts(posts);
        setNumberOfPages(totalPages)
      })
  }, [pageNumber]);

  const gotoPrevious = () => {
    setPageNumber(Math.max(0,pageNumber - 1));
  }

  const gotoNext = () => {
    setPageNumber(Math.min(numberOfPages - 1,pageNumber + 1));
  }


  
  return (
    <div className="App">
      <h1>Page of: {pageNumber + 1}</h1>
      {posts.map(post => (
        <div className='post' key={post._id}>
          <h4>{post.title}</h4>
          <p>{post.text}</p>
        </div>
      ))}
      <button onClick={gotoPrevious}>previous</button>
      {pages.map((pageIndex) => (
        <button key={pageIndex} onClick={() => setPageNumber(pageIndex)}>{pageIndex + 1}</button>
      ))}
      <button onClick={gotoNext}>next</button>
    </div>
  );
}

export default App;
