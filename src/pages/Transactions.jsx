import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import logo from '../assets/moneywisely-icon.svg';


export default function Transactions() {
    const [expenses, setExpenses] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        description: "",
        amount: "",
        category: "",
        method: "",
        date: "",
    })

    //
    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault();
        const numericAmount = Number(formData.amount);

        fetch("http://localhost:4000/expenses", {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({ ...formData, amount: numericAmount }),
        })

            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to add transaction");
                }
                return response.json();
            })

            .then((savedExpense) => {
                setExpenses([savedExpense, ...expenses]);
                setFormData({
                    description: "",
                    amount: "",
                    category: "",
                    method: "",
                    date: "",
                })
            })
            .catch((err) => {
                setError(err.message);
            })
    }

//handles the deletion of expenses from the transactions table
    function removeExpense(id) {
        fetch(`http://localhost:4000/expenses/${id}`,{
            method: "DELETE", //deletes a specific expense from the transactions table
        })
        .then((response)=> response.json())
        .then(()=> {
            setExpenses((prev)=> prev.filter((p)=> (p.id !== id)));
        })
    
    }


    useEffect(() => {
        fetch("http://localhost:4000/expenses")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("failed to fetch expenses");
                }
                return response.json()
            })

            .then((data) => {
                setExpenses(data);

            })

            .catch((err) => {
                setError(err.message);
            })

            .finally(() => {
                setLoading(false);
            })
    }, []);

    if (loading) {
        return (<p className="container py-5">Loading...</p>)
    }
    if (error) {
        return (<p className="text-danger">{error}</p>)
    }


    return (
        <>

            <div className="container min-vh-100 d-flex justify-content-center align-items-center py-4" style={{ maxWidth: "1000px" }}>
                <div className="w-100 bg-white rounded-4 shadow p-4 p-md-5">
                    <h1>Transactions</h1>

                    <form onSubmit={handleSubmit} className="mb-4">
                        <div className="row g-2 align-items-center">

                            <div className="col-md">
                                <input
                                    type="text"
                                    name="description"
                                    className="form-control"
                                    placeholder="Description"
                                    value={formData.description}
                                    onChange={handleChange} required />

                            </div>
                            <div className="col-md-2">
                                <input
                                    type="number"
                                    name="amount"
                                    className="form-control"
                                    placeholder="Amount"
                                    min="1"
                                    value={formData.amount}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="col-md-2">
                                <select
                                    name="category"
                                    className="form-select"
                                    value={formData.category}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Category</option>
                                    <option value="tuition">Tuition</option>
                                    <option value="dining">Dining</option>
                                    <option value="campusLife">Campus life</option>
                                    <option value="books">Books</option>
                                </select>
                            </div>

                            <div className="col-md-2">
                                <select
                                    name="method"
                                    className="form-select"
                                    value={formData.method}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Method</option>
                                    <option value="M-Pesa">M-PESA</option>
                                    <option value="Bank">Bank</option>
                                </select>
                            </div>

                            <div className="col-md-2">
                                <input
                                    type="date"
                                    name="date"
                                    className="form-control"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="col-md-auto">
                                <button type="submit" className="btn text-white text-nowrap px-4 py-2 fw-medium rounded-3 shadow-sm" style={{ backgroundColor: "var(--green)" }}>
                                    + Add
                                </button>
                            </div>

                        </div>

                    </form>


                    {expenses.length === 0 ? (
                        <p>No transactions yet</p>
                    ) : (
                        <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Category</th>
                                    <th>Method</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {expenses.map((expense) => (
                                    <tr key={expense.id}>
                                        <td>{expense.description}</td>
                                        <td>{expense.category}</td>
                                        <td>{expense.method}</td>
                                        <td>{expense.date}</td>
                                        <td>{expense.amount}</td>
                                        <td><button onClick={()=> removeExpense(expense.id)} className="delete-btn">Remove</button></td>
                                    </tr>

                                ))}
                            </tbody>
                        </table>
                        </div>
                    )}
                </div>
            </div>


        </>
    )
}