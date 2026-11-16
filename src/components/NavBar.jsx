 import logo from '../assets/moneywisely-icon.svg';


export default function NavBar() {
    return(
        <nav className="navbar">

    <div className="logo-container">
      <img src={logo} className="logo-img" alt="" style={{height: '32px', width:'auto'}}/>
      <div className="text-block">
        <span className="logo-text">Money<span className="logo-accent">Wisely</span></span>
      </div>
    </div>

    <ul className="nav-links">
      <li><a href="#about" >About</a></li>
      <li><a href="#how-it-works" >How it works</a></li>
      <li><button className="btn text-white px-4 py-2.5 fw-medium rounded-3 shadow-sm" style={{ backgroundColor: "var(--purple)"}}>Get started</button></li>


    </ul>

  </nav>

    )
}