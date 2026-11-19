import {useState, useEffect} from 'react';

export default function SummaryCards() { //fnction, defines the summaryCards component so other files can import and use
    const [summary, setSummary] = useState([]); //initialize empty array: so .map() doesn't crash before the data arrives. setSummary updates the array


    useEffect(()=> {
        fetch("http://localhost:4000/summary") //sends GET request to grab sample data from db.json
        .then((response)=>response.json()) 
        .then((data)=> setSummary(data)) //saves fetched array into the summary state, tells react to rerender the cards with real values
        .catch((err)=> console.error("Failed to load summary:", err)); //logs an error in the browser console ifthe json server is off
    },[]); //empty dependency array that tells react to fetch only once, not repeat over and over and over again on every render

    return(
        <>
        <main className="flex-grow-1 p-4">
            <p className="text-muted small mb-3">Plan your budget today and have more confidence throughout the semester</p>
            <div className="row g-3 mb-4">
            {summary.map((item, id) =>( //loops through every object in the summary array and creates one card per item
                <div className="col-12 col-sm-6 col-xl-3" key={id}>
                    <div className="card h-100 bg-white border border-success border-opacity-50 rounded-3" style={{boxShadow: "var(--green)"}}>
                        <div className="card-body p-3 d-flex flex-column justify-content-between">
                        <div className="text-muted small mb-1">{item.label}</div>
                        <h4 className="fw-bold mb-1">{item.value}</h4>
                        <div className="text-muted small">{item.subtext}</div>
                    </div>
                </div>
                </div>
                
            ))}
            </div>
        </main>
        </>
    )
}