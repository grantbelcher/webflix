import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import * as ROUTES from "./constants/routes";

import { Home } from "./pages";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={ROUTES.SIGNUP} element={<Home />} />
      </Routes>
    </Router>
  );
}
