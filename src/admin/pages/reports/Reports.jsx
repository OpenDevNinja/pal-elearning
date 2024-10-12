import { useState } from "react"
import CardFilter from "../../components/cardfilter/CardFilter"
import "./report.css"
import ReportChart from "./ReportChart"
const Reports = () => {
    const [filter, setFilter] = useState("Today")
    const handleFilteChange = filter => {
        setFilter(filter)
    }
    return (
        <div className="card">
            <CardFilter filterChanger={handleFilteChange} />
            <div className="card-body">
                <h5 className="card-title">
                    Reports <span> | {filter}</span>
                </h5>
                <ReportChart />
            </div>
        </div>
    )
}

export default Reports