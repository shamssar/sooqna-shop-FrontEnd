import React, { useState, useContext, useEffect } from 'react';
import Rating from '@mui/material/Rating';
import {useNavigate} from 'react-router-dom';
import {isAuthenticated} from '../../auth';
import {BsCartPlus} from "react-icons/bs";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { addToFavourite, addToCart, getAllCart } from '../../api/api';
import './HomeCard.css';
import { Context } from '../../context/context';

export default function HomeCard({ product }) {

    const states = useContext(Context);
    const { getItemDetails } = states;
    // const products = states.cartProducts;
    // const [items, setItems] = useState(0)

    const navigate = useNavigate();
    const [isFav,setIsFav]=useState(false)
    const { user, token } = isAuthenticated();
    
//   useEffect(() => {
//       const addCart = async () => {
//           addToCart(product.id, token)
//           let x = await getAllCart(token);
//             console.log('x',x)
//                 setItems(x.length)
//             console.log('items', items);
//         }
//     }, [products])

    return (
        <>
            <ul>
                <li className="booking-card" style={{backgroundImage: `url(${product.image})`}}>
                    <div className="book-container">
                        <div className="content">
                            <button className="btn" onClick={() => {
                                getItemDetails(product.id)
                                navigate('/viewdetails')
                            }}>View Details</button>
                        </div>
                    </div>
                    <div className="informations-container">
                        <h2 className="title">{product.title}</h2>
                        <p className="sub-title"><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly/></p>
                        <p className="price"><svg className="icon" style={{width:'24px',height:'24px'}} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
                        </svg>{product.price} $</p>
                        <div className="more-information">
                                {isAuthenticated() ?
                            <div className="info-and-date-container">
                                    <>
                                        {isFav ?
                                            < MdOutlineFavorite className="icons" onClick={() => {
                                                setIsFav(false)
                                            }} />
                                            :
                                            < MdOutlineFavoriteBorder className="icons" onClick={() => {
                                                addToFavourite(product.id, token)
                                                setIsFav(true)
                                            }} />
                                        }
                                        <BsCartPlus className="icons" onClick={() => addToCart(product.id, token)} />
                                    </>
                            </div>
                                    : <div></div>}
                            <p className="disclaimer">{product.description}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
                }
            