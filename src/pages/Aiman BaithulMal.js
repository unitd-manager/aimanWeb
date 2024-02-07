import React, { useState, useEffect } from "react";
import api from "../constants/api";
import bannerImage from '../../src/assets/banner/home.jpg';
import NavMenu from "../components/NavMenu";
import ReactHtmlParser from "react-html-parser";
//import moment from 'moment';
// import imageBase from "../../constants/image.js"

export default function Article() {
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
      .get("/content/getBaithulmaal")
      .then((res) => {
        setArticles(res.data.data);
        //setCurrentData(res.data.data);
      })
      .catch(() => {});
  };

  // const getFormatedText = (title) => {
  //   var formatedd = title.toLowerCase();
  //   return formatedd.split(" ").join("-");
  // };

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
    

      <div class="breadcrumb portfolio-breadcrumb" style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-3 col-lg-3">
              <div class="part-txt">
                <h1>BaithulMal</h1>
                <ul>
                  <li>Home</li>
                  <li>-</li>
                  <li>BaithulMal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
<br/><br/>
      <div class="container">
        <div class="row">
          {Articles &&
            Articles.map((data, index) => (
              <div key={index} className="text-center" 
              >
                
                {/* <div class="col-lg-8 rounded-sm pr-5"> */}
                {/* {data ? data.title : "Go to Home"} */}
                {/* <h3 class="mb-3 text-dark">{data.title}</h3> */}
                {/* <p className="text-center" style={{ color: "black" }}>
                  {getFormattedDate(data.content_date)}
                </p> */}

                <img
                  src={`http://43.228.126.245/aimaanAPI/storage/uploads/${data.file_name}`}
                  
                  class1="text-center" 
                  class="col-xl-8 col-lg-8 col-sm-6"
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
                  <p className="description">
                    {ReactHtmlParser(data.description)}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
