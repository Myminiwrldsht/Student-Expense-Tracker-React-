export default function Footer() {
    return(
        <footer className=" border-top py-4 " style={{backgroundColor: "var(--green)"}}>
            <div className="container">
                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-2">
        <span className="fw-semibold text-white" style={{ fontSize:"15px"}}>MoneyWisely</span>
        <span className="text-white">A student project</span>
        </div>
        </div>
        </footer>
    );
}