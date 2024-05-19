import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Portfolio/063cda39008f691fd2ba6bd273fa0bb9.png";
import IMG2 from "../../assets/Portfolio/1c5a46dedd6773ed61437d01437d5b8d.png";
import IMG3 from "../../assets/Portfolio/afafa966d6b812ac5455df43000e0973.png";
import IMG4 from "../../assets/Portfolio/063cda39008f691fd2ba6bd273fa0bb9.png";
import IMG5 from "../../assets/Portfolio/ecc152e4117dc29781f5aa67592e102f.png";
import IMG6 from "../../assets/Portfolio/1c5a46dedd6773ed61437d01437d5b8d.png";

const Data = [
  {
    id: 1,
    img: IMG1,
    title: "Work-1",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19116917-Choose-a-file",
  },
  {
    id: 2,
    img: IMG2,
    title: "Work-2",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19116917-Choose-a-file",
  },
  {
    id: 3,
    img: IMG3,
    title: "Work-3",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19116917-Choose-a-file",
  },
  {
    id: 4,
    img: IMG4,
    title: "Work-4",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19116917-Choose-a-file",
  },
  {
    id: 5,
    img: IMG5,
    title: "Work-5",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19116917-Choose-a-file",
  },
  {
    id: 6,
    img: IMG6,
    title: "Work-6",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19116917-Choose-a-file",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>Me recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {Data.map(({ id, img, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={img} alt={title} />
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live demo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
