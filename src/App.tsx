import "./App.css";
import Button from "./components/button";
import { useState, useEffect } from "react";
import LatestArticle from "./components/latestArticles";
import Services from "./components/services";
import Footer from "./components/Footer";
import { navLinks } from "./components/data";

function App() {
  const [style, setStyle] = useState({
    scale: "0",
    iconLink: "images/icon-hamburger.svg",
    opacity: "0",
    zindex: "-1",
  });

  const toggleStyle = {
    scale: (value: string) =>
      setStyle((prev) => {
        return { ...prev, scale: value };
      }),
    iconLink: (value: string) =>
      setStyle((prev) => {
        return { ...prev, iconLink: value };
      }),
    opacity: (value: string) =>
      setStyle((prev) => {
        return { ...prev, opacity: value };
      }),
    zindex: (value: string) =>
      setStyle((prev) => {
        return { ...prev, zindex: value };
      }),
  };

  const handleResize = () => {
    if (window.innerWidth <= 700) {
      toggleStyle.scale("0");
    } else {
      toggleStyle.scale("1");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      handleResize();
    });
    handleResize();
  }, []);

  const toggleMenu = () => {
    if (style.scale === "0") {
      toggleStyle.scale("1");
      toggleStyle.opacity("1");
      toggleStyle.zindex("2");
      toggleStyle.iconLink("images/icon-close.svg");
    } else {
      toggleStyle.scale("0");
      toggleStyle.opacity("0");
      toggleStyle.zindex("-1");
      toggleStyle.iconLink("images/icon-hamburger.svg");
    }
  };

  return (
    <>
      <main className="main">
        <nav className="nav">
          <div className="logo">
            <img src="/images/logo.svg" alt="" />
          </div>
          <ul
            style={{ transform: `scaleY(${style.scale})` }}
            className="nav_links"
          >
            {navLinks.map((link) => {
              return (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              );
            })}
          </ul>
          <div className="nav_request">
            <Button />
          </div>

          <button className="menu_button" onClick={toggleMenu}>
            <img src={`${style.iconLink}`} alt="" />
          </button>
        </nav>
        <div
          style={{ opacity: `${style.opacity}`, zIndex: `${style.zindex}` }}
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
              <Button />
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
          <Services />
        </section>
        <section className="latest_article">
          <p className="article_heading">Latest Articles</p>
          <LatestArticle />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
