import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Add } from "./Components/Add";
import { data } from "./Components/data";
import { MovieList } from "./Components/MovieList";
import { useState } from "react";
import { Search } from "./Components/Search";
import { Route, Routes } from "react-router-dom";



  

export const Home = ({handleMovieName,handleDescription}) => {

    const [list, setList] = useState(data);
  const handelAdd = (newFilm) => {
    setList([...list, newFilm]);
  };
  const [search, setSearch] = useState("");
  const handelSName = (value) => {
    setSearch(value);
  };

  const [searchRate, setSearchRate] = useState(0);
  const handelRate = (value) => {
    setSearchRate(value);
  };


    
    return(
        <div>
                <Row>
                  <Col className="c" sm={12}>
                    <Search handelSName={handelSName} handelRate={handelRate} />
                  </Col>
                </Row>
                <Row>
                  <Col
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      padding: "20px",
                      gap: "10px",
                    }}
                    className="a"
                    sm={12}
                  >
                    <MovieList
                      data={list}
                      search={search}
                      searchRate={searchRate}
                      handleMovieName={handleMovieName}
                      handleDescription={handleDescription}

                    />
                  </Col>
                  
                </Row>
              </div>
    )
}