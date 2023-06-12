import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Error404 from "../Error404/Error404";
import { useState } from "react";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const currentPage = useLocation();
  return (
    <>
      <Switch>
        <Route path="/signup">
          <Register currentPage={currentPage}/>
        </Route>
        <Route path="/signin">
          <Login currentPage={currentPage}/>
        </Route>
        <Route path="/profile">
          <Profile currentPage={currentPage}/>
        </Route>
        <Route path="/saved-movies">
          <SavedMovies currentPage={currentPage}/>
        </Route>
        <Route path="/movies">
          <Movies currentPage={currentPage}/>
        </Route>
        <Route exact path="/">
          <Main currentPage={currentPage} isAuthorized={isAuthorized}/>
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </>
  );
}

export default App;
