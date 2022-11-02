import React, { useContext,useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import HomeCard from "../Home/HomeCard";
import { Context } from '../../context/context';

function Search() {

    const states = useContext(Context);
    const {searchData } = states
    console.log("outside",searchData)
useEffect(() => {
window.scrollTo(0, 0)
}, [])
      return (
          <>
          
              <Container fluid='sm' style={{ margin: '8rem 3rem 13px 5rem' }} >
                <h1>Results</h1>
                  <Row xs='4'>
              {searchData.length ? searchData.map((product, idx) => {
                console.log("ddd",searchData)
                          return (
                              <HomeCard product={product} key={idx} />
                          )
                      })
                :
                < h2 style={{margin: '5rem 0 10rem 31rem'}} > No Matching Items</h2>
                }
                
                  {/* </Row>
                  <hr/>
                  <Row xs="4">
                      
                  {products ? products.map((product,idx) => {
                      return (
                        <HomeCard product={product} key={idx} />
                          )
                      }):null} */}
               </Row>
  
              </Container>
          </>
      );
  }
  
  export default Search;
  