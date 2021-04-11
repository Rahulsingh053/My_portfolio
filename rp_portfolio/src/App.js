import "./App.css";
import Rahul from "./rahul";
import Vivek from "./vivek";
import Deepak from "./deepak";
import Vaibhav from "./vaibhav";

function App() {
  const appName = process.env.REACT_APP_NAME;
  console.log({ appName });
  return (
    <div className="App">
      {appName === "rahul" && <Rahul></Rahul>}
      {appName === "deepak" && <Deepak></Deepak>}
      {appName === "vivek" && <Vivek></Vivek>}
      {appName === "vaibhav" && <Vaibhav></Vaibhav>}
    </div>
  );
}

export default App;
