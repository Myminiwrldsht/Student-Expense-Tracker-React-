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
      <li><a href="#" >About</a></li>
      <li><a href="#" >How it works</a></li>
      <li><button className="btn btn-primary">Get started</button></li>


    </ul>

  </nav>

    )
}