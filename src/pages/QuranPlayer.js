import React, { useEffect, useState } from "react";
import api from "../constants/api";
import bannerImage from "../../src/assets/banner/audioGallery.jpg";


const Home = () => {
  const [audioData, setAudioData] = useState([]);
  const [audiodes, setAudioDes] = useState([]);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const stripHtmlTags = (htmlString) => {
    const doc = new DOMParser().parseFromString(htmlString, "text/html");
    return doc.body.textContent || "";
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
        className="breadcrumb portfolio-breadcrumb"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-3">
              <div className="part-txt">
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
      <div className="faq faq-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4">
              <div
                className="heading"
                style={{ textAlign: "left", marginLeft: "-400px" }}
              >
                <h1 style={{ paddingBottom: "40px" }}>Quran Player</h1>
                {audiodes.map((audiode, index) => (
                  <div key={index}>
                    <p style={{ marginBottom: "10px", marginTop: "10px" }}>
                      {stripHtmlTags(audiode.description)}
                    </p>{" "}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {audioData.map((audio, index) => (
          <div key={index} style={{ marginLeft: "30px" }}>
            <p>{audio.display_title}</p>

            <audio
              id={`audio-${index}`}
              controls
              onPlay={() => handleAudioPlay(index)}
              style={{ marginTop: "-5px" }}
            >
              <source
                src={`https://aimanweb.unitdtechnologies.com/storage/uploads/${audio.file_name}`}
                type="audio/mp3"
              />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
