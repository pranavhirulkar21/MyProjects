import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="google" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="github" />
                    </a>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="gem" className="me-3" />
                                Saloon Appointment System
                            </h6>
                            <p>
                                <>- The Scope of the Project is to provide Appointment of Saloon Services in Efficient Manner.</> 
                                <>- Here we try to ensure that Appointment should be Handled through right manner and try to fullfill the Requirement of project.</> 
                                <>- This project manages Registration, Appointment Scheduling, Managing Appointments and Services for required Members.</> 
                                <>- This Project will not provide appointment for door step services.</> 
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
                            <p><a href='#!' className='text-reset'> Products</a> </p>
                            <p><a href='#!' className='text-reset'>Hiring Stylist</a></p>
                            <p><a href='#!' className='text-reset'>Partnership </a></p>
                            <p><a href='#!' className='text-reset'>About</a></p>
                        </MDBCol>
                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p><a href='#!' className='text-reset'>Pricing</a></p>
                            <p> <a href='#!' className='text-reset'>Settings</a></p>
                            <p><a href='#!' className='text-reset'>Orders</a></p>
                            <p><a href='#!' className='text-reset'>Help</a></p>
                        </MDBCol>
                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p> <MDBIcon icon="home" className="me-2" /> India, Maharashtra, Pune, Hinjewadi, 411045 </p>
                            <p> <MDBIcon icon="envelope" className="me-3" /> pranav@gmail.com : + 91 9503682307</p>
                            <p> <MDBIcon icon="phone" className="me-3" /> jayesh@gmail.com : + 91 9370056745</p>
                            <p><MDBIcon icon="print" className="me-3" /> rajat@gmail.com : + 91 8600710724</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2021 Copyright:
                <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                    By Admin
                </a>
            </div>
        </MDBFooter>
    );
}