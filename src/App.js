import React from "react";
import { Route, Switch, BrowserRouter, HashRouter, Redirect, NotFoundRoute } from "react-router-dom";
import './App.css';

const Login = React.lazy(() => import("./Pages/Login"));
const Home = React.lazy(() => import("./Pages/Home"));
const Page404 = React.lazy(() => import("./Pages/Page404"));

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const ProtectedRoute = ({ Component, render, ...props }) => {
  // let history = useHistory();
  // let isAuthenticated = false;
  const time = localStorage.getItem("time");
  const currentDate = new Date();
  if (time && (Math.floor((currentDate - new Date(time)) / 3600) % 24) >= 24) {
    localStorage.removeItem("token");
    localStorage.removeItem("time");
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    console.log(" token expired ", (Math.floor((currentDate - new Date(time)) / 3600) % 24));
  }
  console.log(" token not expired ", (Math.floor((currentDate - new Date(time)) / 3600) % 24));
  const token = localStorage.getItem("token");
  console.log(token);
  if (token) {
    //isAuthenticated = true;
    return <Route {...props} render={render} />;
  } else {
    return <Redirect to="/" />;
  }
};


function App() {
  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route
            exact
            path="/"
            name="Login Page"
            render={(props) => <Login {...props} />}
          />
          <ProtectedRoute
            exact
            path="/home"
            name="Home"
            render={(props) => <Home {...props} />}
          />
          <Route
            exact
            path="/404"
            name="Page 404"
            render={(props) => <Page404 {...props} />}
          />
          <Route render={() => <Redirect to={{ pathname: "/404" }} />} />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
