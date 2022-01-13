// You cant output boolean or objects
import "./App.css";

function App() {
  const title = "My new Blog";
  const likes = 50;
  const link = "http://google.com";
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked{likes} times</p>
        <p>{2 + 3} </p>
        <p>{[2, 34, 45, 56]} </p>
        <p>{Math.random() * 2988}</p>
        <a href={link}>google link</a>
      </div>
    </div>
  );
}

export default App;