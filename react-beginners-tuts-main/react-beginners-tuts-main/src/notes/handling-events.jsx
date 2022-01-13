const Home = () => {
  const handleClick = (e) => {
    console.log("hello there", e.target);
  };

  const handleClickAgain = (name, e) => {
    console.log("hello " + name, e.target);
  };
  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={(e) => {
          handleClickAgain("mario", e);
        }}
      >
        Click Again
      </button>
    </div>
  );
};

export default Home;
