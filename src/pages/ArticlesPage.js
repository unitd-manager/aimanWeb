import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { useLocation, useParams } from "react-router-dom";
import api from "../constants/api";
import { Link } from "react-router-dom";
import bannerImage from '../../src/assets/banner/home.jpg';
//import NavMenu from "../components/NavMenu";
import ReactHtmlParser from "react-html-parser";
// import imageBase from "../../../constants/image.js";

export default function ArticlesPage(props) {
  const [blogs, setBlogs] = useState([]);
  const [news, setNews] = useState([]);
  const [displayedNews, setDisplayedNews] = useState(3);
  const articlesPerPage = 3;
  const { title } = useParams();

  const getBlogs = () => {
    var formated = title.split("-").join(" ");
    api.post("/content/getNewsandEvents", { title: formated }).then((res) => {
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

  // Function to get the previous article
  const getPreviousArticle = () => {
    const prevIndex = currentArticleIndex - 1;
    const prevArticle = news[prevIndex];
    return prevArticle;
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
  const [currentArticleIndex, setCurrentArticleIndex] = useState(null);

  const loadMoreNews = () => {
    setDisplayedNews((prevCount) => prevCount + articlesPerPage);
  };

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

  // Function to get the next article
  const getNextArticle = () => {
    const nextIndex = currentArticleIndex + 1;
    const nextArticle = news[nextIndex];
    return nextArticle;
  };

  return (
    <>
      <div class="breadcrumb portfolio-breadcrumb" 
      style={{backgroundImage: `url(${bannerImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center" }}>
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

      {/* <div class="blog-details">
        {blogs.map((data) => (
          <div key={data.id} class="blog-details">
           
            <div class="main-txt">
              <p>{ReactHtmlParser(data.description)}</p>
            </div>
           
          </div>
        ))}
      </div> */}
      <div class="blog-inner">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-8">
              <div class="blog-details">
                <div key={data.id} class="blog-details">
                  <div class="title">
                    <h3>{data.title}</h3>
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
                  <div className="text-left">
                  <p className="description" style={{ fontSize:"14px"}} >
                    {ReactHtmlParser(data.description)}
                  </p>
                </div>

                  {/* <div class="other-option">
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
                    </div> */}

                  <div class="blog-nav">
                    <div class="single-nav prev-blog">
                      {/* <div class="img">
                        <a href="blog-details.html">
                          <img
                            src={http://43.228.126.245/aimaanAPI/storage/uploads/${data.file_name}}
                            alt="image"
                          ></img>
                        </a>
                      </div> */}

                      <div class="txt">
                        {getNextArticle() && (
                          <Link
                            to={`/NewArticles/${getFormatedText(
                              getNextArticle().title
                            )}`}
                            className="link"
                            style={{ fontSize: 'small' }}
                          >
                            {getNextArticle().title}
                          </Link>
                        )}
                        <span style={{ color: 'blue' }}>Next Article &gt;</span>
                      </div>
                    </div>
                    <div class="single-nav next-blog">
                      <div class="img">
                        {getPreviousArticle() && (
                          <Link
                            to={`/NewArticles/${getFormatedText(
                              getPreviousArticle().title
                            )}`}
                            className="link"
                            style={{ fontSize: 'small' }}
                          >
                            {getPreviousArticle().title}
                            
                          </Link>
                        )}
                      </div>
                      <div class="txt">
                        <span style={{ color: 'blue' }}>&lt; Previous Article</span>
                      </div>
{/* 
                      <div class="img">
                        <a href="blog-details.html">
                          <img
                            src="assets/images/blog-nav-2.jpg"
                            alt="image"
                          ></img>
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6">
              <div class="sidebar">
                <div class="recent-blog">
                  <h3>Most Popular</h3>
                  <ul>
                    {news &&
                      news.slice(0, displayedNews).map((data) => (
                        <li key={data.id}>
                          {/* <Link
                            to={getFormatedText(data.title)}
                            state={{ data: data }}
                            className="link"
                          ></Link> */}

                          <div class="img">
                            <img
                              src={`http://43.228.126.245/aimaanAPI/storage/uploads/${data.file_name}`}
                              width="200px"
                              height="60px"
                              alt="post-thumb"
                            />
                          </div>
                          <div class="txt">
                            {/* <Link
                              to={getFormatedText(data.title)}
                              state={{ data: data }}
                              className="link"
                            > */}
                            <Link
                              to={`/NewArticles/${data.title}`}
                              className="link"
                            >
                              {" "}
                              <a href="#">{data.title.slice(0, 50)}</a>
                            </Link>
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
                            {/* <Link to={/NewArticles/${data.content_id}}>
                              {" "}
                              Read More
                            </Link> */}
                          </div>
                        </li>
                      ))}
                  </ul>
                  <div class="load-more-btn text-center mt-4 mb-4">
                    <Button onClick={loadMoreNews}>Load More</Button>
                  </div>
                </div>
              </div>

              <div class="row justify-content-center">
                <div class="col-xl-12 col-lg-4 col-md-6">
                  <div class="sidebar">
                    <div class="recent-blog">
                      <h3>Hot News</h3>
                      <div class="row">
                        {news &&
                          news.slice(0, 4).map((data) => (
                            <div key={data.id} class="col-md-6 mb-4">
                              <div class="img">
                                <img
                                 src={`http://43.228.126.245/aimaanAPI/storage/uploads/${data.file_name}`}
                                  width="200px"
                                  height="60px"
                                  alt="post-thumb"
                                />
                              </div>
                              <div class="txt">
                                <Link
                                  to={`/NewArticles/${data.title}`}
                                  className="link"
                                >
                                 <a href="#" style={{ fontSize: 'small' }}>{data.title.slice(0, 50)}</a>

                                </Link>
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
        </div>
      </div>
    </>
  );
}