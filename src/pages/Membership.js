import React from "react";
//import NavMenu from "../components/NavMenu";
import MemberImage from "../../src/assets/banner/membership.jpg";
import { useState } from "react";
import api from "../constants/api";
import { Button } from "reactstrap";
import { useEffect } from "react";

const Home = () => {
  const [membershipForms, setMemberShipForms] = useState({
    first_name: "",
    birth_year: "",
  });
  const [mailId, setmailId] = useState("");
  const [validationError, setValidationError] = useState("");
  const getEnquiryEmail = () => {
    api.get("/setting/getMembershipMailId")
    .then((res) => {
      setmailId(res.data.data[0]);
    });
  };
  const handleSectionForms = (e) => {
    setMemberShipForms({ ...membershipForms, [e.target.name]: e.target.value });
  };
  const validateForm = () => {
    const { birth_year } = membershipForms;

    // Check if birth year is not exactly 4 digits or contains non-digit characters
    if (!/^\d{4}$/.test(birth_year)) {
      setValidationError("Please enter a valid year");
      return false;
    }

    // Clear any previous validation error
    setValidationError("");
    return true;
  };
  const insertMembership = () => {
    if (validateForm()) {
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
    }
  };
  const sendMail = () => {
    if (window.confirm(" Are you sure do you want to send Mail\n")) {
   
    {
  
      const to = membershipForms.email;
       const dynamic_template_data = {
        first_name: membershipForms.first_name,
        mobile: membershipForms.mobile,
        address: membershipForms.address,
     
      };
      api
        .post("/contact/sendMembershipUseremail", {
          to,
          dynamic_template_data,
        })
        .then(() => {
      
        })
        .catch((err) => {
     
        });
   
  };

    {
  
      const to = mailId.email;
       const dynamic_template_data = {
        first_name: membershipForms.first_name,
        mobile: membershipForms.mobile,
        address: membershipForms.address,
     
      };
      api
        .post("/contact/sendMembershipemail", {
          to,
          dynamic_template_data,
        })
        .then(() => {
      
        })
        .catch((err) => {
     
        });
   
  };
} else {
 
}
}
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

  useEffect(() => {
  
    getEnquiryEmail();

  }, []);
  return (
    <div>
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
                <label htmlFor="first_name" style={{ color: "#FFFFFF" }}>
                  First Name
                </label>
                <br />
                <input
                  type="text"
                  name="first_name"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid white",
                    color: "#000000",
                  }}
                  onChange={(e) => {
                    handleSectionForms(e);
                  }}
                />
              </div>
              <div className="col-xl-5 col-lg-5 col-md-6">
                <label htmlFor="last_name" style={{ color: "#FFFFFF" }}>
                  Last Name
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Last Name"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid white",
                    color: "#000000",
                  }}
                  name="last_name"
                  onChange={(e) => {
                    handleSectionForms(e);
                  }}
                />
              </div>
              <div className="col-xl-10 col-lg-10">
                <label htmlFor="mobile" style={{ color: "#FFFFFF" }}>
                  UAE Mobile Number
                </label>
                <br />
                <input
                  type="text"
                  name="mobile"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid white",
                    color: "#000000",
                  }}
                  onChange={(e) => {
                    handleSectionForms(e);
                  }}
                />
              </div>

              <div className="col-xl-10 col-lg-10">
                <label htmlFor="email" style={{ color: "#FFFFFF" }}>
                  Email
                </label>
                <br />
                <input
                  type="text"
                  name="email"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid white",
                    color: "#000000",
                  }}
                  onChange={(e) => {
                    handleSectionForms(e);
                  }}
                />
              </div>

              <div className="col-xl-10 col-lg-10">
                <label htmlFor="birth_year" style={{ color: "#FFFFFF" }}>
                  Year of birth
                </label>
                <br />
                <input
                  type="text"
                  name="birth_year"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid white",
                    color: "#000000",
                  }}
                  onChange={handleSectionForms}
                />
                {validationError && (
                  <p style={{ color: "red" }}>{validationError}</p>
                )}
              </div>
              <div
                className="col-xl-10 col-lg-10"
                style={{ backgroundColor: "#183368" }}
              >
                <label htmlFor="address" style={{ color: "#FFFFFF" }}>
                  Location in UAE
                </label>
                <br />
                <input
                  type="text"
                  name="address"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid white",
                    color: "#000000",
                  }}
                  onChange={(e) => {
                    handleSectionForms(e);
                  }}
                />
              </div>
              <div className="col-xl-10 col-lg-10">
                <label htmlFor="address2" style={{ color: "#FFFFFF" }}>
                  Native Place Details
                </label>
                <br />
                <input
                  type="text"
                  name="address2"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid white",
                    color: "#000000",
                  }}
                  onChange={(e) => {
                    handleSectionForms(e);
                  }}
                />
              </div>
              <div className="col-xl-10 col-lg-10">
                <label htmlFor="qualification" style={{ color: "#FFFFFF" }}>
                  Qualification
                </label>
                <br />
                <input
                  type="text"
                  name="qualification"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid white",
                    color: "#000000",
                  }}
                  onChange={(e) => {
                    handleSectionForms(e);
                  }}
                />
              </div>
              <div className="col-xl-10 col-lg-10">
                <label htmlFor="position" style={{ color: "#FFFFFF" }}>
                  Present profession / Job
                </label>
                <br />
                <input
                  type="text"
                  name="position"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid white",
                    color: "#000000",
                  }}
                  onChange={(e) => {
                    handleSectionForms(e);
                  }}
                />
              </div>
              <div class="col-xl-10 col-lg-10">
                <label htmlFor="from_year" style={{ color: "#FFFFFF" }}>
                  Since when you are in UAE
                </label>
                <br />
                <input
                  type="text"
                  name="from_year"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid white",
                    color: "#000000",
                  }}
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

              <div className="col-xl-12 col-lg-12">
                <Button
                  className="def-btn def-btn-2"
                  onClick={() => {
                    insertMembership();
                    sendMail();
                  }}
                  type="button"
                  style={{ textAlign: "center", marginLeft: "500px" }}
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
