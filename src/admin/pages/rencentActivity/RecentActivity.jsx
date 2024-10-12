import { useEffect } from "react"
import { useState } from "react"
import './recentActifity.css'
import CardFilter from "../../components/cardfilter/CardFilter"
import RecentActivityItem from "./RecentActivityItem"
const RecentActivity = () => {
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState("Today")
  const handleFilteChange = filter => {
    setFilter(filter)
  }
  const fetchData = () => {
    fetch("http://localhost:4000/recentactivity")
      .then(res => res.json())
      .then(data => { setItems(data) })
      .catch(e => console.log(e.message))
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="card">
      <CardFilter filterChanger={handleFilteChange} />
      <div className="card-body">
        <h5 className="card-title">
          Recent Activity <span> | {filter}</span>
        </h5>
        <div className="activity">
          {
            items &&
            items.length > 0 &&
            items.map(item =>
              (
                <RecentActivityItem key={item.id} item={item} />
              )
            )
          }
        </div>
      </div>
    </div>
  )
}

export default RecentActivity