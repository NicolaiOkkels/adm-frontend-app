import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h3 className="d-flex justify-content-center m-3">
          My Adminboard
        </h3>

        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/wine">
                Wine
              </NavLink>
            </li>
            <li className="nav-item m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/user">
                User
              </NavLink>
            </li>
          </ul>
        </nav>

        <switch>
          <Route path='/Wine' component={Wine}></Route>
          <Route path='/User' component={User}></Route>
        </switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
