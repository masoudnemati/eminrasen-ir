import React from "react";
import GalgagalVideo from "../assets/videoes/Emin Rasen Ft Alma - Galmagal.mp4";
import OghlumVideo from "../assets/videoes/Emin Rasen - Oghlum [720].mp4";
import AglamaVideo from "../assets/videoes/Emin Rasen Ft Alma - Aglama [720].mp4";

const MusicVideo = () => {
  window.scrollTo(0, 0);

  return (
    <section className="musicvideo-main">
      <h3>تمامی موزیک ویدئوها</h3>
      <article className="musicvideo-videoes">
        <div className="musicvideo-single">
          <video width="340" height="260" src={GalgagalVideo} controls>
            Your browser does not support the video tag.
          </video>
          <h4>Galgamal</h4>
          <p>Emin Rasen, Alma</p>
        </div>
        <div className="musicvideo-single">
          <video width="340" height="260" src={OghlumVideo} controls>
            Your browser does not support the video tag.
          </video>
          <h4>Oghlum</h4>
          <p>Emin Rasen</p>
        </div>
        <div className="musicvideo-single">
          <video width="340" height="260" src={AglamaVideo} controls>
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
