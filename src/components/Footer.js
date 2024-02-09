import React, { useState, useEffect } from "react";
import api from "../constants/api";
import { Link } from "react-router-dom";

export default function Footer() {
  const [menus, setMenus] = useState([]);
  //   const [email, setEmail] = useState();
  const [companyname, setCompanyName] = useState();
  //   const [address, setAddress] = useState();
  //   const [contact, setContact] = useState();

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
      <div class="footer">
        <div class="container">
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
