import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import api from "../constants/api";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    notes: '',
    message: ''
  });
  const stripHtmlTags = (htmlString) => {

    const doc = new DOMParser().parseFromString(htmlString,'text/html');
    return doc.body.textContent ||'';
    
    
    }
  const [email, setEmail] = useState([]);
  useEffect(() => {
    // Fetch sections
    api.get('/content/getEmail')
      .then((res) => {
        setEmail(res.data.data[0]);
      })
      .catch(() => {
        // Handle error
      });

  
  }, []); // Empty dependency array ensures this effect runs only once when component mounts

  const [addressData, setAddressData] = useState([]); // To store fetched contact data

  useEffect(() => {
    // Fetch sections
    api.get('/content/getContact')
      .then((res) => {
        setAddressData(res.data.data[0]);
      })
      .catch(() => {
        // Handle error
      });

  
  }, []); // Empty dependency array ensures this effect runs only once when component mounts

// Empty dependency array ensures this effect runs only once when component mounts

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Make an HTTP POST request to the API endpoint with the form data
    api.post("/contact/insertContact", formData)
      .then(response => {
        console.log("Contact inserted successfully:", response.data);
        // Optionally, you can reset the form after successful submission
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          notes: '',
          message: ''
        });
      })
      .catch(error => {
        console.error("Error inserting contact:", error);
        // Handle error if needed
      });
  };

  return (
    <div>
      <div className="breadcrumb service-breadcrumb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-3">
              <div className="part-txt">
                <h1>CONTACTS</h1>
                <ul>
                  <li>Home</li>
                  <li>-</li>
                  <li>CONTACTS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <Container>
          <Row className='ml-5'>
            <h2>Contact Details</h2></Row>
          <Row className='ml-5'>   
        
          <div>
                <span>{stripHtmlTags(addressData.description)}</span>
                </div>
          </Row>

          <Row className='ml-5'>
                <div>
                <span>{stripHtmlTags(email.description)}</span>
                </div>
          </Row>
          <Form className="form mt-5" onSubmit={handleSubmit} >
            <Row className="justify-content-center  pt-0">

              <Col xl="5" lg="5" md="6" >
                <FormGroup textcolor='dark'>
                  <Input type="text"
                    name="first_name"
                    placeholder="First Name*"
                    value={formData && formData.first_name}
                    onChange={handleChange} required />
                </FormGroup>
              </Col>
              <Col xl="5" lg="5" md="6">
                <FormGroup>
                  <Input type="text" name="last_name" placeholder="Last Name*" value={formData && formData.last_name} onChange={handleChange} required />
                </FormGroup>
              </Col>
              <Col xl="10" lg="10">
                <FormGroup>
                  <Input type="email" name="email" placeholder="Email*" value={formData && formData.email} onChange={handleChange} required />
                </FormGroup>
              </Col>
              <Col xl="10" lg="10">
                <FormGroup>
                  <Input type="text" name="notes" placeholder="Subject*" value={formData && formData.notes} onChange={handleChange} required />
                </FormGroup>
              </Col>
              <Col xl="10" lg="10">
                <FormGroup>
                  <Input type="textarea" name="message" placeholder="Message" value={formData && formData.message} onChange={handleChange} required />
                </FormGroup>
                <Button className="def-btn def-btn-2">Send Message</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </div>
  );
};
export default ContactUs;

