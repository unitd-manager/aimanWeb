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

//   const getArticlenews = () => {
//   api.post("/getBlogTitle", { title: formated }).then((res) => {
//     setBlogs(res.data.data);
//   });
// };


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
      <div class="blog-inner">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-8">
              <div class="blog-details">
                <div class="title">
                  <h2>{data.title}</h2>
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
                      {getFormattedDate(data.content_date)}
                    </li>
                  </ul>
                </div>
                <div class="main-img">
                  <img
                    src={`http://43.228.126.245/aimaanAPI/storage/uploads/${data.file_name}`}
                    className="img-fluid card-img-top"
                    alt="post-thumb"
                  />
                </div>
                <div class="main-txt">
                  <p>{ReactHtmlParser(data.description)}</p>
                </div>

                <div class="other-option">
                  <div class="share">
                    <h3>Share :</h3>
                    <a href="#" class="fb">
                      <i class="flaticon-facebook"></i>
                    </a>
                    <a href="#" class="tw">
                      <i class="flaticon-twitter"></i>
                    </a>
                    <a href="#" class="pin">
                      <i class="flaticon-pinterest"></i>
                    </a>
                    <a href="#" class="ld">
                      <i class="flaticon-linkedin"></i>
                    </a>
                    <a href="#" class="ggl">
                      <i class="flaticon-google-plus-logo"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6">
              <div class="sidebar">
                <div class="recent-blog">
                  <h3>Recent Posts</h3>
                  <ul>
                    {news &&
                      news.slice(0, 3).map((data) => (
                        <li key={data.id}>
                          {/* <Link
                            to={getFormatedText(data.title)}
                            state={{ data: data }}
                            className="link"
                          ></Link> */}
                            <Link to={`/NewArticles/${data.content_id}`}> Read More</Link>
                          <div class="img">
                            <img
                              src={`http://43.228.126.245/aimaanAPI/storage/uploads/${data.file_name}`}
                              width="200px"
                              height="60px"
                              alt="post-thumb"
                            />
                          </div>
                          <div class="txt">
                            <a href="#">{data.title.slice(0, 50)}</a>
                            <span class="info">
                              <span class="icon">
                                <i class="flaticon-user"></i>
                              </span>
                              By {data.modified_by}
                            </span>
                            <span class="info">
                              <span class="icon">
                                <i class="flaticon-school-calendar"></i>
                              </span>
                              {/* {data.content_date} */}
                              {new Date(data.content_date).toLocaleDateString(
                                "en-US"
                              )}
                            </span>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
