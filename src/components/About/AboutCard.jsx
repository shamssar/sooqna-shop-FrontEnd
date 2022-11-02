import React from 'react';
import {
    MDBCardText,
    MDBCardImage,
    MDBTypography
} from 'mdb-react-ui-kit';


 export default function AboutCard() {
    return (
        <div>
            <div className="mt-3 mb-4">
                <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    className="rounded-circle"
                    fluid
                    style={{
                    width: '100px'
                }}/>
            </div>
            <MDBTypography tag="h4">Julie L. Arsenault</MDBTypography>
            <MDBCardText className="text-muted mb-4">
                @Programmer
                <span className="mx-2">|</span>
                <a href="#!">mdbootstrap.com</a>
            </MDBCardText>
        </div>
    )
}

