import Counter from "./components/useState";
import SetName from "./components/useState2";
import Reducer from "./components/useReducer";
import ReducerTutorial from "./components/useReducer2";
import EffectTut from "./components/useEffect";
import UseRefHooks from "./components/useRef";
import LayoutEffect from "./components/useLayoutEffect";
import MemoTutorial from "./components/useMemo";
import PropTut from "./components/propTut";
import ClockDate from "./components/propTuts2";
import ComponentDidMountTuts from "./components/componentDidMount";
import FormHandler from "./components/formHandler"
import Greetings from "./components/conditionalRendering";
import Mailbox from "./components/inLineIf";
import TernaryOperator from "./components/ternary";
import Mapping from "./components/mappingComponent";
import Blog from "./components/blog";

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
const numbers = [1, 2, 3, 4, 5];
const messages = ['React', 'Re: React', 'Re:Re: React'];
function App() {
  return (
    <div className="App">
    {/* <TernaryOperator isLoggedIn={false}/> */}
    {/* <Mapping numbers={numbers}/> */}
    <Blog posts={posts} />
     {/* <Mailbox unreadMessages={messages} /> */}
     {/* <Greetings isLoggedIn={false} /> */}
    {/* <FormHandler /> */}
    {/* <ComponentDidMountTuts /> */}
      {/* <ClockDate date={new Date()}/>
<PropTut name="Booker" />
<PropTut name="Chris" />
<PropTut name="Joseph" /> */}

      {/* <MemoTutorial />
    <LayoutEffect />
    <UseRefHooks />
      <EffectTut />
      <ReducerTutorial />
      <Counter />
      <SetName />
      <Reducer /> */}
    </div>
  );
}

export default App;
