import useBudgets from '../hooks/useBudgets';
import {Link} from 'react-router';
import {useState} from 'react';
import {categories} from '../data/categories';
import SummaryCards from '../sections/budgetsPage/SummaryCards';

export default function Budgets() {
    // const {budgets} = useBudgets();

    //   const [limits, setLimits] = useState({
    //     tuition: "",
    //     campusLife: "",
    //     dining: "",
    //     books: "",
    // });

    // function handleChange(event) {
    //     setLimits({...limits, [event.target.name]: event.target.value})
    // }
    // if(budgets === null) {
    //     return(
    //         <div className="container py-5">
    //     <p className="text-muted mt-2">Create your budget first</p>
    //     <Link to="/get-started">Get started</Link>
    //     </div>
    //     );
    // }


    return(
        // <div className="container py-5">
        // <h1>Budgets for {budgets.demoName}</h1>
        // {categories.map((category) => (
        //     <div key = {category.id} className="mb-3">
        //         <label htmlFor={category.fieldName} className="form-label">
        //             {category.categoryName}
        //         </label>
        //         <input
        //         id={category.fieldName}
        //         name={category.fieldName}
        //         value={limits[category.fieldName]}
        //         onChange={handleChange}
        //         type="number"
        //         className="form-control"
        //         />
        //         </div>

        // )

        // )}
       
        // </div>
        <SummaryCards />
    )

}