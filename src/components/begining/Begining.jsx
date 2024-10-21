import { useEffect, useRef } from "react"
import "./Begining.scss";
import { init } from 'ityped'



export default function Begining() {
  const textRef = useRef();

  useEffect(()=>{
 init(textRef.current, {
  showCursor: true,
  backDelay:1500,
  backSpeed:60,
  strings:["Web Developer" , " freelancer"],
 });
  },[])


  return (
    <div className="Begining" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="imgrahul2.jpg" alt="" />
        </div>
      </div>
      <div className="right">
      <div className="wrapper">
      <h2>Hi There, I'm
        
      </h2>
          <h1>Rahul Prasad</h1>
          <h3>
            I'm a <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="public/down.png" alt="" />
        </a>
      </div>
      </div>
    
  )
}
