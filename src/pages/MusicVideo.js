import React from "react";
import GalgagalVideo from "../assets/videoes/Emin Rasen Ft Alma - Galmagal.mp4";
import GalgagalPoster from "../assets/images/songs-images/galmagal.webp";

import OghlumVideo from "../assets/videoes/Emin Rasen - Oghlum [720].mp4";
import OghlumPoster from "../assets/images/songs-images/oghlum.webp";

import AglamaVideo from "../assets/videoes/Emin Rasen Ft Alma - Aglama [720].mp4";
import AglamaPoster from "../assets/images/songs-images/aglama.webp";

const MusicVideo = () => {
  window.scrollTo(0, 0);

  return (
    <section className="musicvideo-main">
      <h3>تمامی موزیک ویدئوها</h3>
      <article className="musicvideo-videoes">
        <div className="musicvideo-single">
          <video
            type="video/mp4"
            width="320"
            height="240"
            src={GalgagalVideo}
            controls
            preload="none"
            poster={GalgagalPoster}
          >
            Your browser does not support the video tag.
          </video>
          <h4>Galgamal</h4>
          <p>Emin Rasen, Alma</p>
        </div>
        <div className="musicvideo-single">
          <video
            type="video/mp4"
            width="320"
            height="240"
            src={OghlumVideo}
            controls
            preload="none"
            poster={OghlumPoster}
          >
            Your browser does not support the video tag.
          </video>
          <h4>Oghlum</h4>
          <p>Emin Rasen</p>
        </div>
        <div className="musicvideo-single">
          <video
            type="video/mp4"
            width="320"
            height="240"
            src={AglamaVideo}
            controls
            preload="none"
            poster={AglamaPoster}
          >
            Your browser does not support the video tag.
          </video>
          <h4>Aglama</h4>
          <p>Emin Rasen, Alma</p>
        </div>
      </article>
    </section>
  );
};

export default MusicVideo;
