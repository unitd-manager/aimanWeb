import React, { useState, useEffect } from "react";
import api from "../constants/api";
import { Link } from "react-router-dom";
import bannerImage from "../../src/assets/banner/home.jpg";
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


  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return (
    <>
      <div
        class="breadcrumb portfolio-breadcrumb"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
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

      <div>
        <div class="blog-2 blog-inner">
          <div class="container">
            <div class="row justify-content-center">
              <div class="main-content">
                <div class="row">
                  {Articles.map((data, index) => (
                    <div key={index} class="col-xl-5 col-lg-2 col-md-1">
                      <div class="single-blog">
                        <div class="part-img">
                          <img
                            src={`http://43.228.126.245/aimaanAPI/storage/uploads/${data.file_name}`}
                            alt={data.alt}
                            width="500px"
                            height="290px"
                            
                          />
                          <div class="tags"> </div>
                        </div>

                        <div class="part-txt"style={{backgroundColor:"#110d54"}}>
                          <div class="blog-info" >
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
                                {formatDate(data.content_date)}
                              </li>
                            </ul>
                          </div>
                          <h3 style={{color:"#FFFFFF"}}>{data.title}</h3>
                          <Link
                            to={getFormatedText(data.title)}
                            state={{ data: data }}
                            className="link"
                            style={{ color: "#FFFFFF" }}
                          >
                            {" "}
                            Read More
                          </Link>

                        
                          <p className="description" style={{fontSize:"14px", paddingTop:"14px", color:"#FFFFFF"}}>
                            {data.description
                              .replace(/<[^>]*>?/gm, "")
                              .slice(0, 72)}
                          </p>
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
    </>
  );
}
