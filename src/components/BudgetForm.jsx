import {useState} from 'react';

export default function BudgetForm() {
    const [formData, setFormData] = useState(
  {
"demoName" : "",
"semester" : "",
"currency" : "KES",
"income" : "",
"spendingBudget" : "",
  }


    );

    function handleChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value})

    }
console.log(formData);
    return(
        <>
                <div className="col-lg-6 bg-white rounded-4 shadow">
                  <div className="container py-5" style={{ maxWidth: "720px" }}>
                    <header className="mb-4">
                      <h2 className="form-title mb-1">Budget Form</h2>
                      <p className="text-muted small">
                        Tell us the basics to set up your student budget
                      </p>
                    </header>
    
                    
                    <form onSubmit={()=>saveBudget(formData)}>
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
                                  name="demoName"
                                  value={formData.demoName}
                                   onChange={handleChange}
                                    className="form-control border-success"
                                    id="demoname"
                                  />
                                </div>
                                </div>
                              
                              
                      </section>
    
                      <section className="mb-4">
                        <h2 className="section-title mb-3">02: Your semester budget</h2>
    
                        <div className="row g-3 mb-3">
                          <div className="col-md-6">
    
                            <label htmlFor="semester" className="form-label">
                                    Semester
                                  </label>
                                 <select name="semester" value={formData.semester} onChange={handleChange} className="form-select border-success" id="semester" >
      <option value="" disabled>Select your semester</option>
      <option value="Semester 1">Semester 1</option>
      <option value="Semester 2">Semester 2</option>
      
    </select>
                                </div>
    
                                <div className="col-md-6">
                                            <label htmlFor="currency" className="form-label">
                                    Currency
                                  </label>
                                 <select name="currency" value={formData.currency} onChange={handleChange} className="form-select border-success" id="currency" >
      
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
                              <input name="income" value={formData.income} onChange={handleChange} type="number" className="form-control border-success" id="expectedIncome" placeholder="Ksh 0.00"/>
                              <div className="form-text">
                                Include scholarships, allowance, or other support
                              </div>
                            </div>
                            <div className="col-md-6">
                              <label htmlFor="spendingBudget" className="form-label">Semester spending budget</label>
                              <input name="spendingBudget" value={formData.spendingBudget} onChange={handleChange} type="number" className="form-control border-success" id="spendingBudget" placeholder="Ksh 0.00"/>
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
                </>
    )              
                
}