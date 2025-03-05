import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const paramUser = {
      id: 1,
      firstName: "John",
      secondName: "Doe",
      email: "johndoe@example.com",

      parameters: [
        {
          id: 101,
          date: "2024-03-05",
          name: "Height",
          valueParameter: "180cm",
          paramUser: {
            id: 1,
            firstName: "John",
            secondName: "Doe",
            email: "johndoe@example.com",
          },
        },
        {
          id: 102,
          date: "2024-03-04",
          name: "Weight",
          valueParameter: "75kg",
          paramUser: {
            id: 1,
            firstName: "John",
            secondName: "Doe",
            email: "johndoe@example.com",
          },
        },
        {
          id: 103,
          date: "2024-03-03",
          name: "Blood Type",
          valueParameter: "O+",
          paramUser: {
            id: 1,
            firstName: "John",
            secondName: "Doe",
            email: "johndoe@example.com",
          },
        },
      ],
    };

    localStorage.setItem("paramUser", JSON.stringify(paramUser));
    console.log("ParamUser stored in localStorage!");
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
