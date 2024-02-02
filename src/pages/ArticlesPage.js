import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../constants/api";
import { Link } from "react-router-dom";
import NavMenu from "../components/NavMenu";
import ReactHtmlParser from "react-html-parser";
// import imageBase from "../../../constants/image.js";

export default function ArticlesPage(props) {
  const [blogs, setBlogs] = useState([]);
  const [news, setNews] = useState([]);

  const getBlogs = () => {
    api.get("/content/getArticles").then((res) => {
      setBlogs(res.data.data);
    });
  };

  const getNews = () => {
    api.get("/section/getNews").then((res) => {
      setNews(res.data.data);
    });
  };

  const getFormatedText = (title) => {
    var formatedd = title.toLowerCase();
    return formatedd.split(" ").join("-");
  };
  console.log(blogs);
  console.log(getFormatedText);
  const location = useLocation();
  console.log(props, " props");
  console.log(location, " useLocation Hook");
  const data = location.state?.data;

  React.useEffect(() => {
    //AOS.init();
    getBlogs();
    getNews();
    //getCategory();
  }, []);
  const getFormattedDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

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

      <div class="breadcrumb portfolio-breadcrumb">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-3 col-lg-3">
              <div class="part-txt">
                <h1>Article</h1>
                <ul>
                  <li>Home</li>
                  <li>-</li>
                  <li>Article</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="section mt-lg-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 rounded-sm pr-5">
              {/* {data ? data.title : "Go to Home"} */}
              {/* <h3 class="mb-3 text-dark">{data.title}</h3> */}
              <p className="text-left" style={{ color: "black" }}>
                {getFormattedDate(data.content_date)}
              </p>

              <img
                src={`http://43.228.126.245/aimaanAPI/storage/uploads/${data.file_name}`}
                className="img-fluid card-img-top"
                alt="post-thumb"
              />
              {/* <img
                src={`${imageBase}${data.file_name}`}
                className="irounded-sm img-fluid w-100 mb-5"
                alt="post-thumb"
              /> */}
              {/* <img src="assets/images/men/lg-img-1.jpg" class="rounded-sm img-fluid w-100 mb-5" alt="post-thumb"/> */}
              {/* <p class="text-color card-date position-relative d-inline-block">
                {moment(data.date.substring(0, 10), "YYYY-MM-DD").format(
                  "MMMM Do YYYY"
                )}
              </p> */}

              <p></p>
              <div className="text-left">
                {ReactHtmlParser(data.description)}
              </div>
              <div class="my-5">
                <h5 class="d-inline-block mr-3">Share:</h5>
                <ul class="list-inline d-inline-block">
                  <li class="list-inline-item">
                    <a href="index.html" class="text-color">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="index.html" class="text-color">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="index.html" class="text-color">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="index.html" class="text-color">
                      <i class="fa fa-google-plus"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="rounded-sm shadow bg-white pb-4">
                <div className="widget">
                  <h4>Most Popular</h4>
                  <ul className="list-unstyled list-bordered">
                    {news &&
                      news.slice(0, 2).map((data) => (
                        <li key={data.id} className="media border-bottom py-3">
                          <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="single-box">
                              <div className="part-img">
                                {/* Adjust the image source accordingly */}
                                <img
                                  src={`http://43.228.126.245/aimaanAPI/storage/uploads/${data.file_name}`}
                                  className="img-fluid card-img-top"
                                  alt="post-thumb"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-8 col-lg-8 col-sm-6">
                            <div className="media-body">
                              <h6 className="mt-0">
                                <Link
                                  to={getFormatedText(data.title)}
                                  state={{ data: data }}
                                  className="text-dark"
                                >
                                  {data.title}
                                </Link>
                              </h6>
                              {/* Add any additional content you want to display */}
                              {/* For example, data.description */}
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </>
  );
}
