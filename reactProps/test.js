const Tweet = (props) => {
    return ( 
        <div>
            <h1>{props.name}</h1>
            <p>{props.message}</p>
        </div>
     );
}
export default Tweet;


// Imported Here-------------
const App = () => {
  return (
    <>
      <Tweet name="Tom" message='hi'/>
      <Tweet name="John" message='hi'/>
      <Tweet name="Jane" message='hi'/>
    </>
  );
};

export default App;



// Destructuring
const Tweet = ({name, message}) => {
    return ( 
        <div>
            <h1>{name}</h1>
            <p>{message}</p>
        </div>
     );
}
export default Tweet;



