import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import NavMenu from '../components/NavMenu'
import api from '../constants/api';

const Religious = () => {   
    const { title } = useParams();

    const [religion, setReligion] = useState([]);

    useEffect(() => {
        const getReligion = () => {
            var formated = title.split("-").join(" ");

            api
                .post("/content/getReligionService",{ title: formated })
                .then((res) => {
                    setReligion(res.data.data);
                    AOS.init(); // Move AOS.init() inside the promise chain to ensure it's called after data is fetched
                })
                .catch(() => { });
        };

        getReligion();   
    }, [title]);

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
                                    <img src="/assets/images/United Logo.png" alt="LOGO" />
                                </a>
                            </div>
                        </div>
                       
                        <NavMenu></NavMenu>
                     
                    </div>
                </div>
            </div>
        </div>
    </div>
            <div className="breadcrumb service-breadcrumb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-3">
                            <div className="part-txt">
                                <h1>Services</h1>
                                <ul>
                                    <li>Home</li>
                                    <li>-</li>
                                    <li>Service Detail</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="feature-2">
                <div className="container">
                    <div className="row justify-content-center">
                        {religion.map((image, index) => (
                            <div key={index} className="col-xl-12 col-lg-12 col-md-12">
                                <div className="part-img">
                                    <img src={`http://43.228.126.245/aimaanAPI/storage/uploads/${image.file_name}`} alt={image.alt} />
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="part-txt" dangerouslySetInnerHTML={{ __html: image.description }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Religious;
