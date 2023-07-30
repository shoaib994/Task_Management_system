import React from "react";
import { UserRoutes } from "./Routes";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PageNotFound from '../components/PageNotFound/PageNotFound'
const DynamicRoutes = ({ role = "enterprise" }) => {
  const navigate = useNavigate();
  var routeComponents = [];

  const user = localStorage.getItem("user");

  if (user) {
    var userType = "user";

    routeComponents = UserRoutes[userType.toLowerCase()].map(
      ({ path, component }, key) => (
        <Route exact path={path} element={component} key={key} />
      )
    );
  } else {
    routeComponents = UserRoutes["Public"].map(({ path, component }, key) => (
      <Route exact path={path} element={component} key={key} />
    ));
  }
  return (
    <Routes>
      {routeComponents}

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default DynamicRoutes;
