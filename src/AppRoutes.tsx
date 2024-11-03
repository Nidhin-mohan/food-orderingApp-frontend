import { Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <>
              <span>HOME page</span>
            </>
          }
        />
        <Route
          path="/user-profile"
          element={
            <>
              <span>User profile</span>
            </>
          }
        />
        <Route
          path="*"
          element={
          <Navigate to={"/"}/>
          }
        />
      </Routes>
    );
} 

export default AppRoutes;