import React, { useEffect, useState } from "react";
import NavMenu from "../components/NavMenu";
import api from "../constants/api";
import bannerImage from "../../src/assets/banner/audioGallery.jpg";

const Home = () => {
  const [audioData, setAudioData] = useState([]);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  const getAudio = () => {
    api
      .get("/content/getAudioGallery")
      .then((res) => {
        setAudioData(res.data.data);
      })
      .catch(() => {});
  };
  useEffect(() => {
    getAudio();
  }, []);

  const handleAudioPlay = (index) => {
    if (currentlyPlaying !== null && currentlyPlaying !== index) {
      // Pause the previously playing audio
      const prevAudio = document.getElementById(`audio-${currentlyPlaying}`);
      if (prevAudio) {
        prevAudio.pause();
      }
    }
    setCurrentlyPlaying(index);
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
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-3 col-lg-3">
              <div class="part-txt">
                <h1>Quran Player</h1>
                <ul>
                  <li>Home</li>
                  <li>-</li>
                  <li>Quran Player</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <br />
      </div>

      <div class="faq faq-2">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-4 col-lg-4">
            <div class="heading" style={{ textAlign: "left", marginLeft:"-290px"}}>
    <h1>Quran Player</h1>
</div>
            </div>
          </div>

          <div class="row">
            <div class="col-xl-12 col-lg-12">
              <div class="part-txt">
                <div id="accordion">
                  <div class="row justify-content-center faq-inner-2">
                    <div class="col-xl-12 col-lg-12">
                      <div class="card">
                        <div class="card-header" id="headingOne">
                          <div className="audio-gallery">
                            {audioData.map((audio, index) => (
                              <div key={index}>
                                <p>{audio.display_title}</p>
                                <audio
                                  id={`audio-${index}`}
                                  controls
                                  onPlay={() => handleAudioPlay(index)}
                                >
                                  <source
                                    src={`http://43.228.126.245/aimaanAPI/storage/uploads/${audio.file_name}`}
                                    type="audio/mp3"
                                  />
                                  Your browser does not support the audio
                                  element.
                                </audio>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
