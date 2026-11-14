 import logo from '../assets/moneywisely-icon.svg';
export default function NavBar() {
    return(
        <nav className="navbar">

    <div className="logo-container">
      <img src={logo} className="logo-img" alt=""/>
      <div className="text-block">
        <span className="logo-text">Money<span className="logo-accent">Wisely</span></span>
      </div>
    </div>

    <ul className="nav-links">
      <li><a href="#" data-view="About">About</a></li>
      <li><a href="#" data-view="HowItWorks">How it works</a></li>
      <li><a href="#" data-view="GetStarted">Get started</a></li>


    </ul>

  </nav>

    )
}