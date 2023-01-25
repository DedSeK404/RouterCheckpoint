import { useNavigate, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Description = ({data}) => {
  const navigate = useNavigate();
    const { idmovie } = useParams();
  
    const movie = data.find((el) => el.id == idmovie);

  return (
    <div>
        <Container>
                <Row>
                 
                  <button
                    onClick={() => navigate("/")}
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
                      src={movie.imgUrl}
                      alt="Movie Poster"
                    />
                  </Col>
                  <Col className="c1" sm={6}>
                    <h2>Name :</h2>
                    <p className="mp">{movie.name}</p>
                    <h2>Description :</h2>
                    <p className="mp">{movie.description}</p>
                    
                    <h2>Trailer :</h2>
                    <Col>
                    <iframe
                      width="100%"
                      height="100%"
                      src={movie.trailer}
                      title="Trailer"
                    ></iframe>
                    </Col>
                  </Col>
                </Row>
              </Container>
      
    </div>
  );
};
