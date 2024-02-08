import React, { useState, useEffect } from "react";
import api from "../constants/api";
import bannerImage from '../../src/assets/banner/home.jpg';
import ReactHtmlParser from "react-html-parser";

export default function AboutUs() {
  const [aboutUs, setAboutUs] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = () => {
    api
      .get("/content/getAboutUs")
      .then((res) => {
        setAboutUs(res.data.data);
      })
      .catch(() => {});
  };

  return (
    <>
      <div class="breadcrumb portfolio-breadcrumb" style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-3 col-lg-3">
              <div class="part-txt">
                <h1>About Us</h1>
                <ul>
                  <li>Home</li>
                  <li>-</li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          {aboutUs &&
            aboutUs.map((data, index) => (
              <div key={index} className="row mb-5">
                <div className="col-lg-7">
                  <h3 className="mb-3 text-dark">{data.title}</h3>
                  <p className="text-center" style={{ color: "black" }}>
                    {/* You can add date logic here if needed */}
                  </p>
                  <div className="text-left">
                    <p className="description">
                      {ReactHtmlParser(data.description)}
                    </p>
                  </div>
                </div>
                <div className="col-lg-5">
                  <img
                    src={`http://43.228.126.245/aimaanAPI/storage/uploads/${data.file_name}`}
                    className="img-fluid"
                    alt="post-thumb"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
