import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Booking() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: "",
    numberOfPeople: "",
    selectedTime: "",
    emailAddress: "",
    selectedDate: "",
    mobileNumber: "",
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/user', formData)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    alert('Turf Booked Sucessfully')
    navigate('/')
  };

  return (
    <div iv style={{ backgroundColor: " rgb(37, 36, 36)" }}>
      <div style={{ height: "100vh" }} className="mt-5 mb-5 text-light">
        <div className="text-center mt-5 mb-5">
          <h1 className="mt-5">Book Now</h1>
          <h2 style={{ color: "red" }}>Green Scape</h2>
        </div>

        <div className="d-flex justify-content-around align-items-center mt-5">
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6} className="d-flex flex-column">
                <Form.Group className="mb-5" controlId="formBasicEmail">
                  <Form.Label className="flex-left">Full Name:</Form.Label>
                  <FormControl
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="border border-3 border-success"
                    type="text"
                    placeholder="Enter your name"
                  />
                </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicEmail">
                  <Form.Label className="flex-left">
                    Number of peoples:
                  </Form.Label>
                  <FormControl
                    name="numberOfPeople"
                    value={formData.numberOfPeople}
                    onChange={handleChange}
                    className="border border-3 border-success"
                    type="number"
                    placeholder="Number of peoples"
                  />
                </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicEmail">
                  <Form.Label className="flex-left">
                    Select your time:
                  </Form.Label>
                  <FormControl
                    name="selectedTime"
                    value={formData.selectedTime}
                    onChange={handleChange}
                    className="border border-3 border-success"
                    type="time"
                    placeholder="Email ID"
                  />
                </Form.Group>
              </Col>

              <Col md={6} className="d-flex flex-column">
                <Form.Group className="mb-5" controlId="formBasicEmail">
                  <Form.Label className="flex-left">Email address:</Form.Label>
                  <FormControl
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    className="border border-3 border-success"
                    type="email"
                    placeholder="Enter your email"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-5"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="flex-left">
                    Choose your date:
                  </Form.Label>
                  <Form.Control
                    name="selectedDate"
                    value={formData.selectedDate}
                    onChange={handleChange}
                    className="border border-3 border-success"
                    type="date"
                    placeholder="Choose your date"
                  />
                </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicEmail">
                  <Form.Label className="flex-left">
                    Enter your mobile number:
                  </Form.Label>
                  <FormControl
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="border border-3 border-success"
                    type="text"
                    placeholder="Mobile"
                  />
                </Form.Group>
              </Col>
            </Row>

            <div className="text-center mb-5">
              <button className="text-center btn btn-success">Book Now</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Booking;