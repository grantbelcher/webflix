import React from "react";
import { Route, Redirect } from "react-router-dom";

// one function to check if user is logged in => redirects to browse page
// if user is logged in, redired to loggedInPath, if user is not logged in then render children
export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }
        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }
        // if all else fails, return null
        return null;
      }}
    ></Route>
  );
}

// one function to protect browse page
