
const NavNotice = () => {
    return (
        <li className="nav-item dropdown">
            <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown" >
                <i className="bi bi-bell"></i>
                <span className="badge bg-primary badge-number">5</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications ">
                <li className="dropdown-header">
                    you have 4 new notification
                    <a href="/" className="badge rounded-pull bg-primary p-2  ms-2"> view all</a>
                </li>
                <li className="dropdown-diviser">
                    <hr />
                </li>
                <li className="notification-item">
                    <i className="bi bi-exclamation-circle text-warning">


                    </i>
                    <div>
                        <h4> Lorem, ipsum</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur </p>
                        <p>30 min. ago</p>
                    </div>
                </li>
               
                <li className="dropdown-diviser">
                    <hr />
                </li>
                <li className="notification-item">
                    <i className="bi bi-x-circle text-danger">

                    </i>

                    <div>
                        <h4> Lorem, ipsum</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur </p>
                        <p>1 hr. ago</p>
                    </div>
                </li>
                <li className="dropdown-diviser">
                    <hr />
                </li>
                <li className="notification-item">
                    <i className="bi bi-check-circle text-success">

                    </i>

                    <div>
                        <h4> Lorem, ipsum</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur </p>
                        <p>1 hr. ago</p>
                    </div>
                </li>
                <li className="dropdown-diviser">
                    <hr />
                </li>
                <li className="notification-item">
                    <i className="bi bi-info-circle text-primary">


                    </i>
                    <div>
                        <h4> Lorem, ipsum</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur </p>
                        <p>1 hr. ago</p>
                    </div>
                </li>
                <li className="dropdown-diviser">
                    <hr />
                </li>
                <li className="dropdown-footer">

                    <a href="/"> Show  all notifications</a>

                </li>

            </ul>

        </li>
    )
}

export default NavNotice