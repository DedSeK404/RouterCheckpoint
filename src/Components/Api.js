import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function FetchAPI({ moviename, handleHome }) {
  const [container, setContainer] = useState([]);

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${moviename}&apikey=e6a7a62c`;
    const response = await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((Search) => {
        setContainer(Search.Search);
      });
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div>
      {container
        .map((item) => {
          return (
            <div>
              <Container>
                <Row>
                  <Col className="a1" sm={12}>
                    <p className="T">{item.Title}</p>
                  </Col>
                  <button
                    onClick={() => handleHome()}
                    style={{ marginTop: "5%" }}
                    className="btn_add"
                  >
                    Home
                  </button>
                </Row>
                <Row>
                  <Col className="b1" sm={6}>
                    <img
                      className="movie_poster"
                      src={item.Poster}
                      alt="Movie Poster"
                    />
                  </Col>
                  <Col className="c1" sm={6}>
                    <h2>Type :</h2>
                    <p className="mp">{item.Type}</p>
                    <h2>Imdb ID :</h2>
                    <p className="mp">{item.imdbID}</p>
                    <h2>Year of release :</h2>
                    <p className="mp">{item.Year}</p>

                    <iframe
                      width="480"
                      height="300"
                      src="https://www.youtube.com/embed/zAGVQLHvwOY"
                      title="Trailer"
                    ></iframe>
                  </Col>
                </Row>
              </Container>
            </div>
          );
        })
        .shift()}
    </div>
  );
}
