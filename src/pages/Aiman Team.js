import React, { useState, useEffect } from "react";
import api from "../constants/api";
import bannerImage from "../../src/assets/banner/home.jpg";
import ReactHtmlParser from "react-html-parser";

export default function AimaanTeam() {
  const [aboutUs, setAboutUs] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = () => {
    api
      .get("/content/getAimanTeam")
      .then((res) => {
        setAboutUs(res.data.data);
      })
      .catch(() => {});
  };

  return (
    <>
      <div
        className="breadcrumb portfolio-breadcrumb"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-3">
              <div className="part-txt">
                <h1>Aimaan Team</h1>
                <ul>
                  <li>Home</li>
                  <li>-</li>
                  <li>Aimaan Team</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
     
<div className="contact">
  <div className="container">
    <div className="boxes">
      <div className="row justify-content-center">
        {aboutUs &&
          aboutUs.map((data, index) => (
            <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-7">
              <div className="single-box" style={{ height: "350px", overflow: "hidden", margin: "20px" }}>
                <div className="part-txt">
                  <h3 className="mb-1 text-dark">{data.title}</h3>
                  <p className="text-center" style={{ color: "black" }}>
                    {/* You can add date logic here if needed */}
                  </p>
                  <div className="text-left">
                    <p className="description">
                      {ReactHtmlParser(data.description)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>
</div>

    </>
  );
}
