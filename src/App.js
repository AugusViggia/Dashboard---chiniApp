import "./App.scss";
import SignIn from "./components/Auth/SignIn/SignIn";
import SignUp from "./components/Auth/SignUp/SignUp";
import AuthDetails from "./components/Auth/AuthDetails/AuthDetails";

function App() {
  return (
    <div className="App">
      <SignIn />
      <SignUp />
      <AuthDetails/>
    </div>
  );
};

export default App;
