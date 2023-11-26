import React from 'react'
import { Form, FormControl, FormGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div style={{width:"100%", height:"100vh"}} className='d-flex justify-content-center align-items-center bg-dark'>
        <div className='container w-50 '>

            <div style={{backgroundImage:"url('https://www.playspots.in/wp-content/themes/playspots/assets/images/partner-page/sub-banner.png')"}} className='card bg-success p-5 rounded justify-content-center align-items-center '>
                <div className='row align-items-center d-flex  '>
                    <h1 className='text-light'><i class="fa-solid fa-baseball me-3 "></i>Green Scape</h1>
                    <div className='col-lg-6 p-3'>
                    <Form>
                                    <Form.Group className='mb-4  ' controlId='formBasicEmail'>
                                        <FormControl className='border border-1 border-dark shadow' type='text' placeholder='Username'/>
                                    </Form.Group>
                                
                                <Form.Group className='mb-4' controlId='formBasicEmail'>
                                        <FormControl className='border border-1 border-dark shadow' type='email' placeholder='Email ID'/>
                                    </Form.Group>

                                <Form.Group className='mb-4 ' controlId='formBasicEmail'>
                                        <FormControl className='border border-1 border-dark shadow' type='text' placeholder='Mobile No'/>
                                </Form.Group>
                                
                            </Form>
                    </div>
                    <div className='col-lg-6 '>
                         <Form>
                                    <Form.Group className='mb-4 ' controlId='formBasicEmail'>
                                        <FormControl className='border border-1 border-dark shadow' type='password' placeholder='password'/>
                                    </Form.Group>
                                
                                <Form.Group className='mb-4' controlId='formBasicEmail'>
                                        <FormControl className='border border-1 border-dark shadow' type='text' placeholder='Address'/>
                                    </Form.Group>

                                <Form.Group className='mb-4 ' controlId='formBasicEmail'>
                                        <FormControl className='border border-1 border-dark shadow' type='text' placeholder='Place'/>
                                </Form.Group>

                        </Form>
                            
                    </div>
                    <div className='align-items-center justify-content-center d-flex'>
                         <button className='btn btn-danger w-25'>Register</button>
                     </div>
                </div>
                
            </div>
            
        </div>
        
    </div>
  )
}

export default Register