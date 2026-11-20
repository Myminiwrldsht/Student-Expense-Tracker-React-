import { useState } from 'react';
import { useNavigate } from 'react-router';
import useBudgets from '../hooks/useBudgets';

export default function BudgetForm() {
  const [formData, setFormData] = useState(
    {
      "demoName": "",
      "semester": "",
      "currency": "KES",
      "income": "",
      "semesterBudget": "",
    }


  );// formData state(holds data memory from the form)

  const [errors, setErrors] = useState({}); //error validation state
  const navigate = useNavigate();
  const { setBudgets } = useBudgets();

  function handleChange(event) { //helper function to update the formData state every time the user types in an input box
    setFormData({ ...formData, [event.target.name]: event.target.value })

  }

  async function handleSubmit(event) { //helper function to handle form submission
    event.preventDefault(); //stops page reload on form submission
    const numericIncome = Number(formData.income); //changes the income value from a string to a number
    const numericSemesterBudget = Number(formData.semesterBudget); //changes the semester budget value from a string to a number
    const newErrors = {}; //collects the errors


    //validation rules
    if (!formData.demoName.trim()) {
      newErrors.demoName = "Demo-name is required!";
    }
    if (formData.semester === "") {
      newErrors.semester = "Please select a semester";
    }
    if (!formData.income || numericIncome <= 0) {
      newErrors.income = "Income must be more than 0";
    }
    if (!formData.semesterBudget || numericSemesterBudget <= 0) {
      newErrors.semesterBudget = "The semester budget must be more than 0";
    }
    if (numericSemesterBudget > 0 && numericIncome > 0 && numericSemesterBudget > numericIncome) {
      newErrors.semesterBudget = "Your semester budget is more than your income. Please reduce the semester budget amount."
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); //upadates the errors state: causes a re-render to display errors
      return; //stopsthe function to avoid submission of invalid data
    }

    try {
      const response = await fetch("http://localhost:4000/budgets", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({
          ...formData, income: numericIncome , semesterBudget: numericSemesterBudget,}),
      
    });
    if(!response.ok) throw new Error("Could not save your budget")
      const saved= await response.json();
    setErrors({});
    setBudgets(saved);
    navigate('/budgets');

  }
catch(err) {setErrors({form: "Could not save your budget."})}
}

  return (

    <div className="col-lg-6 bg-white rounded-4 shadow">
      <div className="container py-5" style={{ maxWidth: "720px" }}>
        <header className="mb-4">
          <h2 className="form-title mb-1 fw-bold">Budget Form</h2>
          <p className="text-muted small">
            Tell us the basics to set up your student budget
          </p>
        </header>


        <form onSubmit={handleSubmit}>

          <section className="mb-4">
            <h2 className="section-title mb-3 fw-bold" style={{ color: "var(--green)" }}>Student details</h2>

            <div className="row g-3 mb-3">


              <div className="col-12">
                <label htmlFor="demoname" className="form-label fw-semibold">
                  Demo name
                </label>
                <input
                  name="demoName"
                  value={formData.demoName}
                  onChange={handleChange}
                  className="form-control border-success"
                  id="demoname"
                />
                {errors.demoName && (
                  <div className="text-danger small mt-1">{errors.demoName}</div>
                )}
              </div>
            </div>


          </section>

          <section className="mb-4">
            <h2 className="section-title mb-3 fw-bold" style={{ color: "var(--green)" }}>Your semester budget</h2>

            <div className="row g-3 mb-3">
              <div className="col-md-6">

                <label htmlFor="semester" className="form-label fw-bold">
                  Semester
                </label>
                <select name="semester" value={formData.semester} onChange={handleChange} className="form-select border-success" id="semester" >
                  <option value="" disabled>Select your semester</option>
                  <option value="Semester 1">Semester 1</option>
                  <option value="Semester 2">Semester 2</option>

                </select>
                {errors.semester && (<div className="text-danger small mt-1">{errors.semester}</div>)}
              </div>

              <div className="col-md-6">
                <label htmlFor="currency" className="form-label fw-bold">
                  Currency
                </label>
                <select name="currency" value={formData.currency} onChange={handleChange} className="form-select border-success" id="currency" >

                  <option value="KES">Kenyan shillings (Ksh) </option>
                  <option value="USD" disabled>US Dollar ($) </option>

                </select>
              </div>

            </div>

            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label htmlFor="expectedIncome" className="form-label fw-bold">
                  Expected semester income
                </label>
                <input name="income" min="1" value={formData.income} onChange={handleChange} type="number" className="form-control border-success" id="expectedIncome" placeholder="Ksh 0.00" />
                <div className="form-text ">
                  Include scholarships, allowance, or other support
                </div>
                {errors.income && (<div className="text-danger small mt-1">{errors.income}</div>)}
              </div>
              <div className="col-md-6">
                <label htmlFor="semesterBudget" className="form-label fw-bold">Semester semester budget</label>
                <input name="semesterBudget" min="1" value={formData.semesterBudget} onChange={handleChange} type="number" className="form-control border-success" id="semesterBudget" placeholder="Ksh 0.00" />
                {errors.semesterBudget && (<div className="text-danger small mt-1">{errors.semesterBudget}</div>)}
              </div>
            </div>
            {errors.form && <div className="test-danger small mb-2">{errors.form}</div>}
            <div className="d-grid">
              <button type="submit" className="btn text-white px-4 py-2 fw-medium rounded-3 shadow-sm " style={{ backgroundColor: "var(--green)" }}>Create my budget</button>
            </div>
            <p className="text-muted text-center small mt-2 mb-0 ">Your budget is a starting point, you can edit it as you go.</p>

          </section>
        </form>
      </div>
    </div>

  )

}