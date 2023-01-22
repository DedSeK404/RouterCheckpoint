import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export function FetchAPI({ moviename, handleHome }) {
 

  
  const [container, setContainer] = useState([]);

  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6650a927afmsh7a6c9160328ef25p181861jsnd5c94cd193dd',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${moviename}`, options)
    
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setContainer(data.d);
      
    })
    .catch((err) => console.error(err));

  }, [moviename]);

 
   

  return (
    <div>
      
      {container
        .map((item) => {
         console.log(item.i.imageUrl)
          return (
            <div>
              <Container>
                <Row>
                  <Col className="a1" sm={12}>
                    <p className="T">{item.l}</p>
                    
                  </Col>
                  <button onClick={()=> handleHome()} style={{marginTop:"5%"}} className="btn_add">Home</button>
                </Row>
                <Row>
                  <Col className="b1" sm={6}>
                    
                    <img
                      className="movie_poster"
                      src={item.i.imageUrl}
                      alt="Movie Poster"
                    />
                    
                  </Col>
                  <Col className="c1" sm={6}>
                    <h2>Type :</h2>
                    <p className="mp">{item.qid}</p>
                    <h2>Rank :</h2>
                    <p className="mp">{item.rank}</p>
                    <h2>Actors :</h2>
                    <p className="mp">{item.s}</p>
                    <h2>Year of release :</h2>
                    <p className="mp">{item.y}</p>

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
