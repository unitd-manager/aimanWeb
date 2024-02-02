import React, { useState, useEffect } from "react";
import api from "../constants/api";
import { Link } from "react-router-dom";
import NavMenu from "../components/NavMenu";
//import moment from 'moment';
// import imageBase from "../../constants/image.js"

export default function Articles() {
  const [Articles, setArticles] = useState([]);

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
    getArticles();
    //getCategory();
  }, []);

  const getArticles = () => {
    // var formated = title.split("-").join(" ");
    api
      .get("/content/getArticles")
      .then((res) => {
        setArticles(res.data.data);
        //setCurrentData(res.data.data);
      })
      .catch(() => {});
  };

  const getFormatedText = (title) => {
    var formatedd = title.toLowerCase();
    return formatedd.split(" ").join("-");
  };

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
                <h1>portfolio</h1>
                <ul>
                  <li>Home</li>
                  <li>-</li>
                  <li>Portfolio</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="section mt-lg-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="row Article-slide px-4">
                {Articles &&
                  Articles.map((data, index) => (
                    <div key={index} class="col-xl-5 col-lg-4 col-sm-6">
                      <div class="single-box">
                        <div class="part-img">
                          <Link
                            to={getFormatedText(data.title)}
                            state={{ data: data }}
                            className="link"
                          >
                            <div className="card border-0">
                              {/* <img
                                                                src={`${imageBase}${data.file_name}`}
                                                                className="img-fluid card-img-top"
                                                                alt="post-thumb"
                                                            /> */}
                              <img
                                src={`http://43.228.126.245/aimaanAPI/storage/uploads/${data.file_name}`}
                                className="img-fluid card-img-top"
                                class="col-xl-10 col-lg-1 col-sm-6"
                                alt="post-thumb"
                              />
                              <div className="card-body">
                                {/* <p className="card-date">{data.content_dateaa}</p>  */}

                                <h5>{data.title}</h5>
                                <p
                                  className="card-date"
                                  style={{ color: "black" }}
                                >
                                  {data.modified_by}-
                                  {getFormattedDate(data.content_date)}
                                </p>
                                <p className="description">
                                  {data.description
                                    .replace(/<[^>]*>?/gm, "")
                                    .slice(0, 110)}
                                </p>
                                {data.description.length > 4 && (
                                  <>
                                    <p
                                      className="read-more"
                                      onClick={() =>
                                        alert(
                                          "Implement your Read More logic here"
                                        )
                                      }
                                    >
                                      Read More
                                    </p>
                                  </>
                                )}
                                <br />
                                <br></br>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            {/* <div class="col-lg-4">
                            <div class="rounded-sm shadow bg-white pb-4"> */}

            {/* 
                                <div class="widget">
                                    <h4>Latest Article</h4>
                                    <ul class="list-unstyled list-bordered">
                                        {Articles && Articles.slice(0, 3).map(data => (
                                            <li class="media border-bottom py-3"> */}
            {/* <img src={`${imageBase}${data.file_name}`} class="rounded-sm mr-3" alt="post-thumb" /> */}
            {/* <img src={`http://43.228.126.245/unitd-api/storage/uploads/${data.file_name}`} className="img-fluid card-img-top" alt="post-thumb" />  */}
            {/* <img src="assets/images/men/sm-img-1.jpg" class="rounded-sm mr-3" alt="post-thumb"/> */}
            {/* <div class="media-body">

                                                    <h6 class="mt-0"> <Link
                                                        to={getFormatedText(data.title)}
                                                        state={{ data: data }}
                                                        className="text-dark">{data.title}</Link></h6>

                                                </div>
                                            </li>

                                        ))}
                                    </ul>
                                </div>


                            </div>
                        </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
