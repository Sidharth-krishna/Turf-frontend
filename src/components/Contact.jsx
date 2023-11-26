import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form, FormControl, FormGroup } from 'react-bootstrap'

function Contact() {
  return (
    <div style={{width:"100%", height:'750px',overflowX:'hidden'}} className='bg-dark'>
        <div className='d-flex justify-content-center align-items-center text-light'>
            <h3 className='mt-4'>Contact Us</h3>
        </div>
        <div className='border border-1 shadow border-light w-100 mt-3'></div>
        <div className='text-light p-3 ms-5 '>
            <h4 className='fw-bolder'>Get in Touch</h4>
        </div>

        <div className="row d-flex text-white p-3 ms-5">
            <div className="col-md-7">
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" placeholder='message' rows={6} />
                </Form.Group>
            </Form>
            <Row>
                    <Col>
                       <Form>
                         <Form.Group className='mb-4  ' controlId='formBasicEmail'>
                             <FormControl className='border border-1 border-dark shadow'  type='text' placeholder='Enter your name'/>
                         </Form.Group>
                       </Form>
                    </Col>
                    <Col>
                    <Form>
                         <Form.Group className='mb-4  ' controlId='formBasicEmail'>
                             <FormControl className='border border-1 border-dark shadow'  type='text' placeholder='Email'/>
                         </Form.Group>
                       </Form>
                    </Col>
                </Row>
                <Row>
                <Col>
                    <Form>
                         <Form.Group className='mb-4  ' controlId='formBasicEmail'>
                             <FormControl className='border border-1 border-dark shadow'  type='email' placeholder='Enter Subject'/>
                         </Form.Group>
                       </Form>
                    </Col>
                </Row>


            </div>
            <div className="col-md-4 flex-column ms-5 text-light">
                <div className='ms-5'>
                    <i class="fa-solid fa-house"></i>
                    <p><span className='fw-bolder'>Address 1, California</span> <br />
                    Cty 1, CA 12345</p>
                </div>
                <div className=" flex-column ms-5">
                   <i class="fa-solid fa-house"></i>
                   <p><span className='fw-bolder'>Address 1, California</span><br />
                   Cty 1, CA 12345</p>
                </div>
                <div className="ms-5">
                   <i class="fa-solid fa-envelope"></i>
                   <p><span className='fw-bolder'>support@support.com</span><br />
                   Send us your query anytime!</p>
            </div>
            </div>
            
        </div>
        <div className="ms-5 p-3">
            <button className='btn btn-success rounded ms-3 w-25 p-3'>Send</button>
        </div>
   </div>
  )
}

export default Contact