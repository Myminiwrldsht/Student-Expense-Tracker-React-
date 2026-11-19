import {useState, useEffect} from 'react';


export default function Transactions() {
const [expenses, setExpenses] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
    fetch("http://localhost:4000/expenses")
    .then((response)=> { if(!response.ok) {
        throw new Error("failed to fetch expenses");
    }
       return response.json()})

    .then((data)=> {
        setExpenses(data);
       
    })

    .catch((err)=> {
        setError(err.message);
    })

    .finally(()=> {
        setLoading(false);
    })
}, []);

if(loading){
    return(<p className="container py-5">Loading...</p>)
}
if(error) {
    return(<p className="text-danger">{error}</p>)
}


    return(
        <div className="container py-4">
            <h1>Transactions</h1>
            {expenses.length === 0 ? (
                <p>No transactions yet</p>
            ) : (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Method</th>
                            <th>Date</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map((expense)=> (
                            <tr key={expense.id}>
                            <td>{expense.description}</td>
                            <td>{expense.category}</td>
                            <td>{expense.method}</td>
                            <td>{expense.date}</td>
                            <td>{expense.amount}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            )}
        </div>
     
       
        
    )
}