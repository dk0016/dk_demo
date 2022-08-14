import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { DrawerAppBar } from "./Appbar";
import "../components/sample.css";

function Login() {
  return (
    <div>
      <DrawerAppBar />
      <div className="loginpage">
        <Card
          style={{
            width: "60%",
            background: "rgba(112, 108, 108, 0.5)",
            boxShadow: "none",
            
          }}
          className="mt-4 ps-2 pe-2 pb-2"
        >
          <Form>
            <div className="loginpage" style={{ color: "white" }}>
              <h1>LOGIN FORM</h1>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ color: "white" }}>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{ color: "white" }}>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMobile">
              <Form.Label style={{ color: "white" }}>Mobile Number</Form.Label>
              <Form.Control type="text" placeholder="Mobile Number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasiccity">
              <Form.Label style={{ color: "white" }}>City</Form.Label>
              <Form.Control type="text" placeholder="City" />
            </Form.Group>
            <div className="loginpage">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default Login;
