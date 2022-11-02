import React from "react";
import MyCartCard from "./myCartCard";
import { Container, Button, Row,Col } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';

function MyCart() {
  const navigate = useNavigate();

  return (
    <>
      <h1 style={{ marginTop: "3rem" }}>My Cart</h1>
      <Container fluid="sm" style={{ margin: "2rem" }}>
        <Row xs="4">
          <Col><MyCartCard /></Col>
          <Col><MyCartCard /></Col>
          <Col><MyCartCard /></Col>
          <Col><MyCartCard /></Col>
        </Row>
      </Container>
      <Button style={{ marginBottom: "2rem", width: "11rem", height: "3.5rem", fontSize: "1.5rem" }} variant="dark" onClick={()=>{navigate('/orderform')}}>Create Order</Button>
      <h2>Total Price</h2>
    </>
  );
}

export default MyCart;
