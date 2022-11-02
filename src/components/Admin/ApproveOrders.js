import React, {  useContext,useEffect } from 'react';
import { MDBListGroup, MDBListGroupItem, MDBBadge , MDBBtn} from 'mdb-react-ui-kit';
import {  approveOrders,deleteOneOrder } from '../../api/api'
import { Context } from '../../context/context';

export default function SubmitOrder() {

    const states = useContext(Context);
    const { token,ordersToApprove } = states
 
                    useEffect(() => {
        window.scrollTo(0, 0)
                    }, []);
  
  return (
    <MDBListGroup style={{ minWidth: '22rem', alignItems: 'center' ,marginTop: '7rem',
      paddingBottom: '28rem'
    }} light>
      <h1>Confirmed Orders</h1>
       <MDBListGroupItem style={{ backgroundColor: '#b7d3f2', borderRadius: '15px' }}  className='d-flex justify-content-between align-items-center w-50 mx-5 my-3'>
        <h5 >Order ID </h5>
        <h5 >Status</h5>
        <h5 style={{ marginRight: '9rem' }}>Actions</h5>
      </MDBListGroupItem>
      {ordersToApprove ? ordersToApprove.map((o,idx) => {
        return(
          <MDBListGroupItem style={{ backgroundColor: '#f7f9f9', borderRadius: '15px' }} className='d-flex justify-content-between align-items-center w-50 mx-5 my-3' key={idx}>
            <div>
              <div className='fw-bold'>Order #{o.id}</div>
              <div className='text-muted'> {o.createdAt}</div>
              <div className='text-muted' style={{inlineSize: '193px'}}>To {o.adress}</div>
            </div>
            <MDBBadge pill light color='primary'>
              {o.status}
            </MDBBadge>
            <button size='sm' className='m-1' style={{
              color:'white', backgroundColor: 'rgb(59, 89, 152)',
                   fontWeight: '600', borderRadius: '15px', marginRight: '-11rem', borderColor: 'rgb(59, 89, 152)'
            }} href='#' onClick={() => {deleteOneOrder(o.id,token) }}>
              Reject
            </button>
            <button size='sm' className='m-1' style={{color:'white', backgroundColor: 'rgb(59, 89, 152)',
                   fontWeight: '600', borderRadius: '15px', marginRight: '-11rem', borderColor: 'rgb(59, 89, 152)'
            }} href='#' onClick={() => {approveOrders(token)}}>
              Checkout To Delivery
            </button>
          </MDBListGroupItem>
        )
      }):null}


    </MDBListGroup>
  );
}

