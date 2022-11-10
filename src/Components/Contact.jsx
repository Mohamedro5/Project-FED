import React from 'react';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';


function Contact(){
    return(
    <div className='Container'>
            <Row className="mb-5 mt-3">
                <Col lg='8'>
                    <h4 className='display-4 mb-4'>
                        Contact Us
                    </h4>
                </Col>
            </Row>
            <Row className='sec-sp'>
                <Col lg='5'className='mb-5'>
                    <h3 className='color_sec py-4'>Get in touch</h3>
                    <address>
                        <strong>Email : XXXX@gmail.com</strong>
                        <br/>
                        <br/>
                        <p>
                            <strong>Phone : 73637*****</strong>
                        </p>
                    </address>
                    {/* <p>{contactConfig.description}</p> */}
                </Col>
                <Col lg='7'className="d-flex align-items-center">
                    <form className='contact__form  w-100'>
                        <Row>
                            <Col lg='6'className='form-group'>
                                <input className='form-control'
                                id='name'
                                name='name'
                                placeholder='name'
                                type='text'/>
                            </Col>
                            
                            <Col lg='6'className='form-group rounded-0'>
                                <input className='form-control'
                                id='email'
                                name='email'
                                placeholder='email'
                                type='email'/>
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <textarea
                        className='form-control rounded-0'id='message'
                        name='message'
                        placeholder='message'
                        rows='5'
                        ></textarea>
                        <br/>
                        <Col lg='8'className='form-group'>
                        <Button variant="outline-success">Send</Button>
                        </Col>
                    </form>
                </Col>

            </Row>
        </div>
    )
};

export default Contact;