import React, { useState, useEffect } from "react";
import api from "../constants/api";
import NavMenu from '../components/NavMenu'
import { Link } from "react-router-dom";
//import moment from 'moment';
// import imageBase from "../../constants/image.js"

export default function News() {
  const [News, setNews] = useState([]);

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
  useEffect(() => {
    getNews();
    //getCategory();
  }, []);

  const getNews = () => {
    // var formated = title.split("-").join(" ");
    api
      .get("/section/getNews")
      .then((res) => {
        setNews(res.data.data);
        //setCurrentData(res.data.data);
      })
      .catch(() => {});
  };

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
<div>
      <div class="blog-2 blog-inner">
      <div class="container">
            <div class="row justify-content-center">
        <div class="main-content">
          <div class="row">
            {News.map((data, index) => (
              <div key={index} class="col-xl-4 col-lg-4 col-md-4">
                <div class="single-blog">
                  <div class="part-img">
                    <img
                      src={`http://43.228.126.245/aimaanAPI/storage/uploads/${data.file_name}`}
                      alt={data.alt}
                      width="300px"
                      height="250px"
                    />
                    <div class="tags"> </div>
                  </div>

                  <div class="part-txt">
                    <div class="blog-info">
                      <ul>
                        <li>
                          <span>
                            <i class="flaticon-user"></i>
                          </span>
                          {data.modified_by}
                        </li>
                        <li>
                          <span>
                            <i class="flaticon-clock"></i>
                          </span>
                          {data.creation_date}
                        </li>
                        
                      </ul>
                    </div>
                    <h3>{data.title}</h3>
                    <Link to={`/NewsEdit/${data.content_id}`}>
                       Read More
                      </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}
