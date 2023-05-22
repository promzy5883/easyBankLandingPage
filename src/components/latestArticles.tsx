import { articleData } from "./data";

export default function LatestArticle() {
  return (
    <div className="services">
      {articleData.map((item) => {
        return (
          <div key={item.imageClass} className="article_box">
            <div className={item.imageClass}></div>
            <div className="article_blog">
              <p className="aurthor">{item.aurthor}</p>
              <p className="aurthor_title">{item.title}</p>
              <p className="aurthor_text">{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
