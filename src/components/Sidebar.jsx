import {NavLink, Link} from 'react-router';
import logo from '../assets/moneywisely-icon.svg';


export default function Sidebar(){

    return(
        
            <aside className="d-flex flex-column justify-content-between bg-white border-end p-3" style={{width: "250px"}}>
                <div>
                      <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none mb-3">
                        <img
                            src={logo}
                            className="logo-img"
                            alt=""
                            style={{ height: "32px", width: "auto" }}
                        />
                        <div className="text-block">
                            <span className="logo-text">
                                Money<span className="logo-accent">Wisely</span>
                            </span>
                        </div>
                    
                </Link>

                    <ul className="nav nav-pills flex-column gap-2">
                        <li className="nav-item">
                            <NavLink to="/budgets" className={({isActive})=> isActive ? "nav-link active bg-success text-white" : "nav-link text-dark"}>Budgets</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/transactions" className={({isActive})=> isActive ? "nav-link active bg-success text-white" : "nav-link text-dark"}>Transactions</NavLink>
                        </li>
                    </ul>
                </div>

            


                    
                

            </aside>
        
    )
}