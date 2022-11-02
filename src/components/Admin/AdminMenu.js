

// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import {AiOutlineMenu}  from "react-icons/ai";
// import SplitButton from 'react-bootstrap/SplitButton';

// function AdminMenu() {
//   return (
//   //   <SplitButton
//   //   // key='start'
//   //   id={`dropdown-button-drop-start`}
//   //   // drop='start'
//   //   // variant="secondary"
//   //   title={<AiOutlineMenu/>}
//   // >
//     <DropdownButton id="dropdown-button-drop-start" drop='start'title={<AiOutlineMenu/>}> 
//       <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//       <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//       <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//      </DropdownButton>
//     // </SplitButton>
//   );
// }

// export default AdminMenu;
// /* <MDBBtn block className='border-bottom m-0' color='link'onClick={() => {navigate('/admindashboard/products')}}>
// Products
//  </MDBBtn>
//  <MDBBtn block className='border-bottom m-0' color='link'onClick={() => {navigate('/admindashboard/users')}}>
//    Users */

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from "react-router-dom";


function AdminMenu() {
  const navigate = useNavigate();
const color= 'rgb(13 110 253 / 25%)'
  return (
    
    <DropdownButton
      align="end"
      title={<AiOutlineMenu style={{color: 'white', width: '1.5rem',
      height: 'auto'}}/>}
      id="dropdown-menu-align-end"
      variant={color}
      // style={{color: 'rgb(13 110 253 / 25%)'}}
    >
      <div>
         <Dropdown.Item eventKey="1" onClick={() => {navigate('/admindashboard/users')}} >Users</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="2" onClick={() => {navigate('/admindashboard/products')}} >Products</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="3" onClick={() => {navigate('/admindashboard/analysis')}}>Analysis</Dropdown.Item>
  
      </div>
     
    </DropdownButton>
  );
}

export default AdminMenu;
   