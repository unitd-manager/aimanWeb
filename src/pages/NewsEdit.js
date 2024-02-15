import React, { useState, useEffect} from "react";
import {  useParams } from 'react-router-dom';
import ReactHtmlParser from "react-html-parser";

import api from "../constants/api";
// import NavMenu from '../components/NavMenu'
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
                                <h3>{image.title}</h3><br/>
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="text-left">
                  <p className="description" style={{ fontSize:"14px"}} >
                    {ReactHtmlParser(image.description)}
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
      </div>
    </>
  );
}
