import React, { useEffect, useState } from 'react';
import NavMenu from '../components/NavMenu'
import api from '../constants/api';

const Home = () => {   
    
    const [gallery, setGallery] = useState([]);
    const getImage = () => {
        api
            .get("/content/getPhotoGallery")
            .then((res) => {
                setGallery(res.data.data);
              
            })
            .catch(() => { });
    };
    useEffect(() => {
   getImage();   
   
    }, [])
    
  return (
    
    <div>
    
    <div class="header-2">
        <div class="top-header">
            <div class="container">
                <div class="bg">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-xl-6 col-lg-6 col-md-7">
                            <div class="top-left">
                                <ul>
                                    <li><i class="flaticon-message"></i><span>youremailhere@gmail.com</span></li>
                                    <li><i class="flaticon-phone-call"></i><span>+008 1234 56789</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-5">
                            <div class="top-right">
                                <div class="language">
                                    <div class="select-lang">
                                        <div id="demo"
                                            data-input-name="country"
                                            data-selected-country="US"
                                            data-scrollable-height="250px">
                                        </div>
                                    </div>
                                </div>
                                <div class="try-btn">
                                    <a href="/">FREE TRY</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-header">
            <div class="container">
                <div class="bg">
                    <div class="row align-items-center">
                        <div class="d-xl-none d-lg-none d-flex col-4">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="flaticon-menu-button-of-three-horizontal-lines"></i>
                            </button>
                        </div>
                        <div class="col-xl-1 col-lg-1 col-4">
                            <div class="logo">
                                <a href="/">
                                    <img src="assets/images/United Logo.png" alt="LOGO" />
                                </a>
                            </div>
                        </div>
                       
                        <NavMenu></NavMenu>
                     
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="breadcrumb portfolio-breadcrumb">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-3 col-lg-3">
                    <div class="part-txt">
                        <h1>portfolio</h1>
                        <ul>
                            <li>Home</li>
                            <li>-</li>
                            <li>Portfolio</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="portfolio">
            <div class="container">
                <div class="row">
                    {gallery.map((image, index) => (
                        <div key={index} class="col-xl-4 col-lg-4 col-sm-6">
                            <div class="single-box">
                                <div class="part-img">
                                    <img src={`http://43.228.126.245/aimaanAPI/storage/uploads/${image.file_name}`} alt={image.alt} width="300px" height="250px"/>
                                    <div class="overlay">
                                        <a href="portfolio-details.html"><i class="flaticon-add"></i></a>
                                    </div>
                                </div>
                                <div class="part-txt">
                                    <a href="portfolio-details.html">{image.file_name}<span>{image.subtitle}</span></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
 

    </div>
  );
}

export default Home;
