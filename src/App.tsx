import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";
import { useParamUser } from "./hooks/useParamUser";
import ParametersPage from "./pages/parameters/ParametersPage";
import NavBar from "./components/NavBar";

function App() {
  const [userId] = useState("123"); //FAKE USER
  const { user, loading, error } = useParamUser(userId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!user) return <p>User not found.</p>;

  return (
    <>
      <div className="m-4">
        <div className="h-25 mb-1">
          <NavBar paramUser={user}></NavBar>
        </div>
        <div className="h-75 ">
          <Router>
            <Routes>
              <Route path="*" element={<Home />} />
              <Route path="/parameters" element={<ParametersPage paramUser={user} />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
