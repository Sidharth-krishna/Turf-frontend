import React, { useEffect, useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
function Login() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const [user, setUser] = useState({})
    useEffect(() => {
        axios.get('http://localhost:5000/admin')
            .then((res) => setUser(res.data))
            .catch(err => console.log(err))
    }, [])
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSignIn = () => {
        console.log('Username:', username);
        console.log('Password:', password);
        if (username === user.email && password === user.password) {
            alert('admin loged')
            navigate('/admin')
        } else {
            alert('sorry')
        }
    };


    return (
        <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>
            <div className='container w-50 justify-content-center align-items-center'>
                <div
                    style={{ backgroundImage: "url('https://www.playspots.in/wp-content/themes/playspots/assets/images/partner-page/sub-banner.png')" }}
                    className='card bg-success p-5 rounded justify-content-center align-items-center w-75 shadow border border-1 ms-5'
                >
                    <div className='row align-items-center justify-content-center'>
                        <h1 className='text-light'>
                            <i className="fa-solid fa-baseball me-3"></i>Green Scape
                        </h1>
                        <div className='justify-content-center align-items-center col-lg-8 p-3'>
                            <Form>
                                <Form.Group className='mb-4' controlId='formBasicUsername'>
                                    <FormControl
                                        className='border border-1 border-dark shadow'
                                        type='text'
                                        placeholder='Username'
                                        value={username}
                                        onChange={handleUsernameChange}
                                    />
                                </Form.Group>

                                <Form.Group className='mb-4' controlId='formBasicPassword'>
                                    <FormControl
                                        className='border border-1 border-dark shadow'
                                        type='password'
                                        placeholder='Password'
                                        value={password}
                                        onChange={handlePasswordChange}
                                    />
                                </Form.Group>
                            </Form>
                        </div>
                        <div className='align-items-center justify-content-center d-flex'>
                            <button className='btn btn-danger w-25' onClick={handleSignIn}>
                                Sign in
                            </button>
                        </div>
                        <Link to='/register' className='d-flex justify-content-center align-items-center mt-5 fs-5' style={{ textDecoration: 'none', color: 'blue' }}>
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
