import React, {useEffect, useState } from 'react';
//import NavMenu from '../components/NavMenu'
import api from '../constants/api';
import bannerImage from '../../src/assets/banner/gallerybanner.jpg';
import { Button, Col, Row } from 'reactstrap';
import ImageModal from '../components/ImageModal';

const Home = () => {   
    
    const [gallery, setGallery] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null); // State to track the selected image
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getAllImage = () => {
        api
            .get("/content/getAllPhotoGallery")
            .then((res) => {
                setGallery(res.data.data);
              
            })
            .catch(() => { });
    };
   
    const getEventImage = () => {
        api
            .get("/content/getEventPhotoGallery")
            .then((res) => {
                setGallery(res.data.data);
              
            })
            .catch(() => { });
    };

    const getGeneralImage = () => {
        api
            .get("/content/getGeneralPhotoGallery")
            .then((res) => {
                setGallery(res.data.data);
              
            })
            .catch(() => { });
    };


    const getBaithulImage = () => {
        api
            .get("/content/getBaithulPhotoGallery")
            .then((res) => {
                setGallery(res.data.data);
              
            })
            .catch(() => { });
    };
    const handleImageClick = (image) => {
        setSelectedImage(image); // Set the selected image when clicked
        setIsModalOpen(true); // Open the modal
    };

    // Function to close the modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
   useEffect(() => {
    getAllImage();
     
   }, [])
    
  return (
    
    <div>
    


    <div class="breadcrumb portfolio-breadcrumb" style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-3 col-lg-3">
                    <div class="part-txt">
                        <h1>Gallery</h1>
                        <ul>
                            <li>Home</li>
                            <li>-</li>
                            <li>Gallery</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <br/>
    <Row className="justify-content-between">
        <Col></Col>
        <Col></Col>
              <Col>
                <Button
                  color="dark"
                  size="lg"
                  onClick={() => {
                    getAllImage(); 
                  }}
                >
                  All
                </Button>
              </Col>
              <Col>
                <Button
                  color="dark"
                  size="lg"
                  onClick={() => {
                    getEventImage();
                  }}
                >
                  Events
                </Button>
              </Col>
              <Col>
                <Button
                  color="dark"
                  size="lg"
                  onClick={() => {
                    getGeneralImage();
                  }}
                >
                  General
                </Button>
              </Col>
              <Col>
                <Button
                  color="dark"
                  size="lg"
                  onClick={() => {
                    getBaithulImage();
                  }}
                >
                  Baithumal
                </Button>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
            </div>

       
    <div class="portfolio">
            <div class="container">
                <div class="row">
                    {gallery.map((image, index) => (
                        <div key={index} class="col-xl-4 col-lg-4 col-sm-6" style={{paddingBottom:"35px"}}>
                            <div class="single-box">
                                <div class="part-img">
                                    <img src={`http://43.228.126.245/aimaanAPI/storage/uploads/${image.file_name}`} 
                                     alt={image.alt}
                                     onClick={() => handleImageClick(image)}
                                     style={{
                                      width: '380px',
                                      height: '200px',
                                      objectFit: 'cover', // or 'contain', or any other value based on your preference
                                  }}
                                     />
                                   
                                </div>
                                <div class="part-txt">
                                    <a href="portfolio-details.html"onClick={(e) => { e.preventDefault(); handleImageClick(image); }}>{image.display_title}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                     <ImageModal
                isOpen={isModalOpen}
                toggle={handleCloseModal}
                imageSrc={selectedImage ? `http://43.228.126.245/aimaanAPI/storage/uploads/${selectedImage.file_name}` : ''}
                alt={selectedImage ? selectedImage.alt : ''}
            />
                </div>
            </div>
        </div>
 

    </div>
  );
}

export default Home;
