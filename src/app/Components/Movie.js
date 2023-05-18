import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./movie.module.css"

export default function Movie(props) {
  return (
    <Card style={{ width: "18rem",background:"#A19799",color:"#F5F3F6" }}>
      <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500"+props.movie.poster_path} />
      <Card.Body>
        <Card.Title>{props.movie.original_title}</Card.Title>
        <div className={styles.test}>
        <Card.Text>{props.movie.overview.substring(0, 99)}</Card.Text>
        <div className="collapse mb-3" id="collapseWidthExample2">
          {props.movie.overview.substring(99)}
        </div>
        </div>
       

        <Button
          variant="secondary"
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample2"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
        >
          Read more
        </Button>
      </Card.Body>
    </Card>
  );
}
