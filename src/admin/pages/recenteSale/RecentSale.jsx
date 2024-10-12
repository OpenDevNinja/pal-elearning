import { useState } from "react"
import "./RecentSale.css"
import CardFilter from "../../components/cardfilter/CardFilter"
import RecentSaleTable from "./RecentSaleTable"
import { useEffect } from "react"

const RecentSale = () => {
  const [items, setItems]=useState([])
  const [filter, setFilter] = useState("Today")
  const handleFilteChange = filter => {
    setFilter(filter)
  }
    const fetchData = () => {
        fetch("http://localhost:4000/recentsales")
            .then(res => res.json())
            .then(data => { setItems(data) })
            .catch(e => console.log(e.message))
    }
    useEffect(() => {
        fetchData()
    }, [])
  return (
    <div className="card recent-sales overflow-auto">
      <CardFilter filterChanger={handleFilteChange} />
      <div className="card-body">
        <h5 className="card-title">
          Recent Sales <span> | {filter}</span>
        </h5>
        <RecentSaleTable items={items}/>
      </div>
    </div>
  )
}

export default RecentSale