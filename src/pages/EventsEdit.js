import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

import api from "../constants/api";
//import NavMenu from '../components/NavMenu'
//import { Link } from "react-router-dom";
//import moment from 'moment';
// import imageBase from "../../constants/image.js"

export default function Events() {
  const [Events, setEvents] = useState([]);
  const { id } = useParams();

  //    const [filterSortType, setFilterSortType] = useState('');
  //      const [filterSortValue, setFilterSortValue] = useState('');
  //   const [searchQuery, setSearchQuery] = useState("");
  //   const [sortType, setSortType] = useState("");
  //   const [sortValue, setSortValue] = useState("");
  //   const [categories, setCategories] = useState();

  //   const location = useLocation();
  //   const navigate = useNavigate();
  // const pageLimit = 15;

  // console.log("search", searchQuery);

  //Api call for getting Vehicle Data By ID

  useEffect(() => {
    const getEventsById = () => {
      api
        .post("/section/getEventsById", { content_id: id })
        .then((res) => {
          setEvents(res.data.data);
        })
        .catch(() => {});
    };

    getEventsById();
  }, [id]); // <-- Add id to the dependency array

  //   const getFormatedText = (title) => {
  //     var formatedd = title.toLowerCase();
  //     return formatedd.split(" ").join("-");
  //   };

  //   const getFormattedDate = (dateString) => {
  //     const options = {
  //       year: "numeric",
  //       month: "short",
  //       day: "numeric",
  //     };
  //     const date = new Date(dateString);
  //     return new Intl.DateTimeFormat("en-US", options).format(date);
  //   };

  return (
    <>
      <div>
        <div class="breadcrumb blog-breadcrumb">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-4 col-lg-4">
                <div class="part-txt">
                  <h1>Events</h1>
                  <ul>
                    <li>Home</li>
                    <li>-</li>
                    <li>Events</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="blog-2 blog-inner">
          <div class="container">
            <div class="row justify-content-center">
              <div className="feature-2">
                <div className="container">
                  <div className="row justify-content-center">
                    {Events.map((image, index) => (
                      <div
                        key={index}
                        className="col-xl-12 col-lg-12 col-md-12"
                      >
                        <div
                          className="part-img"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100vh",
                          }}
                        >
                          <img
                            src={`https://aimanweb.unitdtechnologies.com/storage/uploads/${image.file_name}`}
                            alt={image.alt}
                            width="600px"
                            height="550px"
                          />
                        </div>
                        <br />
                        <h3
                          style={{
                            paddingBottom: "15px",
                            fontSize: "20px",
                            textAlign: "center",
                          }}
                        >
                          {image.title}
                        </h3>
                        <br />
                        <div className="text-left">
                          <p
                            className="description"
                            style={{ fontSize: "14px" }}
                          >
                            {ReactHtmlParser(image.description)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
