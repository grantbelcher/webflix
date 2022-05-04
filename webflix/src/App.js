import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import * as ROUTES from "./constants/routes";

import { SignUp } from "./pages/sign-up";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
