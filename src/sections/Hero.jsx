import budgetPreview from '../assets/budget-preview.png';


export default function Hero() {
    return(
        <section id="hero" className="container py-5">
            <div className="row align-items-center g-5">
                <div className="col-lg-6">
                    <p className="text-uppercase fw-semibold  mb-3 " style={{ fontSize:"12px", letterSpacing: "0.1em", color: "#1F7A4D"}}>
                        Student budgeting, simplified
                    </p>
                    <h1 className="display-5 fw-bold  mb-4 lh-sm" style={{color: "#1F7A4D"}}> Stop stressing over your M-PESA balance
                    </h1>
                    <p className="lead text-secondary fs-6 mb-4" style={{maxWidth: "460px"}}>Plan around tuition and bills, spot bad habits early, and still have cash left over for the fun stuff.</p>

                    <div className="pt-2">
                        <button className="btn text-white px-4 py-2 fw-medium rounded-3 shadow-sm" style={{backgroundColor: "#1F7A4D"}}>
                            Create demo
                        </button>
                        <p className="text-muted small mt-3 mb-0">A simple plan, a little more peace of mind</p>
                    </div>
                </div>
                <img src={budgetPreview} alt="Semester budget dashboard preview" className="img-fluid rounded-4 shadow-sm" style={{maxWidth: "460px", padding: 0, border: "none"}}/>
            </div>
            
        </section>
    );
}