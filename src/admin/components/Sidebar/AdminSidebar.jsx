import navList from '../../assets/data/navItems'
import NavItem from './NavItem'
import './Sidebar.css'
const AdminSidebar = () => {
  return (
    <aside className="sidebar" id="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a href="" className="nav-link">
            <i className="bi bi-grid"></i>
            <span>Dashboars</span>
          </a>
        </li>
        <li className="nav-item">
          <a href=""
            className="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
          >
            <i className="bi bi-menu-button-wide"></i>
            <span>Academy</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="components-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="">
                <i className="bi bi-circle"></i>
                <span>Courses</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-circle"></i>
                <span>create Course</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-circle"></i>
                <span> Details Course</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href=""
            className="nav-link collapsed"
            data-bs-target="#form-nav"
            data-bs-toggle="collapse"
          >
            <i className="bi bi-journal-text"></i>
            <span>Academy</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="form-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="">
                <i className="bi bi-circle"></i>
                <span>Courses</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-circle"></i>
                <span>create Course</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-circle"></i>
                <span> Details Course</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href=""
            className="nav-link collapsed"
            data-bs-target="#tables-nav"
            data-bs-toggle="collapse"
          >
            <i className="bi bi-layout-text-window-reverse"></i>
            <span>Academy</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="tables-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="">
                <i className="bi bi-circle"></i>
                <span>Courses</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-circle"></i>
                <span>create Course</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-circle"></i>
                <span> Details Course</span>
              </a>
            </li>
          </ul>
        </li>
        <li className='nav-heading'>Pages </li>
        {
          navList.map(nav =>(
            <NavItem key={nav._id} nav={nav}/>
          ))
        }
      </ul>
    </aside>
  )
}

export default AdminSidebar
