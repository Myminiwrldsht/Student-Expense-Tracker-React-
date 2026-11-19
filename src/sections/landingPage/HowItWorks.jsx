import {steps} from '../../data/HomeContent';
export default function HowItWorks(){
    return(
        <section id="how-it-works" className=" py-4 border-top">
            <div className="container py-4">
                  <div className="mb-5">
                   <p className="text-uppercase fw-semibold  mb-3 " style={{ fontSize:"12px", letterSpacing: "0.1em", color: "var(--green)"}}>
                        How it works
                    </p>
                    <h3 className="display-6 fw-bold mb-0" style={{color:"var(--green)"}}>
                        A clearer picture in three simple steps
                    </h3>
                    </div>
                    <div className="row g-4 g-lg-5 pt-2">
                        {steps.map((step)=>(
                            <div key={step.id} className="col-md-4">
                                <div className="bg-white p-4 rounded-3 shadow h-100">
                                <p className="fw-semibold mb-3" style={{fontSize: "13px", color:"var(--green)"}}>
                                    {step.id}
                                    </p>
                                    <h3 className="h5 fw-bold mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-muted mb-0" style={{fontSize: "15px", lineHeight: "1.6"}}>
                                        {step.description}
                                    </p>
                                    </div>
                                    </div>

                        ))}
                    </div>
                    </div>
        </section>
    )
}