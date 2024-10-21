import './Topbar.scss';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro"className="logo">prasad.</a>
          <div className="itemContainer">
           <div className="icon">
            <span>+77 67 77</span>
           </div>
          </div>
          <div className="itemContainer">
           <div className="icon">
            <span>prasad@mail.com</span>
           </div>
          </div>
          
        </div>
        <div className="right"> 
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
    
}
