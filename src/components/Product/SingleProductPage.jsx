import React, { useContext, useState, useEffect } from "react";
import Rating from '@mui/material/Rating';
import {Button} from 'react-bootstrap'
import {Context} from '../../context/context';
import {useNavigate} from 'react-router-dom';
import { BsCartPlus } from "react-icons/bs";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { addToFavourite, addToCart } from '../../api/api';
import {isAuthenticated} from '../../auth'

export default function SingleProductPage() {

    const states = useContext(Context);
    const { itemDetails, token } = states;
    const [isFav, setIsFav] = useState(false)

    const navigate = useNavigate();

    console.log('ooooo',itemDetails)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding:'10rem'
            }}>
                <img
                    className="d-block w-50 h-1"
                    src= {itemDetails.image}
                    alt="First slide"/>
                <div style={{
                    margin: '0 5rem'
                }}>
                    <br/>
                    <h2 style={{
                        color: 'gold'
                    }}>{itemDetails.title}
                    </h2>

                    <p style={{
                        margin: '2rem 0'
                    }}>

                        {itemDetails.description}
                    </p>
                    <h5
                        className='price'
                        style={{
                        margin: '1rem 0'
                    }}>Price : {itemDetails.price}</h5>
                    <h6
                        className='price'
                        style={{
                        margin: '1rem 0'
                        }}>Color : {itemDetails.color}</h6>
                    <h6
                        className='price'
                        style={{
                        margin: '1rem 0'
                        }}>Quantity : {itemDetails.quantity}</h6>

                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly/>
                    <div style={{
                        margin: '1rem 0'
                    }}>
                        < MdOutlineFavoriteBorder className="icons" onClick={() => {
                            isAuthenticated()?
                                addToFavourite(itemDetails.id, token)
                                :
                                navigate('/signin')
                            }} />
                        <BsCartPlus className="icons" onClick={() => {
                            isAuthenticated()?
                                addToCart(itemDetails.id, token)
                                :
                                navigate('/signin')
                        }} />
                        <br/>
                        <br/>
                        <Button
                            variant="outline-dark"
                            style={{
                            margin: ' 0 1rem '
                            }} onClick={() => {
                            navigate('/')
                        }}>Back</Button>
                    </div>
                </div>
            </div>
        </>
    )
}