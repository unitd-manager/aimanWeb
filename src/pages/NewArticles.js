import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../constants/api";
// import { Link } from "react-router-dom";
// import NavMenu from "../components/NavMenu";
import ReactHtmlParser from "react-html-parser";
// import imageBase from "../../../constants/image.js";

export default function ArticlesPage(props) {

  const [news1, setNews1] = useState([]);


//   const getArticlenews = () => {
//   api.post("/getBlogTitle", { title: formated }).then((res) => {
//     setBlogs(res.data.data);
//   });
// };

const {title}=useParams();

useEffect(() => {
    const getNewsById = () => {
        var formated = title.split("-").join(" ");
        api.post("section/getMostPopularnews", { title: formated }).then((res) => {
          setNews1(res.data.data);
        });
      };

  getNewsById();
}, [title]); 


 


  return (
    <>
      

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
            {news1.map((data, index) => (
              <div key={index} class="col-xl-8 col-lg-4 col-md-4">
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
                    {/* <li>
                      <span>
                        <i class="flaticon-clock"></i>
                      </span>
                      {getFormattedDate(data.content_date)}
                    </li> */}
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

               
              </div>
            </div>
           
                ))}
          </div>
        </div>
      </div>

    </>
  );
}
