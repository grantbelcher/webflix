import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import * as ROUTES from "./constants/routes";

import { Home, Browse, SignIn, SignUp } from "./pages";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home />} />
        <Route exact path={ROUTES.BROWSE} element={<Browse />} />
        <Route exact path={ROUTES.SIGNUP} element={<SignUp />} />
        <Route exact path={ROUTES.SIGNIN} element={<SignIn />} />
      </Routes>
    </Router>
  );
}
