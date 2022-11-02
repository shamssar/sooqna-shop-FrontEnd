import React ,{useEffect} from 'react';
import { Button } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';
import { removeProductByAdmin } from '../../api/api';
import { isAuthenticated } from '../../auth';


import '../Home/Home.css';


function ProductAdminCard({ product }) {
    const { token } = isAuthenticated();

    const navigate = useNavigate();

                    useEffect(() => {
        window.scrollTo(0, 0)
                    }, [])
    
    return (
     

        <ul>
            <li className="booking-card" style={{ backgroundImage: `url(${product.image})`, marginTop: '8rem' }}>
                <div className="book-container">
                    <div className="content">
                
                    </div>
                </div>
                <div className="informations-container">
                    <h2 className="title">{product.title}</h2>
                    <p className="sub-title"><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /></p>
                    <p className="price"><svg className="icon" style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
                    </svg>{product.price} $</p>
                    <div className="more-information">
                        <div style={{ justifyContent: 'space-around' }} className="info-and-date-container">
                      
        
                            <Button variant="danger" onClick={() => { removeProductByAdmin(product.id, token) }}>Delete</Button>
                        </div>
                        <p className="disclaimer">{product.description}</p>
                    </div>
                </div>
            </li>
        </ul>
    );
}

export default ProductAdminCard;