import {benefits} from '../../data/HomeContent';
export default function About() {

    return (
        <section id="about" className=" py-4 border-top border-bottom bg-white">
            <div className="container py-4">
                <div className="row g-5 align-items-start">
                    <div className="col-lg-5">
                
            <p className="text-uppercase fw-semibold  mb-3 " style={{ fontSize:"12px", letterSpacing: "0.1em", color: "var(--green)"}}>
            About moneywisely
            </p>
            <h2 className="display-6 fw-bold mb-3 lh-sm" style={{color: "var(--green)"}}>
                Budgeting that fits your campus routine
            </h2>
            <p className="text-secondary mb-4 lh-base" style={{maxWidth: "360px"}}>
                Student life is full of firsts. Managing your money shouldn't be the hardest one.

            </p>
            </div>
            <div className="col-lg-7">
                <p className="text-secondary mb-4 lh-base">
                    MoneyWisely is a budget tracker specifically for students. We make campus life smoother by enabling you to freely track your campus expenses without worries.
                </p>
                <div className=" pt-3 d-flex flex-column gap-3">
                {benefits.map((benefit , index)=>(
                    <div key={benefit.id} className="d-flex gap-3 pb-3 ">
                        <span className="fw-semibold small" style={{color: "var(--green)", minWidth: "24px"}}>
                            0{index + 1}
                        </span>

                        <div>
                        <h3 className="h6 fw-semibold text-dark mb-1">{benefit.title}</h3>
                        <p className="text-secondary small mb-0">{benefit.description}</p>
                        </div>
                        </div>
                )

                )}
           
            </div>
            </div>
            </div>
            </div>
           
            
        </section>

    )
}