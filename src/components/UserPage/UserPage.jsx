import React, { useEffect } from 'react';
import MyProductLogo from '../../Assests/my-products-removebg-preview (1).png';
import MyOrderLogo from '../../Assests/my-orders-removebg-preview.png';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import CreateItem from '../Product/CreateProductForm';
import '../myProduct/product.css'


export default function UserPage() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Container fluid='sm' style={{ margin: ' 0 7rem' }} >
                <Row xs="2" >
                    <Col style={{marginTop: '1.5rem'}}><img  src={MyProductLogo} onClick={() => { navigate('/myproducts'); }} className='profile' /></Col>
                    <Col><img src={MyOrderLogo} onClick={() => { navigate('/myorders'); }} className='profile'/></Col>
                </Row>
                <Row xs="2" >
                    <Col><CreateItem/></Col>
                    <Col>
                        <Button  style={{
                        backgroundColor: "#003566", color: "white",
                        borderRadius: '25px',
                        fontWeight: '800',
                        height: '3.5rem',
                        width: '10rem',
                        boxShadow: '7px 4px black',
                        marginBottom: '3rem',
                        }}
                        onClick={() => { navigate('/')}}
                        >Shop Now</Button></Col>
                </Row>
            </Container>
        </>
    )
}


