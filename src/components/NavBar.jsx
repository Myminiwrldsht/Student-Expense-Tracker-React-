 import logo from '../assets/moneywisely-icon.svg';
 import {Link} from 'react-router';


export default function NavBar() {
    return(
        <nav className="navbar">
<Link to="/">
    <div className="logo-container">
      <img src={logo} className="logo-img" alt="" style={{height: '32px', width:'auto'}} />
      <div className="text-block">
        <span className="logo-text">Money<span className="logo-accent">Wisely</span></span>
      </div>
    </div>
    </Link>

    <ul className="nav-links">
      <li><a href="#about" >About</a></li>
      <li><a href="#how-it-works" >How it works</a></li>
      <li><Link to="/get-started" className="btn text-white px-4 py-2.5 fw-medium rounded-3 shadow-sm" style={{ backgroundColor: "var(--green)"}}>Get started</Link></li>


    </ul>

  </nav>

    )
}