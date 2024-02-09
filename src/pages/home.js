import React, { useEffect,useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link} from 'react-router-dom';
// import bannerImage from '../../src/assets/banner/home.jpg';
import aboutusicon from "../../src/assets/banner/abudhabimosque.jpg";
import getTouch from "../../src/assets/banner/gettouch.jpg";
import api from '../constants/api';
import HeroSliderTwo from '../components/HeroSliderTwo';

const Home = () => {
    // const [banners, setBanners] = useState([]);
    const [blogItems, setBlogItems] = useState([]);
    const [Events, setEvents] = useState([]);
    const [videoUrls, setVideoUrls] = useState([]);
    const [aboutUs, setAboutus] = useState([]);
    const [team, setTeam] = useState([]);
    const [homeServices, setHomeServices] = useState([]);
    const [homeResources, setHomeResources] = useState([]);
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

    const getHomeServices = () => {
      api
          .get("/content/getAimanHomeServices")
          .then((res) => {
              setHomeServices(res.data.data);
            
          })
          .catch(() => { });
     };

     const getHomeResources = () => {
      api
          .get("/content/getAimanHomeResources")
          .then((res) => {
              setHomeResources(res.data.data);
            
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


    
// const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000, // Adjust the speed as needed
//   };
 // const { id } = useParams();
   // Get Product data By product id
// const getBannerImages = () => {
// api
//   .post('/media/getMediaFileName')
//   .then((res) => {
//     setBanners(res.data.data);
//   })
//   .catch(() => {
//     // message('Product Data Not Found', 'info');
//   });
// };
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Adjust the speed as needed
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
getHomeServices();
getHomeResources();
getBanners();

}, []);
  return (
    
    <div>
    
    {/* <div class="preloader">
        <div class="loader"><img src="assets/images/spinner.gif" alt="imagess" /></div>
    </div>
     */}
    <div class="header-2">
        <div class="top-header">
            <div class="container">
                <div class="bg">
                    <div class="row justify-content-between align-items-center">
                       
                      
                    </div>
                </div>
            </div>
        </div>
       
    </div>
   
<HeroSliderTwo />

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
          <div className="part-txt">
            <div className="blog-info">
              <ul>
                <li>
                  <span>
                    <i className="flaticon-user"></i>
                  </span>
                  By {item.created_by}
                </li>
                <li>
                  <span>
                    <i className="flaticon-clock"></i>
                  </span>
                  {item.content_date}
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
                <h3 dangerouslySetInnerHTML={{ __html: `${item.description.slice(0, 20).replace(/<p.*?>/g, '')}...` }}></h3>
                <Link
                  to={`/NewsEdit/${item.content_id}`}
                >
                  Read More
                </Link>
              </>
            )}
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
            {Array.isArray(homeServices) && homeServices.map((item, index) => (
                <div class="col-xl-4 col-lg-4 col-md-6">
                    <div class="single-box">
                        <div class="part-icon">
                            <span>
                                <i class="flaticon-technology"></i>
                            </span>
                        </div>
                        <div class="part-txt">
                            <h3>{item.title}</h3>
                            <p>{stripHtmlTags(item.description)}</p>
                        </div>
                    </div>
                </div>
              ))}
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
     
    <div class="project">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-5 col-lg-6">
                    <div class="heading heading-2">
                        <h5>RESOURCES</h5>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12 col-lg-12">
                    <div className="all-projects">
                        <div className="project-slider owl-carousel">
                            {Array.isArray(homeResources) && homeResources.map((item, index) => (
                                <div key={item.content_id} className="single-box">
                                    <div className="part-img">
                                        <img
                                            src={`http://43.228.126.245/aimaanAPI/storage/uploads/${item.file_name}`}
                                            alt={`Resources ${item.content_id}`}
                                            style={{ width: '380px', height: '225px' }} // Set width to 100%
                                        />        
                                    </div>
                                    <div className="part-txt">
                                        <a href="portfolio-details.html"><i class="flaticon-link"></i></a>
                                        <div className="title">
                                            <h3>{item.title}</h3>
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
  
<div class="team">
     <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-5 col-lg-5">
                    <div class="heading">
                        <h5>OUR Team</h5>
                        <h2>Our Creative Team Member</h2>
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
    <br></br>
  
   
  
    {/* <div class="call-back">
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
    </div> */}
  
    {/* <div class="footer">
        <div class="container">
            <div class="main-footer">
                <div class="row justify-content-between">
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="about-txt">
                            <h3>About Us Company</h3>
                            <p>There are many variations of passage of Lorem Ipsum available, but the maj ority have suffered alteration</p>
                            <ul>
                                <li><span><i class="flaticon-pin"></i></span>Demo Address #8901 Marmora Road Chi Minh City, Vietnam</li>
                                <li><span><i class="flaticon-phone-call"></i></span>0800-123456 (24/7 Support Line)</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-sm-6">
                        <div class="link">
                            <h3>Our Services</h3>
                            <ul>
                                <li><a href="service-details.html">Business</a></li>
                                <li><a href="service-details.html">Marketing</a></li>
                                <li><a href="service-details.html">Management</a></li>
                                <li><a href="service-details.html">Accounting</a></li>
                                <li><a href="service-details.html">Training</a></li>
                                <li><a href="service-details.html">Consultation</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-sm-6">
                        <div class="link">
                            <h3>Useful Links</h3>
                            <ul>
                                <li><a href="blog-l-bar.html">Blog</a></li>
                                <li><a href="/">Client Area</a></li>
                                <li><a href="/">Support</a></li>
                                <li><a href="faq.html">FAQ's</a></li>
                                <li><a href="/">Newsletter</a></li>
                                <li><a href="/">Events</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="newsletter">
                            <h3>Newsletter</h3>
                            <p>Subscribe our newsletter to get our latest update all blog & news</p>
                            <form>
                                <input type="email" placeholder="Your Email Address" required />
                                <button><i class="flaticon-send"></i></button>
                            </form>
                            <div class="social">
                                <a href="/" class="fb"><i class="flaticon-facebook"></i></a>
                                <a href="/" class="tw"><i class="flaticon-twitter"></i></a>
                                <a href="/" class="ggl"><i class="flaticon-google-plus-logo"></i></a>
                                <a href="/" class="ld"><i class="flaticon-linkedin"></i></a>
                                <a href="/" class="yt"><i class="flaticon-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6">
                        <p>Copyright &copy; 2021 Theme All Rights Reserved</p>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <div class="link">
                            <a href="about.html">About</a>
                            <a href="/">Privacy Policy</a>
                            <a href="faq.html">FAQs</a>
                            <a href="/">Support</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    */}
    <div class="footer">
        <div class="container">
            <div class="main-footer">
                <div class="row justify-content-between">
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="about-txt">
                            <h3>EDITOR PICKS</h3>
                            {Array.isArray(blogItems) && blogItems.slice(0, 3).map((item, index) => (
    <div key={index}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
                src={`http://43.228.126.245/aimaanAPI/storage/uploads/${item.news_image}`}
                alt={`News ${item.content_id}`}
                style={{ width: '100px', height: '69px', marginRight: '10px' }} // Adjust the width and height values as needed
            />
            {/* <div>
                <p style={{ margin: 0 }}>{item.title}</p>
                <p style={{ margin: 0 }}>{item.creation_date} {item.created_by}</p>
            </div> */}
             <div>
                <a href={`/${item.content_id}`} style={{ textDecoration: 'none' }} title={` ${item.title}`}>
                    <p style={{ margin: 0 }}>
                    <Link
                            to={`/NewsEdit/${item.content_id}`}
                            style={{ color: 'white', transition: 'color 0.3s' }}
                            onMouseEnter={(e) => e.target.style.color = 'blue'}
                            onMouseLeave={(e) => e.target.style.color = 'white'}
                        >
                            {item.title}
                        </Link>
                    </p>
                </a>
                <p style={{ margin: 0 }}>{item.creation_date} {item.created_by}</p>
            </div>
        </div>
    </div>
))}                    
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="about-txt">
                            <h3>POPULAR POSTS</h3>
                            {Array.isArray(Events) && Events.slice(0, 3).map((item, index) => (
    <div key={index}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
                src={`http://43.228.126.245/aimaanAPI/storage/uploads/${item.file_name}`}
                alt={`News ${item.content_id}`}
                style={{ width: '100px', height: '69px', marginRight: '10px' }} // Adjust the width and height values as needed
            />
            {/* <div>
                <p style={{ margin: 0 }}>{item.title}</p>
                <p style={{ margin: 0 }}>{item.creation_date} {item.created_by}</p>
            </div> */}
             <div>
                <a href={`/${item.content_id}`} style={{ textDecoration: 'none' }} title={` ${item.title}`}>
                    <p style={{ margin: 0 }}>
                    <Link
                            to={`/EventsEdit/${item.content_id}`}
                            style={{ color: 'white', transition: 'color 0.3s' }}
                            onMouseEnter={(e) => e.target.style.color = 'blue'}
                            onMouseLeave={(e) => e.target.style.color = 'white'}
                        >
                            {item.title}
                        </Link>
                    </p>
                </a>
                <p style={{ margin: 0 }}>{item.creation_date} {item.created_by}</p>
            </div>
        </div>
    </div>
))}                    
                        </div>
                    </div>
                    
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="link">
                            <h3 >POPULAR CATEGORY</h3>
                            <Link 
                            style={{ color: 'white', transition: 'color 0.3s', fontSize:'14px' }}
                            onMouseEnter={(e) => e.target.style.color = 'blue'}
                            onMouseLeave={(e) => e.target.style.color = 'white'}
                             to={`/Events`}>நிகழ்வுகள் <span style={{ marginLeft: '150px', color: 'white', fontSize:'14px' }}>{32}</span>
                            </Link><br></br><br></br>
                            <Link 
                            style={{ color: 'white', transition: 'color 0.3s', fontSize:'14px' }}
                            onMouseEnter={(e) => e.target.style.color = 'blue'}
                            onMouseLeave={(e) => e.target.style.color = 'white'} 
                            to={`/News`}>செய்திகள் <span style={{ marginLeft: '150px', color: 'white', fontSize:'14px' }}>{32}</span>
                            </Link><br></br><br></br>
                            <Link 
                            style={{ color: 'white', transition: 'color 0.3s', fontSize:'14px' }}
                            onMouseEnter={(e) => e.target.style.color = 'blue'}
                            onMouseLeave={(e) => e.target.style.color = 'white'}
                            to={`/Category`}>கட்டுரைகள்
                            <span style={{ marginLeft: '140px', color: 'white', fontSize:'14px' }}>{32}</span>
                            </Link><br></br><br></br>
                            <Link 
                            style={{ color: 'white', transition: 'color 0.3s', fontSize:'14px' }}
                            onMouseEnter={(e) => e.target.style.color = 'blue'}
                            onMouseLeave={(e) => e.target.style.color = 'white'}
                            to={`/Resource`}>வளங்கள் <span style={{ marginLeft: '160px', color: 'white', fontSize:'14px' }}>{32}</span>
                            </Link><br></br><br></br>
                            {/* <Link 
                            style={{ color: 'white', transition: 'color 0.3s', fontSize:'14px'}}
                            onMouseEnter={(e) => e.target.style.color = 'blue'}
                            onMouseLeave={(e) => e.target.style.color = 'white'}
                            to={`/Events`}>வரலாற்று கலைப்பொருட்கள் <span style={{ marginLeft: '10px', color: 'white', fontSize:'14px' }}>{32}</span>
                            </Link><br></br><br></br>
                            <Link 
                            style={{ color: 'white', transition: 'color 0.3s', fontSize:'14px' }}
                            onMouseEnter={(e) => e.target.style.color = 'blue'}
                            onMouseLeave={(e) => e.target.style.color = 'white'}
                            to={`/Video`}>video<span style={{ marginLeft: '200px', color: 'white', fontSize:'14px' }}>{32}</span>
                            </Link> */}
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        <div class="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6">
                        <p>Copyright &copy; 2021 Theme All Rights Reserved</p>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <div class="link">
                            <a href="about.html">About</a>
                            <a href="/">Privacy Policy</a>
                            <a href="faq.html">FAQs</a>
                            <a href="/">Support</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <script src="assets/js/jquery-3.6.0.min.js"></script>

    <script src="assets/js/jquery.flagstrap.min.js"></script>
    
    <script src="assets/js/jquery.appear.min.js"></script>
  
    <script src="assets/js/odometer.min.js"></script>
    
    <script src="assets/js/owl.carousel.min.js"></script>
    
    <script src="assets/js/slick.min.js"></script>
    
    <script src="assets/js/video.popup.js"></script>
   
    <script src="assets/js/popper.min.js"></script>
    
    <script src="assets/js/bootstrap.min.js"></script>
   
    <script src="assets/js/main.js"></script>
    </div>
  );
}

export default Home;
