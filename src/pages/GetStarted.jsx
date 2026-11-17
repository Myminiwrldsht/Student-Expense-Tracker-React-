import logo from '../assets/moneywisely-icon.svg';
import {Link} from 'react-router';


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

            
            <div className="col-lg-6 bg-white rounded-4 shadow">
              <div className="container py-5" style={{ maxWidth: "720px" }}>
                <header className="mb-4">
                  <h2 className="form-title mb-1">Budget Form</h2>
                  <p className="text-muted small">
                    Tell us the basics to set up your student budget
                  </p>
                </header>

                
                <form>
                  <section className="mb-4">
                    <h2 className="section-title mb-3">01: Student details</h2>

                    <div className="row g-3 mb-3">
                      
                        
                          
                            <div className="col-md-6">
                              <label htmlFor="fullname" className="form-label">
                                Full name
                              </label>
                              <input
                                type="text"
                                className="form-control border-success"
                                id="fullname"
                              />
                            </div>

                            <div className="col-md-6">
                              <label htmlFor="demoname" className="form-label">
                                Demo name
                              </label>
                              <input
                                type="text"
                                className="form-control border-success"
                                id="demoname"
                              />
                            </div>
                            </div>
                          
                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputPassword1"
                              className="form-label"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              className="form-control border-success"
                              id="exampleInputPassword1"
                            />
                          </div>
                  </section>

                  <section className="mb-4">
                    <h2 className="section-title mb-3">02: Your semester budget</h2>

                    <div className="row g-3 mb-3">
                      <div className="col-md-6">

                        <label htmlFor="semester" className="form-label">
                                Semester
                              </label>
                             <select className="form-select border-success" id="semester" defaultValue="">
  <option value="" disabled>Select your semester</option>
  <option value="1">Semester 1</option>
  <option value="2">Semester 2</option>
  
</select>
                            </div>

                            <div className="col-md-6">
                                        <label htmlFor="currency" className="form-label">
                                Currency
                              </label>
                             <select className="form-select border-success" id="currency" defaultValue="KES">
  
  <option value="KES">Kenyan shillings (Ksh) </option>
  <option value="USD">US Dollar ($) </option>
  
</select>
                            </div>
                        
                      </div>

                      <div className="row g-3 mb-4">
                        <div className="col-md-6">
                          <label htmlFor="expectedIncome" className="form-label">
                            Expected semester income
                          </label>
                          <input type="number" className="form-control border-success" id="expectedIncome" placeholder="Ksh 0.00"/>
                          <div className="form-text">
                            Include scholarships, allowance, or other support
                          </div>
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="spendingBudget" className="form-label">Semester spending budget</label>
                          <input type="number" className="form-control border-success" id="spendingBudget" placeholder="Ksh 0.00"/>
                        </div>
                      </div>
                      <div className="d-grid">
                        <button type="submit" className="btn text-white px-4 py-2 fw-medium rounded-3 shadow-sm" style={{backgroundColor: "var(--green)"}}>Create my budget</button>
                      </div>
                      <p className="text-muted text-center small mt-2 mb-0">Your budget is a starting point, you can edit it as you go.</p>
                    
                  </section>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}