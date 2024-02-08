import React, { useEffect,useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link} from 'react-router-dom';
// import bannerImage from '../../src/assets/banner/home.jpg';
import aboutusicon from "../../src/assets/banner/abudhabimosque.jpg";
import getTouch from "../../src/assets/banner/gettouch.jpg";
import api from '../constants/api';

const Home = () => {
    // const [banners, setBanners] = useState([]);
    const [blogItems, setBlogItems] = useState([]);
    const [Events, setEvents] = useState([]);
    const [videoUrls, setVideoUrls] = useState([]);
    const [aboutUs, setAboutus] = useState([]);
    const [team, setTeam] = useState([]);
    const [banners, setBanner] = useState([]);

    // Function to fetch video URLs from the API
    const stripHtmlTags = (htmlString) => {
        const doc = new DOMParser().parseFromString(htmlString, 'text/html');
        return doc.body.textContent || '';
      };
     

      const extractFirstParagraph = (html) => {
        const strippedContent = stripHtmlTags(html);
        const paragraphs = strippedContent.split('\n');
        if (paragraphs.length > 0) {
            return paragraphs[0]; // Return the first paragraph
        } else {
            return ''; // Return empty string if there are no paragraphs
        }
    };



      const getBanners = () => {
        api.get("/content/getBanners")
          .then((res) => {
            setBanner(res.data.data);
          })
          .catch((error) => {
            console.error("Error fetching about us data:", error);
          });
      };


      const getTeam = () => {
        api
            .get("/content/getAimanTeam")
            .then((res) => {
                setTeam(res.data.data);
              
            })
            .catch(() => { });
    };
    const getVideoUrls = () => {
      api
        .post('/media/getVideoUrls')
        .then((res) => {
          setVideoUrls(res.data.data);
          console.log('edit Line Item',res.data.data)
        })
        .catch(() => {
          // Handle error
        });
    };


    

const getblogItems = () => {
    api
      .post('/media/getNewsFileName')
      .then((res) => {
        setBlogItems(res.data.data);
      })
      .catch(() => {
        // message('Product Data Not Found', 'info');
      });
    };

    const getEvents = () => {
        // var formated = title.split("-").join(" ");
        api
          .get("/section/getEvents")
          .then((res) => {
            setEvents(res.data.data);
            //setCurrentData(res.data.data);
          })
          .catch(() => {});
      };

      const getAboutUs = () => {
        // var formated = title.split("-").join(" ");
        api
          .get("/content/getAboutUs")
          .then((res) => {
            setAboutus(res.data.data[0]);
            //setCurrentData(res.data.data);
          })
          .catch(() => {});
      };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Display three slides at a time
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true,
        responsive: [
          {
            breakpoint: 1140,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };

      const bannersettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Display three slides at a time
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true,
        responsive: [
          {
            breakpoint: 1140,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };

      // const PrevArrow = (props) => {
      //   const { className, style, onClick } = props;
      //   return (
      //     <div
      //       className={className}
      //       style={{ ...style, display: "block", background: "black" }}
      //       onClick={onClick}
      //     >
      //       Previous
      //     </div>
      //   );
      // };
      
      // const NextArrow = (props) => {
      //   const { className, style, onClick } = props;
      //   return (
      //     <div
      //       className={className}
      //       style={{ ...style, display: "block", background: "black" }}
      //       onClick={onClick}
      //     >
      //       Next
      //     </div>
      //   );
      // };
      

      const settingsteam = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Display one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
  //       prevArrow: <PrevArrow />, // You need to define PrevArrow and NextArrow components
  // nextArrow: <NextArrow />, // You need to define PrevArrow and NextArrow components
        autoplay: true,
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
          
        ],
    };


useEffect(() => {
// getBannerImages();
getblogItems();
getVideoUrls(); 
getEvents();
getAboutUs();
getTeam();
getBanners();

}, []);


  return (
    
    <div>
    
    {/* <div class="preloader">
        <div class="loader"><img src="assets/images/spinner.gif" alt="imagess" /></div>
    </div>
     */}
<Slider {...bannersettings}>
  {Array.isArray(banners) && banners.map((item, index) => (
    <div key={item.content_id} className="single-blog">
      <div className="part-img">
        <img
          src={`http://43.228.126.245/aimaanAPI/storage/uploads/${item.file_name}`}
          alt={`News ${item.content_id}`}
          style={{ width: '100%', height: '400px', objectFit: 'cover' }}
        />
        
      </div>
      <div className="part-txt">
      
        {/* Check if item.description is not null before accessing its properties */}
      
      </div>
    </div>
  ))}
</Slider>


 {/* Video Gallery Panel */}
 {/* <div className="video-gallery">
        <h2>Video Gallery</h2>
        <div className="container">
          <Slider {...settings}>
            {Array.isArray(videoUrls) &&
              videoUrls.map((videoUrl, index) => (
                <div key={index} className="video-item">
                  <ReactPlayer
                    url={videoUrl.description}
                    controls
                    width="96%"
                    height="370px"
                  />
                  
                </div>
              ))}
          </Slider>
        </div>
      </div> */}

<div className="col-12">

  <div className="blog-2">

<div className="container">
<div class="row justify-content-center">
            <div class="col-xl-5 col-lg-6">
                <div class="heading">
                    <h2>News</h2>
                    
                </div>
            </div>
        </div>
<Slider {...settings}>
  {Array.isArray(blogItems) && blogItems.map((item, index) => (
    <div key={item.content_id} className="single-blog">
      <div className="part-img">
        <img
          src={`http://43.228.126.245/aimaanAPI/storage/uploads/${item.news_image}`}
          alt={`News ${item.content_id}`}
          style={{ width: '380px', height: '225px' }} // Set width to 100%
        />
        
      </div>
      <div className="part-txt">
        <div className="blog-info">
          <ul>
            <li>
              <span>
                <i className="flaticon-user"></i>
              </span>
              Admin
            </li>
            <li>
              <span>
                <i className="flaticon-clock"></i>
              </span>
              {item.content_date.split(' ')[0]}
            </li>
            {/* <li>
              <span>
                <i className="flaticon-bubble-speak"></i>
              </span>
              {item.comments}
            </li> */}
          </ul>
        </div>
        {/* Check if item.description is not null before accessing its properties */}
        {item.description !== null && (
          <>
            <h3 dangerouslySetInnerHTML={{ __html: `${item.title.slice(0, 50).replace(/<p.*?>/g, '')}...` }}></h3>
            <Link
              to={`/NewsEdit/${item.content_id}`}
            >
              Read More
            </Link>
          </>
        )}
      </div>
    </div>
  ))}
</Slider>
</div>
</div>

<div className="blog-2">
<div class="row justify-content-center">
            <div class="col-xl-5 col-lg-6">
                <div class="heading">
                    <h2>Events</h2>
                    
                </div>
            </div>
        </div>
  <div className="container">
    <Slider {...settings}>
      {Array.isArray(Events) && Events.map((item, index) => (
        <div key={item.content_id} className="single-blog">
          <div className="part-img">
            <img
              src={`http://43.228.126.245/aimaanAPI/storage/uploads/${item.file_name}`}
              alt={`Events ${item.content_id}`}
              style={{ width: '380px', height: '225px' }} // Adjust the width and height values as needed
            />
            <div className="tags">
              {/* <span>{item.title}</span> */}
            </div>
          </div>
          <div className="part-txt">
            <div className="blog-info">
              <ul>
                <li>
                  <span>
                    <i className="flaticon-user"></i>
                  </span>
                  Admin
                </li>
                <li>
                  <span>
                    <i className="flaticon-clock"></i>
                  </span>
                  {item.content_date.split(' ')[0]}
                </li>
                {/* <li>
                  <span>
                    <i className="flaticon-bubble-speak"></i>
                  </span>
                  {item.comments}
                </li> */}
              </ul>
            </div>
            {/* Check if item.description is not null before accessing its properties */}
            {item.description !== null && (
              <>
                <h3 dangerouslySetInnerHTML={{ __html: `${item.title.slice(0, 50).replace(/<p.*?>/g, '')}...` }}></h3>
                <Link
                  to={`/EventsEdit/${item.content_id}`}
                >
                  Read More
                </Link>
              </>
            )}
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>

   
    <div class="feature">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-4 col-lg-4 col-md-6">
                    <div class="single-box">
                        <div class="part-icon">
                            <span>
                                <i class="flaticon-technology"></i>
                            </span>
                        </div>
                        <div class="part-txt">
                            <h3>Simplicity And Choice</h3>
                            <p>There are many varations of passages of as Lorem Ipsum available but the majorit have suffered alteration in some form</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6">
                    <div class="single-box">
                        <div class="part-icon">
                            <span>
                                <i class="flaticon-gear"></i>
                            </span>
                        </div>
                        <div class="part-txt">
                            <h3>Worry Free Experience</h3>
                            <p>There are many varations of passages of as Lorem Ipsum available but the majorit have suffered alteration in some form</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6">
                    <div class="single-box">
                        <div class="part-icon">
                            <span>
                                <i class="flaticon-bar-chart"></i>
                            </span>
                        </div>
                        <div class="part-txt">
                            <h3>Performance Scale</h3>
                            <p>There are many varations of passages of as Lorem Ipsum available but the majorit have suffered alteration in some form</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
  
    <div class="about about-2">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-xl-6 col-lg-6 col-md-8">
                    <div class="part-img">
                        <img src={`http://43.228.126.245/aimaanAPI/storage/uploads/${aboutUs.file_name}`}alt="imagess" width="600px" height="550px"/>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-8">
                    <div class="part-txt">
                        <div class="heading" style={{textAlign:"center"}}>
                            <h5>{aboutUs && aboutUs.title}</h5>
                        
                        </div>
                        <p>{extractFirstParagraph(aboutUs.description)}</p>           
                        <a href="/aboutus" class="def-btn">Read More</a>
                        <div class="boxes-2">
                            <div class="single-box">
                                <div class="img">
                                <img src={aboutusicon} alt="signature" width="50px" height="60px"/>
                                </div>
                                <div class="txt">
                                    <h3>AIMAN SANGAM was started on </h3>
                                    <span>18th of Rabiul Awwal 1401 (23rd Jan, 1981)</span>
                                </div>
                            </div>
                          
                         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div class="partner partner-2">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-9 col-lg-9">
                    <div class="heading heading-2">
                        <h5>Our Partner</h5>
                        <h2>Processed Payments 252,854 Customers<br/> 1.5M Users and Growing</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                    </div>
                </div>
            </div>
            <div class="bg">
                <div class="brand-slider owl-carousel">
                    <div class="single-img">
                        <img src="assets/images/brand-1.png" alt="logo" />
                    </div>
                    <div class="single-img">
                        <img src="assets/images/brand-2.png" alt="logo" />
                    </div>
                    <div class="single-img">
                        <img src="assets/images/brand-3.png" alt="logo" />
                    </div>
                    <div class="single-img">
                        <img src="assets/images/brand-4.png" alt="logo" />
                    </div>
                    <div class="single-img">
                        <img src="assets/images/brand-5.png" alt="logo" />
                    </div>
                    <div class="single-img">
                        <img src="assets/images/brand-6.png" alt="logo" />
                    </div>
                    <div class="single-img">
                        <img src="assets/images/brand-3.png" alt="logo" />
                    </div>
                    <div class="single-img">
                        <img src="assets/images/brand-4.png" alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    </div>

  
   
    <div class="project">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-5 col-lg-6">
                    <div class="heading heading-2">
                        <h5>RECENT PROJECTS</h5>
                        <h2>Our Best Recent Projects</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12 col-lg-12">
                    <div class="all-projects">
                        <div class="project-slider owl-carousel">
                            <div class="single-box">
                                <div class="part-img">
                                    <img src="assets/images/project-1.jpg" alt="imagess" />
                                </div>
                                <div class="part-txt">
                                    <a href="portfolio-details.html"><i class="flaticon-link"></i></a>
                                    <div class="title">
                                        <h3>Business Agreement</h3>
                                        <p>Considering of the agreement</p>
                                    </div>
                                </div>
                            </div>
                            <div class="single-box">
                                <div class="part-img">
                                    <img src="assets/images/project-2.jpg" alt="imagess" />
                                </div>
                                <div class="part-txt">
                                    <a href="portfolio-details.html"><i class="flaticon-link"></i></a>
                                    <div class="title">
                                        <h3>Business Agreement</h3>
                                        <p>Considering of the agreement</p>
                                    </div>
                                </div>
                            </div>
                            <div class="single-box">
                                <div class="part-img">
                                    <img src="assets/images/project-3.jpg" alt="imagess" />
                                </div>
                                <div class="part-txt">
                                    <a href="portfolio-details.html"><i class="flaticon-link"></i></a>
                                    <div class="title">
                                        <h3>Business Agreement</h3>
                                        <p>Considering of the agreement</p>
                                    </div>
                                </div>
                            </div>
                            <div class="single-box">
                                <div class="part-img">
                                    <img src="assets/images/project-4.jpg" alt="imagess" />
                                </div>
                                <div class="part-txt">
                                    <a href="portfolio-details.html"><i class="flaticon-link"></i></a>
                                    <div class="title">
                                        <h3>Business Agreement</h3>
                                        <p>Considering of the agreement</p>
                                    </div>
                                </div>
                            </div>
                            <div class="single-box">
                                <div class="part-img">
                                    <img src="assets/images/project-5.jpg" alt="imagess" />
                                </div>
                                <div class="part-txt">
                                    <a href="portfolio-details.html"><i class="flaticon-link"></i></a>
                                    <div class="title">
                                        <h3>Business Agreement</h3>
                                        <p>Considering of the agreement</p>
                                    </div>
                                </div>
                            </div>
                            <div class="single-box">
                                <div class="part-img">
                                    <img src="assets/images/project-6.jpg" alt="imagess" />
                                </div>
                                <div class="part-txt">
                                    <a href="portfolio-details.html"><i class="flaticon-link"></i></a>
                                    <div class="title">
                                        <h3>Business Agreement</h3>
                                        <p>Considering of the agreement</p>
                                    </div>
                                </div>
                            </div>
                            <div class="single-box">
                                <div class="part-img">
                                    <img src="assets/images/project-7.jpg" alt="imagess" />
                                </div>
                                <div class="part-txt">
                                    <a href="portfolio-details.html"><i class="flaticon-link"></i></a>
                                    <div class="title">
                                        <h3>Business Agreement</h3>
                                        <p>Considering of the agreement</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
<div class="team">
     <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-5 col-lg-5">
                    <div class="heading">
                        <h5>OUR Team</h5>
                       
                    </div>
                </div>
            </div>
        <div class="justify-content-center">
              <Slider {...settingsteam}>
                  {Array.isArray(team) && team.map((item, index) => (
                    <div key={item.content_id} class="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                        <div class="single-box">
                            <div class="part-img">
                                <img src="assets/images/team-1.jpg" alt="imagess" />
                            </div>
                            <div class="part-txt">
                                <div class="txt">
                                    <div class="title">
                                        <a href="team-details.html">{item.title}</a>
                                      
                                    </div>
                                    <p>{stripHtmlTags(item.description)}</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
</div>
   
    <div class="fun-fact">
        <div class="container">
            <div class="bg">
                <div class="row no-gutters justify-content-lg-between justify-content-center">
                    <div class="col-xl-2 col-lg-2 col-sm-4">
                        <div class="single-box">
                            <div class="part-icon">
                                <span><i class="flaticon-multiple-users-silhouette"></i></span>
                            </div>
                            <div class="part-txt">
                                <h2><span class="odometer" data-count="3800">0</span>+</h2>
                                <p>Happy Customer</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-sm-4">
                        <div class="single-box">
                            <div class="part-icon">
                                <span><i class="flaticon-project"></i></span>
                            </div>
                            <div class="part-txt">
                                <h2><span class="odometer" data-count="1832">0</span>+</h2>
                                <p>Project Completed</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-sm-4">
                        <div class="single-box">
                            <div class="part-icon">
                                <span><i class="flaticon-multiple-users-silhouette"></i></span>
                            </div>
                            <div class="part-txt">
                                <h2><span class="odometer" data-count="864">0</span>+</h2>
                                <p>Team Members</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-sm-4">
                        <div class="single-box">
                            <div class="part-icon">
                                <span><i class="flaticon-hot-coffee-rounded-cup-on-a-plate-from-side-view"></i></span>
                            </div>
                            <div class="part-txt">
                                <h2><span class="odometer" data-count="9812">0</span>+</h2>
                                <p>Cup Of Coffee</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-sm-4">
                        <div class="single-box">
                            <div class="part-icon">
                                <span><i class="flaticon-trophy"></i></span>
                            </div>
                            <div class="part-txt">
                                <h2><span class="odometer" data-count="758">0</span>+</h2>
                                <p>Winning Awards</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div class="cta-2"style={{ backgroundImage: `url(${getTouch})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8 col-lg-8">
                    <div class="part-txt">
                        <h2>Let’s Start with Free Membership</h2>
                        <Link to="/Membership" className="def-btn def-btn-2">Get Started for Free</Link>                    </div>
                </div>
            </div>
        </div>
    </div>
  
   
  
    <div class="call-back">
        <div class="container">
            <div class="bg">
                <div class="row align-items-center">
                    <div class="col-xl-8 col-lg-8 col-md-8">
                        <div class="part-txt">
                           
                            <h2 style={{fontSize:"50px", marginLeft:"80px"}}>Get in Touch</h2>
                        </div>
                    </div>
                    <div class=" col-lg-2">
                        <div class="form">
                            <form>
                            <Link to="/contact-page">
                            <button style={{marginLeft:"8px"}}>Request</button>

</Link>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
    </div>
  );
}

export default Home;
