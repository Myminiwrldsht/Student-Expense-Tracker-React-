import { categories } from '../../data/categories';
import {money} from '../../moneyFormat.js/money';

export default function CategoryGrid({limits, spentByCategory}) {
   if (!limits) {
    return <p className="text-muted">No category limits set yet.</p>;
  }

      return(
    <>
      <h2 className="h5 mb-3">Plan by category</h2>
      <div className="row g-3 mb-4">
        {categories.map((category) => {
          const limit = limits[category.fieldName] || 0;
          const used = spentByCategory[category.fieldName] || 0;
          const percent = limit > 0 ? Math.round((used / limit) * 100) : 0;
          const status = percent >= 100 ? "Over limit" : percent >= 90 ? "Near limit" : "On track";

          return (
            <div className="col-md-6" key={category.id}>
              <div className="card bg-white border rounded-3 h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-semibold">{category.categoryName}</span>
                    <span className="badge rounded-pill border text-dark">{status}</span>
                  </div>

                  <div className="d-flex justify-content-between align-items-end my-2">
                    <h4 className="fw-bold mb-0">{money(used)}</h4>
                    <span className="text-muted small">of {money(limit)}</span>
                  </div>

                  <div className="progress mb-2" style={{ height: "8px" }}>
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: `${Math.min(percent, 100)}%` }}
                      aria-valuenow={Math.min(percent, 100)}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>

                  <div className="d-flex justify-content-between small text-muted">
                    <span>{money(limit - used)} left</span>
                    <span>{percent}% used</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
      )
}