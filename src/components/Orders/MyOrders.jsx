import React, { useEffect } from 'react'
import OneOrder from './OneOrder'

export default function MyOrders() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <OneOrder/>
    )
}
