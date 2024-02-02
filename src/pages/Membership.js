import React from "react";
import NavMenu from "../components/NavMenu";
import MemberImage from "../../src/assets/banner/membership.jpg";
import { useState } from "react";
import api from "../constants/api";
import { Button } from "reactstrap";

const Home = () => {
  const [membershipForms, setMemberShipForms] = useState({
    first_name: "",
  });

  const handleSectionForms = (e) => {
    setMemberShipForms({ ...membershipForms, [e.target.name]: e.target.value });
  };
  const insertMembership = () => {
    if (membershipForms.first_name.trim() !== "") {
      // Check if first_name is not empty
      api
        .post("/contact/insertContact", membershipForms)
        .then((response) => {
          console.log("Membership inserted successfully:", response.data);

          // Clear form fields after successful submission if needed
          setMemberShipForms({});
          // Show success message
          showMessage("Form submitted successfully!", "success");
          // Reload the page after 3 seconds
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        })
        .catch((error) => {
          console.error("Error inserting membership:", error);
        });
    } else {
      // Show error message for required fields
      showMessage("Please fill all required fields", "error");
    }
  };
  const showMessage = (message, type) => {
    const alertBox = document.createElement("div");
    alertBox.className =
      type === "success" ? "custom-alert success" : "custom-alert error";
    alertBox.textContent = message;
    document.body.appendChild(alertBox);
    // Remove alert box after 3 seconds
    setTimeout(() => {
      alertBox.remove();
    }, 3000);
  };
  return (
    <div>
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

      <div
        class="breadcrumb portfolio-breadcrumb"
        style={{
          backgroundImage: `url(${MemberImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-3 col-lg-3">
              <div class="part-txt">
                <h1>MembershipForm</h1>
                <ul>
                  <li>Home</li>
                  <li>-</li>
                  <li>MembershipForm</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="container">
        <form className="form" style={{ backgroundColor: "#183368" }}>
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-5 col-md-6">
                <input
                  type="text"
                  placeholder="First Name*"
                  name="first_name"
                  style={{ backgroundColor: "#182568" }}
                  onChange={(e) => {
                    handleSectionForms(e);
                  }}
                />
              </div>
              <div className="col-xl-5 col-lg-5 col-md-6">
                <input
                  type="text"
                  placeholder="Last Name"
                  style={{ backgroundColor: "#182568" }}
                  name="last_name"
                  onChange={(e) => {
                    handleSectionForms(e);
                  }}
                />
              </div>
              <div className="col-xl-10 col-lg-10">
                <input
                  type="text"
                  placeholder="UAE Mobile Number"
                  name="mobile"
                  style={{ backgroundColor: "#182568" }}
                  onChange={(e) => {
                    handleSectionForms(e);
                  }}
                />
              </div>
              <div className="col-xl-10 col-lg-10">
                <input
                  type="text"
                  placeholder="Year of birth"
                  name="birth_year"
                  style={{ backgroundColor: "#182568" }}
                  onChange={(e) => {
                    handleSectionForms(e);
                  }}
                />
              </div>
              <div className="col-xl-10 col-lg-10" style={{backgroundColor:"#183368"}}>
                <input
                  type="text"
                  placeholder="Location in UAE"
                  name="address"
                  style={{ backgroundColor: "#182568" }}
                  onChange={(e) => {
                    handleSectionForms(e);
                  }}
                />
              </div>
              <div className="col-xl-10 col-lg-10">
                <input
                  type="text"
                  placeholder="Native Place Details*"
                  name="address2"
                  style={{ backgroundColor: "#182568" }}
                  onChange={(e) => {
                    handleSectionForms(e);
                  }}
                />
              </div>
              <div className="col-xl-10 col-lg-10">
                <input
                  type="text"
                  placeholder="Qualification"
                  name="qualification"
                  style={{ backgroundColor: "#182568" }}
                  onChange={(e) => {
                    handleSectionForms(e);
                  }}
                />
              </div>
              <div className="col-xl-10 col-lg-10">
                <input
                  type="text"
                  placeholder="Present profession or Job"
                  name="position"
                  style={{ backgroundColor: "#182568" }}
                  onChange={(e) => {
                    handleSectionForms(e);
                  }}
                />
              </div>
              <div class="col-xl-10 col-lg-10">
                <input
                  type="text"
                  name="from_year"
                  placeholder="Since when you are in UAE"
                  style={{ backgroundColor: "#182568" }}
                  onChange={(e) => {
                    handleSectionForms(e);
                  }}
                />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4">
                <label htmlFor="volunteerYes" style={{ color: "white" }}>
                  Volunteer - Yes
                </label>
                <input
                  type="radio"
                  id="volunteerYes"
                  name="published"
                  value="1"
                  onChange={handleSectionForms}
                  style={{ transform: "scale(0.3)" }}
                />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4">
                <label htmlFor="volunteerNo" style={{ color: "white" }}>
                  Volunteer - No
                </label>
                <input
                  type="radio"
                  id="volunteerNo"
                  name="published"
                  value="0"
                  onChange={handleSectionForms}
                  style={{ transform: "scale(0.3)" }}
                />
              </div>

              <div className="col-xl-10 col-lg-10">
                <Button
                  className="def-btn def-btn-2"
                  onClick={() => {
                    insertMembership();
                  }}
                  type="button"
                >
                  Submit
                </Button>
              </div>
              <br />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;