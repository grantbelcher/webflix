import React from "react";
import { Route, Navigate } from "react-router-dom";

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
            <Navigate
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }
        // if all else fails, return null
        return null;
      }}
    />
  );
}

// one function to protect browse page
