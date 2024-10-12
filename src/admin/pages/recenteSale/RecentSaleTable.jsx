/* eslint-disable no-unreachable */
/* eslint-disable react/prop-types */

const RecentSaleTable = ({ items }) => {
    const handleStatus = statut => {
        switch (statut) {
            case "Approuved":
                return "success";
                break;
            case "Pending":
                return "warning";
                break;
            case "Rejected":
                return "danger";
                break;

            default:
                return "success"
                break;
        }
    }
    return (
        <table className="table table-borderless datatable">
            <thead className="table-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col"> Customers</th>
                    <th scope="col">Course</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    items &&
                    items.length > 0 &&
                    items.map(item => (
                        <tr key={item._id}>
                            <th scope="row">
                                <a href="">{item.number} </a>
                            </th>
                            <td>{item.Customer}</td>
                            <td>
                                <a href="" className="text-primary">
                                    {item.product}
                                </a>
                            </td>
                            <td>${item.price.toFixed(2)} </td>
                            <td>
                                <span className={` badge bg-${handleStatus(item.statut)}`} >
                                    {item.statut}
                                </span>
                            </td>
                        </tr>
                    )
                    )
                }
            </tbody>

        </table>
    )
}

export default RecentSaleTable