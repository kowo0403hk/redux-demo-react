import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import NewCakeContainer from "./Components/NewCakeContainer";
import NewIceCreamContainer from "./Components/NewIceCreamContainer";
import UserContainer from "./Components/UserContainer";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <NewCakeContainer />
        <NewIceCreamContainer />
        <UserContainer />
      </div>
    </Provider>
  );
};

export default App;
