import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./Home";
import { Description } from "./Components/Description";
import { data } from "./Components/data";
import { Add } from "./Components/Add";
import { useState } from "react";

function App() {
  const navigate = useNavigate();
  function handleDescription() {
    navigate("/description");
  }

  const navigateHome = useNavigate();
  function handleHome() {
    navigateHome("/");
  }
  const [list, setList] = useState(data);
  const handelAdd = (newFilm) => {
    setList([...list, newFilm]);
  };

  return (
    <>
      <div style={{ background: "black" }}>
        <Header />

        <Container>
          <Routes>
            <Route
              path="/description/:idmovie"
              element={<Description data={data} handleHome={handleHome} />}
            />

<Route
              path="/add"
              element={<Add  handelAdd={ handelAdd}/>}
            />

            <Route
              path="/"
              element={<Home handleDescription={handleDescription} />}
            ></Route>
          </Routes>
        </Container>

        <Footer />
      </div>
    </>
  );
}

export default App;
