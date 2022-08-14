import React from "react";
import { DrawerAppBar } from "./Appbar";
import Card from "react-bootstrap/Card";
import World from "../assets/images/world.jpg";
import "./sample.css";

function welcome() {
  return (
    <div>
      <DrawerAppBar />
      <div className="welcomeimage">
        <Card
          style={{
            width: "80%",
            height: "100%",
            background: "rgba(112, 108, 108, 0.5)",
            boxShadow: "none",
          }}
        >
          <Card.Img src={World} />
          <Card.Body style={{color:"white"}}>
            Emerging technologies are technologies whose development, practical
            applications, or both are still largely unrealized, such that they
            are figuratively emerging into prominence from a background of
            nonexistence or obscurity. These technologies are generally new but
            also include older technologies. Emerging technologies are often
            perceived as capable of changing the status quo. Emerging
            technologies are characterized by radical novelty (in application
            even if not in origins), relatively fast growth, coherence,
            prominent impact, and uncertainty and ambiguity.
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default welcome;
