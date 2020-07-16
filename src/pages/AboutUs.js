import React, { Component } from "react";
import EminRasen from "../assets/images/eminrasen.jpg";

export default class AboutUs extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <main className="aboutus-main">
        <div className="aboutus-main-parts">
          <img
            src={EminRasen}
            width="300"
            height="400"
            alt="emin rasen"
            className="aboutus-emin"
          />
          <address className="aboutus-main-parts">
            <h1>امین راسن</h1>
            <h4>خواننده رپ ترکمن صحرا</h4>
            <p>
              هر انسانی با یک رسالت درونی پا به این دنیا گذاشته تا با رسیدن به
              اهدافش و خلق خواسته هاش تجلی از خداوند باشه، ما بر این باوریم که
              خودمون خالق زندگی خودمونیم. خونواده ی دالی توپار تو هر سن و سبکی
              فعالیت میکنه و تلاشمون بر اینه که هر کدوم از ما تو مسیر خودمون به
              بهترین ورژن و ایده آل خودمون تبدیل بشیم و تو این مسیر با خود
              دیروزمون در رقابتیم.
            </p>
          </address>
        </div>
      </main>
    );
  }
}
