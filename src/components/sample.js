import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Image } from "react-bootstrap";
import Secondimage from "../assets/images/2.jpeg";
import Thirdimage from "../assets/images/3.jpeg";
import Fourthimage from "../assets/images/4.jpeg";
import Fifthimage from "../assets/images/5.jpeg";
import Sixthimage from "../assets/images/6.jpeg";
import Seventhimage from "../assets/images/7.jpeg";
import Eighthimage from "../assets/images/8.jpeg";
import Ninthimage from "../assets/images/9.jpg";
import "./cardadjust.css";
import { DrawerAppBar } from "./Appbar";

export default function sample() {
  const backgroundColor = [
    {
      text: "Text2",
      header: "Header2",
      image: Secondimage,
    },
    {
      text: "Text3",
      header: "Header3",
      image: Thirdimage,
    },
    {
      text: "Text4",
      header: "Header4",
      image: Fourthimage,
    },
    {
      text: "Text5",
      header: "Header5",
      image: Fifthimage,
    },
    {
      text: "Text6",
      header: "Header6",
      image: Sixthimage,
    },
    {
      text: "Text7",
      header: "Header7",
      image: Seventhimage,
    },
    {
      text: "Text8",
      header: "Header8",
      image: Eighthimage,
    },
    {
      text: "Text8",
      header: "Header8",
      image: Ninthimage,
    },
  ];

  return (
    <div>
      <DrawerAppBar />
      <Row xs={1} md={4} className="g-4 ms-1 me-2 mt-2">
        {backgroundColor.map((cardData) => (
          <Col>
            <Card className="cardsize">
              <Card.Img
                as={Image}
                variant="top"
                src={cardData.image}
                alt="Card image"
                className="imagecard"
              />
              <Card.Body>
                <Card.Title>{cardData.header} Card Title </Card.Title>
                <Card.Text>{cardData.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
