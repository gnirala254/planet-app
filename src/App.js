import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Planets from "./Planets";
import Favorite from "./Favorite";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="app">
          <div>
            <h1>Planet App</h1>
                      
            <ul className="header">
                          
              <li>
                <NavLink exact to="/">
                  All Planets
                </NavLink>
              </li>
                          
              <li>
                <NavLink to="/favorite">Favorite Planets</NavLink>
              </li>
                    
            </ul>
            <div className="content">
              <Route exact path="/" component={Planets} />
              <Route path="/favorite" component={Favorite} />
            </div>
                    
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
