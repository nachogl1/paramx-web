import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { useState } from "react";
import { useFetchParamUser } from "./hooks/useFetchParamUser";
import ParametersPage from "./pages/parameters/ParametersPage";
import NavBar from "./components/shared/NavBar";
import { ToastContainer } from "react-toastify";


const VITE_MOCK_USER_ID =import.meta.env.VITE_MOCK_USER_ID;

function App() {
  const [userId] = useState(VITE_MOCK_USER_ID); //todo:FAKE USER
  const { user, loading, error } = useFetchParamUser(userId);

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
              <Route
                path="/parameters"
                element={<ParametersPage paramUser={user} />}
              />
            </Routes>
          </Router>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default App;
