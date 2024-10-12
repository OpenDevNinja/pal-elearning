import { useEffect, useState } from "react"
import Card from "../../../components/card/Card"
import './dashbord.css'
import Reports from "../../reports/Reports"
import RecentSale from "../../recenteSale/RecentSale"
import TopSales from "../../topSales/TopSales"
import RecentActivity from "../../rencentActivity/RecentActivity"
import BudgetReport from "../../Budget/BudgetReport"
const Dashbord = () => {
    const [cards, setCards] = useState([])
    const fetchData = () => {
        fetch("http://localhost:4000/card")
            .then(res => res.json())
            .then(data => { setCards(data) })
            .catch(e => console.log(e.message))
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <section className="dashboard section">
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        {
                            cards && cards.length > 0 &&
                            cards.map(card => <Card key={card._id}
                                card={card} />)
                        }
                    </div>
                    <div className="col-12">
                        <Reports />
                    </div>
                    <div className="col-12">
                        <RecentSale />
                    </div>
                    <div className="col-12">
                       <TopSales  />
                    </div>
                </div>
                <div className="col-lg-4">
                    <RecentActivity />
                    <BudgetReport/>
                </div>
            </div>
        </section>
    )
}

export default Dashbord