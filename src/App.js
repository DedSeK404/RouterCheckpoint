import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { useState } from "react";
import { FetchAPI } from "./Components/Api";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Home } from "./Home";

function App() {
  const navigate = useNavigate();
  function handleDescription() {
    navigate("/description");
  }

  const navigateHome = useNavigate();
  function handleHome() {
    navigateHome("/");
  }

  const [moviename, setMovieName] = useState("");
  const handleMovieName = (value) => {
    setMovieName(value);
  };

  return (
    <>
      <div style={{ background: "black" }}>
        <Header />

        <Container>
          <Routes>
            <Route
              path="/description"
              element={
                <FetchAPI moviename={moviename} handleHome={handleHome} />
              }
            />

            <Route
              path="/"
              element={
                <Home
                  handleMovieName={handleMovieName}
                  handleDescription={handleDescription}
                />
              }
            ></Route>
          </Routes>
        </Container>

        <Footer />
      </div>
    </>
  );
}

export default App;
