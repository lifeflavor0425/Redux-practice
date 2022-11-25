import "./App.css";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Todos from "./pages/Todos";
import history from "./history";
import { ConnectedRouter } from "connected-react-router";

function App() {
  return (
    <ConnectedRouter history={history}>
      <Route path="/" exact component={Home} />
      <Route path="/todos" exact component={Todos} />
      <Route path="/users" exact component={Users} />
    </ConnectedRouter>
  );
}
export default App;
