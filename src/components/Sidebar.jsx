// import {useState, useEffect} from 'react';
import {NavLink, Link} from 'react-router';
import useBudgets from '../hooks/useBudgets';
import logo from '../assets/moneywisely-icon.svg';


export default function Sidebar(){
    const {budgets} = useBudgets();
//     const [user, setUser] = useState(null);
//     const [error, setError] = useState("");

//     useEffect(()=> {
//         fetch(`http://localhost:4000/user`)
//         .then((response)=> {if (!response.ok) {
//                     throw new Error("Failed to load user");
//                 }
//                 return response.json();})

//         .then((data)=> setUser(data))
//          .catch((err) => {
//                 setError(err.message);
//             })
//     },[])

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

                <div className="d-flex flex-column gap-3">
                    <div className="card bg-light border">
                        <div className="card-body p-3">
                            <h6 className="card-title small fw-bold">Small steps add up</h6>
                            <p className="card-text small text-muted mb-0">
                               Plan for books first. Check student discounts before your next purchase. 
                            </p>
                        </div>
                    </div>


<div className="d-flex align-items-center gap-2 border p-2">
    <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center fw-bold" style={{width: "36px", height: "36px"}}>
        {budgets?.demoName?.charAt(0).toUpperCase() || "G"}
        </div>
        <div>
                            <div className="small fw-bold">{budgets?.demoName || "Guest"}</div>
                            <div className="text-muted" style={{fontSize: "0.75rem"}}>Demo account</div>
                        </div>
                    </div>
                    </div>
                

            </aside>
        
    )
}