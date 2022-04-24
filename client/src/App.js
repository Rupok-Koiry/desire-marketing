import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";
import Blog from "./pages/Blog/Blog";
import GuestPosting from "./pages/GuestPosting/GuestPosting";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { AuthContext } from "./store/auth-context";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./utils/ProtectedRoute ";
const App = () => {
  const { user, setUser, JWT } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/users/me`, {
          headers: {
            Authorization: `Bearer ${JWT}`,
          },
        });
        setUser(response.data.data.data);
      } catch (error) {
        setUser({});
        console.log(error.response.data.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [JWT, setUser]);
  return (
    <React.Fragment>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/service" element={<GuestPosting />} />
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute user={user} loading={loading}>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/login"
            element={user.email ? <Navigate to="/" replace /> : <Login />}
          />
          <Route
            path="/registration"
            element={user.email ? <Navigate to="/" replace /> : <Register />}
          />
        </Routes>
      </main>
    </React.Fragment>
  );
};

export default App;
