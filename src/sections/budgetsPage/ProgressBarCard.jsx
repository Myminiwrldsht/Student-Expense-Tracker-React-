import {money} from '../../moneyFormat.js/money';

export default function ProgressBarCard({semesterBudget, spent, left, percentage}) {
const status = percentage >=100 ? "Over limit" : percentage >= 90 ? "Near limit" : "On track";
const barWidth = Math.min(percentage, 100);    
    
    return(
    
        <div className="card bg-white border  border-opacity rounded-3 mb-4">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="fw-semibold">Your semester plan</span>
                    <span className="badge rounded-pill border text-dark">{status}</span>
                </div>

                <div className="progress mb-2" style={{height: "8px"}}>
                    <div className="progress-bar bg-success" role="progressbar" style={{width: `${barWidth}%`}} aria-valuemin="0" aria-valuemax="100"/> 
                </div>
                <div className="d-flex justify-content-between small text-muted">
                    <span>{money(spent)} spent of {money(semesterBudget)}</span>
                    <span>{money(left)} left </span>
                </div>
            </div>
        </div>
        
    )
}