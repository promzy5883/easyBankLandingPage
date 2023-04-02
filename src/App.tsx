import "./App.css";
import SocialIcons from "./icons";
import { useState, useEffect } from "react";

function App() {
  const button = <button className="request_button">Request Invite</button>;
  const { faceBook, youtube, twitter, pinterest, instagram } = SocialIcons();
  const [scale, setScale] = useState("0");
  const [iconLink, setIconLink] = useState("images/icon-hamburger.svg");
  const [opacity, setOpacity] = useState("0");
  const [zindex, setzindex] = useState("-1");

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 700) {
      setScale("0");
    } else {
      setScale("1");
    }
  });

  useEffect(() => {
    if (window.innerWidth <= 700) {
      setScale("0");
    } else {
      setScale("1");
    }
  }, []);

  return (
    <>
      <main className="main">
        <nav className="nav">
          <div className="logo">
            <img src="/images/logo.svg" alt="" />
          </div>
          <ul style={{ transform: `scaleY(${scale})` }} className="nav_links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
          <div className="nav_request">{button}</div>

          <button
            className="menu_button"
            onClick={() => {
              if (scale === "0") {
                setScale("1");
                setOpacity("1");
                setzindex("2");
                setIconLink("images/icon-close.svg");
              } else {
                setScale("0");
                setOpacity("0");
                setzindex("-1");
                setIconLink("images/icon-hamburger.svg");
              }
            }}
          >
            <img src={`${iconLink}`} alt="" />
          </button>
        </nav>
        <div
          style={{ opacity: `${opacity}`, zIndex: `${zindex}` }}
          className="blur"
        ></div>
        <section className="next_generation">
          <div className="digital">
            <div>
              <h1 className="heading">
                Next generation <br /> digital banking
              </h1>
              <p className="digital_paragraph">
                Take your financial life online. Your Easybank account will be a
                one-stop-shop for spending, saving, budgeting, investing, and
                much more.
              </p>
              {button}
            </div>
          </div>
          <div className="background">
            <div>
              <img src="/images/image-mockups.png" alt="" />
            </div>
          </div>
        </section>
        <section className="why_choose">
          <p className="why_choose_question">Why choose Easybank?</p>
          <p className="digital_paragraph">
            We leverage Open Banking to turn your bank account into your
            financial hub. <br /> Control your finances like never before.
          </p>
          <div className="services">
            <div className="service_box">
              <img src="/images/icon-online.svg" alt="" />
              <p className="service_heading">Online Banking</p>
              <p className="digital_paragraph">
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>
            <div className="service_box">
              <img src="/images/icon-budgeting.svg" alt="" />
              <p className="service_heading">Simple Budgeting</p>
              <p className="digital_paragraph">
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </p>
            </div>
            <div className="service_box">
              <img src="/images/icon-onboarding.svg" alt="" />
              <p className="service_heading">Fast Onboarding</p>
              <p className="digital_paragraph">
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </div>
            <div className="service_box">
              <img src="/images/icon-api.svg" alt="" />
              <p className="service_heading">Open API</p>
              <p className="digital_paragraph">
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </div>
          </div>
        </section>
        <section className="latest_article">
          <p className="article_heading">Latest Articles</p>
          <div className="services">
            <div className="article_box">
              <div className="article_img one"></div>
              <div className="article_blog">
                <p className="aurthor">By Claire Robinson</p>
                <p className="aurthor_title">
                  Receive money in any currency with no fees
                </p>
                <p className="aurthor_text">
                  The world is getting smaller and we’re becoming more mobile.
                  So why should you be forced to only receive money in a single
                  …
                </p>
              </div>
            </div>
            <div className="article_box">
              <div className="article_img two"></div>
              <div className="article_blog">
                <p className="aurthor">By Wilson Hutton</p>
                <p className="aurthor_title">
                  Treat yourself without worrying about money
                </p>
                <p className="aurthor_text">
                  Treat yourself without worrying about money Our simple
                  budgeting feature allows you to separate out your spending and
                  set realistic limits each month. That means you …
                </p>
              </div>
            </div>
            <div className="article_box">
              <div className="article_img three"></div>
              <div className="article_blog">
                <p className="aurthor">By Wilson Hutton</p>
                <p className="aurthor_title">
                  Take your Easybank card wherever you go
                </p>
                <p className="aurthor_text">
                  We want you to enjoy your travels. This is why we don’t charge
                  any fees on purchases while you’re abroad. We’ll even show you
                  …
                </p>
              </div>
            </div>
            <div className="article_box">
              <div className="article_img four"></div>
              <div className="article_blog">
                <p className="aurthor">By Claire Robinson</p>
                <p className="aurthor_title">
                  Our invite-only Beta accounts are now live!
                </p>
                <p className="aurthor_text">
                  After a lot of hard work by the whole team, we’re excited to
                  launch our closed beta. It’s easy to request an invite through
                  the site ...
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer_first_part">
          <div className="footer_logo_box">
            <img src="images/logo-footer.svg" alt="" />
            <div className="social_icons">
              {faceBook}
              {youtube}
              {twitter}
              {pinterest}
              {instagram}
            </div>
          </div>
          <ul className="firstPartLinks">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
          <ul className="firstPartLinks">
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer_second_part">
          {button}
          <p>@Easybank. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default App;
