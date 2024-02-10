import React, { useState, useEffect } from "react";
import api from "../constants/api";
import { Link } from "react-router-dom";

export default function Footer() {
  const [menus, setMenus] = useState([]);
  //   const [email, setEmail] = useState();
  const [companyname, setCompanyName] = useState();
  //   const [address, setAddress] = useState();
  //   const [contact, setContact] = useState();
  const [ContentTypeCount, setContentTypeCount] = useState([]);
  const [blogItems, setBlogItems] = useState([]);
  const [Events, setEvents] = useState([]);

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

    const getContentTypeCount = () => {
        // var formated = title.split("-").join(" ");
        api
          .get("/content/getContentTypeCount")
          .then((res) => {
            setContentTypeCount(res.data.data[0]);
            console.log('ContentTypeCount', res.data.data)
            //setCurrentData(res.data.data);
          })
          .catch(() => {});
      };
      useEffect(() => {
        getContentTypeCount();
        getblogItems();
        getEvents();
      }, []);

  useEffect(() => {
    api
      .get("contact/getCompanyName")
      .then((res) => {
        setCompanyName(res.data.data[0]);
      })
      .catch(() => {
        // Handle error
      });
  }, []);

  useEffect(() => {
    api
      .get("section/getFooterMenu")
      .then((res) => {
        setMenus(res.data.data);
      })
      .catch(() => {
        // Handle error
      });
  }, []);

  return (
    <>
      {/* <div class="footer"> */}
        {/* <div class="container">
          <div class="main-footer">
            <div class="row justify-content-between">
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="about-txt">
                  <h3>About Us Company</h3>
                  <p>
                    There are many variations of passage of Lorem Ipsum
                    available, but the maj ority have suffered alteration
                  </p>
                  <ul>
                    <li>
                      <span>
                        <i class="flaticon-pin"></i>
                      </span>
                      Demo Address #8901 Marmora Road Chi Minh City, Vietnam
                    </li>
                    <li>
                      <span>
                        <i class="flaticon-phone-call"></i>
                      </span>
                      0800-123456 (24/7 Support Line)
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-2 col-lg-2 col-sm-6">
                <div class="link">
                  <h3>Our Services</h3>
                  <ul>
                    <li>
                      <a href="service-details.html">Business</a>
                    </li>
                    <li>
                      <a href="service-details.html">Marketing</a>
                    </li>
                    <li>
                      <a href="service-details.html">Management</a>
                    </li>
                    <li>
                      <a href="service-details.html">Accounting</a>
                    </li>
                    <li>
                      <a href="service-details.html">Training</a>
                    </li>
                    <li>
                      <a href="service-details.html">Consultation</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-2 col-lg-2 col-sm-6">
                <div class="link">
                  <h3>Useful Links</h3>
                  <ul>
                    <li>
                      <a href="blog-l-bar.html">Blog</a>
                    </li>
                    <li>
                      <a href="/">Client Area</a>
                    </li>
                    <li>
                      <a href="/">Support</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQ's</a>
                    </li>
                    <li>
                      <a href="/">Newsletter</a>
                    </li>
                    <li>
                      <a href="/">Events</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="newsletter">
                  <h3>Newsletter</h3>
                  <p>
                    Subscribe our newsletter to get our latest update all blog &
                    news
                  </p>
                  <form>
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      required
                    />
                    <button>
                      <i class="flaticon-send"></i>
                    </button>
                  </form>
                  <div class="social">
                    <a href="/" class="fb">
                      <i class="flaticon-facebook"></i>
                    </a>
                    <a href="/" class="tw">
                      <i class="flaticon-twitter"></i>
                    </a>
                    <a href="/" class="ggl">
                      <i class="flaticon-google-plus-logo"></i>
                    </a>
                    <a href="/" class="ld">
                      <i class="flaticon-linkedin"></i>
                    </a>
                    <a href="/" class="yt">
                      <i class="flaticon-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
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
                             to={`/Events`}>நிகழ்வுகள் <span style={{ marginLeft: '150px', color: 'white', fontSize:'14px' }}>
                                {ContentTypeCount.events_count}</span>
                            </Link><br></br><br></br>
                            <Link 
                            style={{ color: 'white', transition: 'color 0.3s', fontSize:'14px' }}
                            onMouseEnter={(e) => e.target.style.color = 'blue'}
                            onMouseLeave={(e) => e.target.style.color = 'white'} 
                            to={`/News`}>செய்திகள் <span style={{ marginLeft: '150px', color: 'white', fontSize:'14px' }}>
                                {ContentTypeCount.news_count}</span>
                            </Link><br></br><br></br>
                            <Link 
                            style={{ color: 'white', transition: 'color 0.3s', fontSize:'14px' }}
                            onMouseEnter={(e) => e.target.style.color = 'blue'}
                            onMouseLeave={(e) => e.target.style.color = 'white'}
                            to={`/Articles`}>கட்டுரைகள்
                            <span style={{ marginLeft: '140px', color: 'white', fontSize:'14px' }}>
                                {ContentTypeCount.article_count}</span>
                            </Link><br></br><br></br>
                            <Link 
                            style={{ color: 'white', transition: 'color 0.3s', fontSize:'14px' }}
                            onMouseEnter={(e) => e.target.style.color = 'blue'}
                            onMouseLeave={(e) => e.target.style.color = 'white'}
                            to={`/Resources`}>வளங்கள் <span style={{ marginLeft: '160px', color: 'white', fontSize:'14px' }}>
                                {ContentTypeCount.resource_count}</span>
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
                <p>
                  &copy; Aiman Sangam.Designed by{" "}
                  {companyname && companyname.CompanyName}
                </p>
              </div>
              <div class="col-xl-6 col-lg-6">
                <div class="link">
                  {menus.map((data, index) => (
                    <Link
                      key={index}
                      to={`/${data.section_title.toLowerCase()}`}
                    >
                      {data.section_title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

 