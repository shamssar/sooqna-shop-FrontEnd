import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import {Container,Row} from "react-bootstrap";
import { getAllUser } from "../../api/api";
import { isAuthenticated } from '../../auth';


export default function AdminDashboard () {

    const { token } = isAuthenticated()

    const [users, setUsers] = useState("");
    const [error, setError] = useState("");
  
    
  
    const loadUsers = async () => {
        await getAllUser(token).then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setUsers(data);
          }
        });
      };
      useEffect(() => {
        loadUsers();
        window.scrollTo(0, 0)
      }, []);
    
    return(
<>
<Container fluid='sm' style={{ margin: '137px 13px' }} >

                <Row xs="4">
                    
                {users ? users.map((user,idx) => {
                    return (
                      <UserCard user={user} key={idx} />
                        )
                    }):null}
             </Row>

            </Container>
</>
    )
    
}
