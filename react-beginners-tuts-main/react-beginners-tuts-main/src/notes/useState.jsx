import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("miracle");
  const [age, setAge] = useState(0);

  const handleClick = () => {
    setName("james");
    setAge(90);
  };

  return (
    <div>
      <h2>Home Page</h2>
      <p>{name}</p>
      <p>{age}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
