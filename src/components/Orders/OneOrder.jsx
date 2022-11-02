import React, {  useContext } from 'react';
import { MDBListGroup, MDBListGroupItem, MDBBadge, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { confirmOrder, deleteOneOrder, reciveOrder } from '../../api/api'
import { Context } from '../../context/context';
import Hr from './Hr'

export default function OneOrder() {

  const states = useContext(Context);
  const { token, orders} = states
  // console.log(orderCollection)

  const status = (state) => {
    if (state === 'submitted') return 'info';
    if (state === 'confirmed') return 'warning';
    if (state === 'indelivery') return 'danger';
    if (state === 'recived') return 'success';
  }

  return (
    <MDBListGroup style={{ minWidth: '22rem', margin: '7rem 0', alignItems: 'center', paddingBottom: '28rem' }} light>
          <h1>My Orders</h1>
      <MDBListGroupItem style={{ backgroundColor: '#b7d3f2', borderRadius: '15px' }}  className='d-flex justify-content-between align-items-center w-50 mx-5 my-3'>
        <h5 >Order ID </h5>
        <h5 >Status</h5>
        <h5 style={{ marginRight: '5rem' }}>Actions</h5>
      </MDBListGroupItem>

      {orders? orders.map((o, idx) => {

         if ( o.status === 'submitted' ){
           return (
             <MDBListGroupItem style={{ backgroundColor: '#f7f9f9', borderRadius: '15px' }} className='d-flex justify-content-between align-items-center w-50 mx-5 my-3' >
               <div>
                 <div className='fw-bold'>Order #{o.id}</div>
                 <div className='text-muted'> {o.date}</div>
                 <div className='text-muted' style={{ inlineSize: '193px' }}>To {o.adress}</div>
               </div>
               <MDBBadge pill light color={status(o.status)}>
                 {o.status}
               </MDBBadge>
               <div style={{ display: 'flex' }}>
                   <button size='sm' className='m-1' style={{
                   color:'white', backgroundColor: 'rgb(59, 89, 152)',
                   fontWeight: '600', borderRadius: '15px', marginRight: '-11rem', borderColor: 'rgb(59, 89, 152)'
                   }} href='#' onClick={() => { deleteOneOrder(o.id, token) }}>
                     cancel
                   </button>
                 <button type="button" className="btn btn-primary" style={{
                     backgroundColor: 'rgb(59, 89, 152)',
                     fontWeight: '600', borderRadius: '15px'
                   }} href='#' onClick={() => { confirmOrder(token) }}>
                     Confirm
                   </button>
               </div>

             </MDBListGroupItem>
          )
         }
          

      })
        : null}
      
      {/* <hr/> */}
      {orders? orders.map((o, idx) => {

         if ( o.status === 'confirmed' ){
           return (
             <MDBListGroupItem style={{ backgroundColor: '#f7f9f9', borderRadius: '15px' }} className='d-flex justify-content-between align-items-center w-50 mx-5 my-3' >
               <div>
                 <div className='fw-bold'>Order #{o.id}</div>
                 <div className='text-muted'> {o.date}</div>
                 <div className='text-muted' style={{ inlineSize: '193px' }}>To {o.adress}</div>
               </div>
               <MDBBadge pill light color={status(o.status)} style={{    marginLeft: '-5.5rem', }}>
                 {o.status}
               </MDBBadge>
               <button size='sm' className='m-1' style={{
                 backgroundColor: 'rgb(59, 89, 152)',
                 fontWeight: '600', borderRadius: '15px', marginRight: '-11rem', color: 'white', borderColor: 'rgb(59, 89, 152)'
               }} href='#' onClick={() => { deleteOneOrder(o.id, token) }}>
                 cancel
               </button>
             </MDBListGroupItem>
          )
         }
          

      })
        : null}
      {orders? orders.map((o, idx) => {

         if ( o.status === 'indelivery' ){
           return (
             <MDBListGroupItem style={{ backgroundColor: '#f7f9f9', borderRadius: '15px' }} className='d-flex justify-content-between align-items-center w-50 mx-5 my-3' >
               <div>
                 <div className='fw-bold'>Order #{o.id}</div>
                 <div className='text-muted'> {o.date}</div>
                 <div className='text-muted' style={{ inlineSize: '193px' }}>To {o.adress}</div>
               </div>
               <MDBBadge style={{marginLeft: '-4rem'}} pill light color={status(o.status)}>
                 {o.status}
               </MDBBadge>
                       <button type="button" class="btn btn-primary" size='sm' style={{
                         backgroundColor: 'rgb(59, 89, 152)', color: 'white',
                         fontWeight: '600', borderRadius: '15px'
                       }} href='#' onClick={() => { reciveOrder(token) }}>
                         Recived
                       </button>
             </MDBListGroupItem>
          )
         }
          

      })
        : null}
      {orders? orders.map((o, idx) => {

        if (o.status === 'recived' ){
           return (
             <MDBListGroupItem style={{ backgroundColor: '#f7f9f9', borderRadius: '15px' }} className='d-flex justify-content-between align-items-center w-50 mx-5 my-3' >
               <div>
                 <div className='fw-bold'>Order #{o.id}</div>
                 <div className='text-muted'> {o.date}</div>
                 <div className='text-muted' style={{ inlineSize: '193px' }}>To {o.adress}</div>
               </div>
               <MDBBadge pill light color={status(o.status)}>
                 {o.status}
               </MDBBadge>
             </MDBListGroupItem>
          )
         }
          

      })
        : null}
      
    </MDBListGroup>
  );
}