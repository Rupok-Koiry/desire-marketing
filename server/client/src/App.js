import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { AuthContext } from "./store/auth-context";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./utils/ProtectedRoute ";
import Seo from "./pages/Services/DigitalMarketing/Seo";
import WebDevelopment from "./pages/Services/DigitalMarketing/WebDevelopment";
import FacebookAdvertisement from "./pages/Services/DigitalMarketing/FacebookAdvertisement";
import LinkBuilding from "./pages/Services/LinkBuilding/LinkBuilding";
import GuestPosting from "./pages/Services/LinkBuilding/GuestPosting";
import NicheEdits from "./pages/Services/LinkBuilding/NicheEdits";
import IgamingLink from "./pages/Services/LinkBuilding/IgamingLink";
import PbnLink from "./pages/Services/LinkBuilding/PbnLink";
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/seo-services" element={<Seo />} />
        <Route
          path="/facebook-advertisement-service"
          element={<FacebookAdvertisement />}
        />
        <Route path="/web-development-services" element={<WebDevelopment />} />
        <Route path="/link-building-service" element={<LinkBuilding />} />
        <Route path="/guest-posting-service" element={<GuestPosting />} />
        <Route path="/niche-edits-service" element={<NicheEdits />} />
        <Route path="/igaming-link-building" element={<IgamingLink />} />
        <Route path="/pbn-link-service" element={<PbnLink />} />

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
      <WhatsAppWidget phoneNumber="+8801917337136" />
    </React.Fragment>
  );
};

export default App;
