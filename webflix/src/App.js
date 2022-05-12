import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Navigate,
} from "react-router-dom";
import * as ROUTES from "./constants/routes";
import useAuthListener from "./hooks/useAuthListener";
import { IsUserRedirect } from "./helpers/routes";
import { Home, Browse, SignIn, SignUp } from "./pages";

export default function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home />} />
        <Route
          exact
          path={ROUTES.BROWSE}
          element={
            user ? <Browse user={user} /> : <Navigate to={ROUTES.SIGNIN} />
          }
        />
        <Route
          exact
          path={ROUTES.SIGNUP}
          element={user ? <Navigate to={ROUTES.SIGNUP} /> : <SignUp />}
        />
        <Route
          path={ROUTES.SIGNIN}
          element={user ? <Navigate to={ROUTES.BROWSE} /> : <SignIn />}
        />
      </Routes>
    </Router>
  );
}
