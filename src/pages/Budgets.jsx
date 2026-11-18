import useBudgets from '../hooks/useBudgets';
import {Link} from 'react-router';
import {useState} from 'react';
import {categories} from '../data/categories';

export default function Budgets() {
    const {budgets} = useBudgets();

      const [limits, setLimits] = useState({
        tuition: "",
        campusLife: "",
        dining: "",
        books: "",
    });

    function handleChange(event) {
        setLimits({...limits, [event.target.name]: event.target.value})
    }
    if(budgets === null) {
        return(
            <div className="container py-5">
        <p className="text-muted mt-2">Create your budget first</p>
        <Link to="/get-started">Get started</Link>
        </div>
        );
    }


    return(
        <h1>Budgets for {budgets.demoName}</h1>
    )
}