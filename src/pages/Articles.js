import React, { useState, useEffect } from "react";
import api from "../constants/api";
import { Link } from "react-router-dom";
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
            .get("/content/getArticles")
            .then((res) => {
                setArticles(res.data.data);
                //setCurrentData(res.data.data);
            })
            .catch(() => { });
    };

    const getFormatedText = (title) => {
        var formatedd = title.toLowerCase()
        return formatedd.split(' ').join('-')
    }

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

            <section
                class="page-title page-title-overlay bg-cover overflow-hidden"
                data-background="assets/images/background/about.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <h1 class="text-white position-relative">
                                Article<span class="watermark-sm">Article</span>
                            </h1>
                            {/* <p class="text-white pt-4 pb-4">Cupidatat non proident sunt culpa qui officia deserunt mollit <br/> anim idest
            laborum sed ut perspiciatis.</p> */}
                        </div>
                        <div class="col-lg-3 ml-auto align-self-end">
                            <nav class="position-relative zindex-1" aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-lg-end bg-transparent mb-4 px-0">
                                    <li class="breadcrumb-item">
                                        <a href="index.html" class="text-white">
                                            Home
                                        </a>
                                    </li>
                                    <li
                                        class="breadcrumb-item text-white fw-bold"
                                        aria-current="page"
                                    >
                                        Article
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section mt-lg-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="row Article-slide px-4">
                                {Articles &&
                                    Articles.map((data) => (
                                        <div class="col-sm-6 mb-4">
                                            <div class="card border-0 rounded-lg">
                                                <div className="px-3 mb-5">

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
                                                            <img src={`http://43.228.126.245/aimaanAPI/storage/uploads/o4wzvifggaclrhiv247_askar-FM.jpg`} className="img-fluid card-img-top" alt="post-thumb" />
                                                            <div className="card-body">
                                                                {/* <p className="card-date">{data.content_dateaa}</p>  */}

                                                                <h5>{data.title}</h5>
                                                                <p className="card-date" style={{ color: 'black' }}>{data.modified_by}-{getFormattedDate(data.content_date)}</p>
                                                                <p className="description">{data.description.replace(/<[^>]*>?/gm, '').slice(0, 110)}</p>
                                                                {data.description.length > 4 && (
                                                                    <>
                                                                        <p className="read-more" onClick={() => alert('Implement your Read More logic here')}>Read More</p>
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


