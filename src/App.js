import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import Sidebar from "./components/Sidebar/Sidebar";
import ContentArea from "./components/ContentArea"
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="flex">
        <Router>
          <Sidebar />
          <ContentArea />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
