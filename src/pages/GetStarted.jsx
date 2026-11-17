import logo from '../assets/moneywisely-icon.svg';
import {Link} from 'react-router';
import Footer from '../components/Footer';
import BudgetForm from '../components/BudgetForm';



export default function GetStarted(){
    return (
      <>
        <nav className="navbar">
          <Link to="/">
            <div className="logo-container">
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
            </div>
          </Link>

          <div className="nav-links">
            <Link to="/">Back to home</Link>
          </div>
        </nav>

        <section id="get-started" className="container py-5 ">
          <div className="row align-items-start g-5">
             <div className="col-lg-6">
                  <p
                    className="text-uppercase fw-semibold  mb-3 "
                    style={{
                      fontSize: "12px",
                      letterSpacing: "0.1em",
                      color: "var(--green)",
                    }}
                  >
                    Let's get started
                  </p>
                  <h1
                    className="display-5 fw-bold  mb-4 lh-sm"
                    style={{ color: "var(--green)" }}
                  >
                    A few quick details, for a plan that actually fits
                  </h1>
                  <p
                    className="lead text-secondary fs-6 mb-4"
                    style={{ maxWidth: "460px" }}
                  >
                    Share a few details and your semester budget, so you can see
                    your bills, spending, and your remaining budget balance in one
                    place.
                  </p>
    
                  <Link
                    to="/"
                    className="nav-links small mt-3 mb-0"
                    style={{ color: "var(--green)" }}
                  >
                    Not ready yet? Go back home
                  </Link>
                </div>
           < BudgetForm />
          </div>
        </section>
        <div className="footer-section">
          <Footer />
        </div>
      </>
    );
}