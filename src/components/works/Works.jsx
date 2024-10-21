import { useState } from "react";
import "./Works.scss";

export default function Works() {
  const [currentSlide,setCurrentSlide] = useState(0);
  const data = [
    {
      id:"Portfolio",
      title:"Portfolio",
      img:"myimg.png"
  },
  {
      id:"Spotify Clone",
      title:"Spotify Clone",
      img:"https://foolishdeveloper.com/wp-content/uploads/2024/05/thumbnail-9.png"
  },
  {
      id:"Wedding Page",
      title:"Landing Page",
      img:"https://colorlib.com/wp/wp-content/uploads/sites/2/ryan-flynn-wedding-website.jpg",
  },
  ];
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    
    <div className="works" id="works">
      <h1 className="work" id="work">Works</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="public/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="public/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );

}
