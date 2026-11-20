import {money} from '../../moneyFormat.js/money';

export default function SummaryCards({semesterBudget, spent, left, percentage, semester}) { //fnction, defines the summaryCards component so other files can import and use
const status = percentage >=100 ? "Over limit" : percentage >= 90 ? "Near limit" : "On track";
const summary = [
    { label: "Semester budget", value: money(semesterBudget), subtext: semester },
    { label: "Spent so far", value: money(spent), subtext: "Across 4 categories" },
    { label: "Left to spend", value: money(left), subtext: `${Math.max(100 - percentage, 0)}% of your budget` },
    { label: "Budget used", value: `${percentage}%`, subtext: status },
];
    return(
    
        <div className="row g-3 mb-4">
            {summary.map((item)=> (
                  <div className="col-12 col-sm-6 col-xl-3" key={item.label}>
          <div className="card h-100 bg-white border rounded-3">
            <div className="card-body p-3">
              <div className="text-muted small mb-1">{item.label}</div>
              <h4 className="fw-bold mb-1">{item.value}</h4>
              <div className="text-muted small">{item.subtext}</div>
            </div>
          </div>
        </div>
            ))}
            </div>
    )
}