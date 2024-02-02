import React, { useState, useEffect} from "react";
import {  useParams } from 'react-router-dom';

import api from "../constants/api";
import NavMenu from '../components/NavMenu'
//import { Link } from "react-router-dom";
//import moment from 'moment';
// import imageBase from "../../constants/image.js"

export default function News() {
  const [News, setNews] = useState([]);
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
    const getNewsById = () => {
      api
        .post('/section/getNewsById', { content_id: id })
        .then((res) => {
          setNews(res.data.data);
        })
        .catch(() => {
        });
    };
  
    getNewsById();
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
      <div class="header-2">
        <div class="top-header">
          <div class="container">
            <div class="bg">
              <div class="row justify-content-between align-items-center">
                <div class="col-xl-6 col-lg-6 col-md-7">
                  <div class="top-left">
                    <ul>
                      <li>
                        <i class="flaticon-message"></i>
                        <span>youremailhere@gmail.com</span>
                      </li>
                      <li>
                        <i class="flaticon-phone-call"></i>
                        <span>+008 1234 56789</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-5">
                  <div class="top-right">
                    <div class="language">
                      <div class="select-lang">
                        <div
                          id="demo"
                          data-input-name="country"
                          data-selected-country="US"
                          data-scrollable-height="250px"
                        ></div>
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
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
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
      <div>
      <div class="breadcrumb blog-breadcrumb">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-4 col-lg-4">
              <div class="part-txt">
                <h1>News</h1>
                <ul>
                  <li>Home</li>
                  <li>-</li>
                  <li>News</li>
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
                        {News.map((image, index) => (
                            <div key={index} className="col-xl-12 col-lg-12 col-md-12">
                                <div className="part-img">
                                    <img src={`http://43.228.126.245/aimaanAPI/storage/uploads/${image.file_name}`} alt={image.alt}  width="600px"
                      height="550px" />
                                </div><br/>
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="part-txt" dangerouslySetInnerHTML={{ __html: image.description }} />
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
