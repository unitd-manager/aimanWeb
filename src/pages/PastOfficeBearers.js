import React, { useState, useEffect } from "react";
import api from "../constants/api";
import bannerImage from '../../src/assets/banner/home.jpg';
import ReactHtmlParser from "react-html-parser";

export default function PastOfficeBearers() {
  const [pastOfficeBearers, setPastOfficeBearers] = useState([]);

  useEffect(() => {
    getPastOfficeBearers();
  }, []);

  const getPastOfficeBearers = () => {
    api
      .get("/content/getPastOfficeBearers")
      .then((res) => {
        setPastOfficeBearers(res.data.data);
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
                <h1>AIMAN PAST OFFICE BEARERS</h1>
                <ul>
                  <li>Home</li>
                  <li>-</li>
                  <li>AIMAN PAST OFFICE BEARERS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          {pastOfficeBearers &&
            pastOfficeBearers.map((data, index) => (
              <div key={index} className="row mb-5">
                <div className="col-lg-12">
                  
                  <div className="text-left">
                    <p className="description">
                      {ReactHtmlParser(data.description)}
                    </p>
                  </div>
                </div>
                              </div>
            ))}
        </div>
      </div>
    </>
  );
}
