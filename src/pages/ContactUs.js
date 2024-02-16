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
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    return doc.body.textContent || '';
  };
  const [contactData, setContactData] = useState(null); // To store fetched contact data

  // Function to fetch contact by ID
  useEffect(() => {

    const fetchContactById = () => {
      api.get("/contact/getContactById") // Assuming this is the correct endpoint to get contact by ID
        .then(response => {
          console.log("Contact fetched successfully:", response.data);
          setContactData(response.data.data); // Update contactData state with fetched data
        })
        .catch(error => {
          console.error("Error fetching contact:", error);
          // Handle error if needed
        });
    };

    // Fetch contact by ID when the component mounts
    fetchContactById();
  }, []); // Empty dependency array ensures this effect runs only once when component mounts

  const [addressData, setAddressData] = useState(null); // To store fetched contact data

  // Function to fetch contact by ID
  useEffect(() => {

    const fetchContact = () => {
      api.get("/contact/getContact") // Assuming this is the correct endpoint to get contact by ID
        .then(response => {
          console.log("Contact fetched successfully:", response.data);
          setAddressData(response.data.data); // Update contactData state with fetched data
        })
        .catch(error => {
          console.error("Error fetching contact:", error);
          // Handle error if needed
        });
    };

    // Fetch contact by ID when the component mounts
    fetchContact();
  }, []); // Empty dependency array ensures this effect runs only once when component mounts

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
       <Row className='ml-5'>   {addressData &&
            addressData.map(item => (
                    <div key={item.title}>
                      <h3>Address:</h3>
                       <h4>{stripHtmlTags(item.description)}</h4>
                                         </div>  ))
                                           }</Row>
         
       <Row className='ml-5'>     {contactData &&
              contactData.map(item => (
                    <div key={item.title}>
                      <h3>Email:</h3>
                      <span>{stripHtmlTags(item.description)}</span>                     </div>  ))
                                           }
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

