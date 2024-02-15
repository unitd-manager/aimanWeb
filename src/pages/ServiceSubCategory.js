import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
//import NavMenu from '../components/NavMenu'
import api from '../constants/api';

const ServiceSubCategory = () => {   
    const { id } = useParams();

    const [subContent, setSubContent] = useState([]);

    useEffect(() => {
        const getSubContent = () => {
            //var formated = sub_category_id.split("-").join(" ");

            api
                .post("/content/getSubCategoryContent",{ sub_category_id: id })
                .then((res) => {
                  setSubContent(res.data.data);
                    AOS.init(); // Move AOS.init() inside the promise chain to ensure it's called after data is fetched
                })
                .catch(() => { });
        };

        getSubContent();   
    }, [id]);

    return (
        <div>
 
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
                        {subContent.map((data, index) => (
                            <div key={index} className="col-xl-12 col-lg-12 col-md-12">
                                <div className="part-img">
                                <h2>{data.sub_category_title}</h2>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="part-txt" dangerouslySetInnerHTML={{ __html: data.description }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceSubCategory;
