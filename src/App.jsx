import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import IceCreamContainer from "./Components/IceCreamContainer";
import HooksIceCreamContainer from "./Components/HooksIceCream";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        {/* <CakeContainer /> */}
        <HooksIceCreamContainer />
        {/* <IceCreamContainer /> */}
      </div>
    </Provider>
  );
};

export default App;
