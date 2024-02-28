import React, { useEffect, useState } from "react";
import api from "../constants/api";
import bannerImage from "../../src/assets/banner/audioGallery.jpg";

const Home = () => {
  const [audioData, setAudioData] = useState([]);
  const [audiodes, setAudioDes] = useState([]);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const stripHtmlTags = (htmlString) => {
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    return doc.body.textContent || '';
  };
 

  const getAudio = () => {
    api
      .get("/content/getAudioGallery")
      .then((res) => {
        setAudioData(res.data.data);
      })
      .catch(() => {});
  };
  const getAudioDes = () => {
    api
      .get("/content/getAudioGallerydes")
      .then((res) => {
        setAudioDes(res.data.data);
      })
      .catch(() => {});
  };
  useEffect(() => {
    getAudio();
    getAudioDes();
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
            <div class="heading" style={{ textAlign: "left", marginLeft:"-400px"}}>
            <h1 style={{paddingBottom:"40px"}}>Quran Player</h1>
            {audiodes.map((audiode, index) => (
   
   <p style={{ marginBottom: '10px', marginTop:"10px" }}>{stripHtmlTags(audiode.description)}</p>          ))}
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
                              <div key={index} >
                                <p>{audio.display_title}</p>
                                <audio
                                  id={`audio-${index}`}
                                  controls
                                  onPlay={() => handleAudioPlay(index)}
                                  //style={{marginTop:"-30px"}}
                                  style={{width:'100%',height:'60px'}}
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
