
const NavAvatar = () => {
  return (
    <li className="nav-item dropdown pe-3">
      <a href="#" className="nav-link nav-profile d-flex align-items-center pe-0" data-bs-toggle="dropdown" >
        <img
          className="rounded-circle"
          src="https://img.lovepik.com/png/20231110/profile-picture-pictures-sticker-cartoon_555764_wh860.png" alt="" />
        <span
          className="d-none d-md-block dropdown-toggle ps-2 ">T. Bona
        </span>
      </a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile ">
        <li className="dropdown-header">
          <h6> Bona</h6>
          <span> Web Developer</span>
        </li>

        <li className="dropdown-diviser">
          <hr />
        </li>
        <li>
          <a href="" className="dropdown-item d-flex align-items-center">
            <i className="bi bi-person"></i>
            <span>My profile</span>
          </a>
        </li>
        <li className="dropdown-diviser">
          <hr />
        </li>
        <li>
          <a href="" className="dropdown-item d-flex align-items-center">
            <i className="bi bi-gear"></i>
            <span>Account setting</span>
          </a>
        </li>
        <li className="dropdown-diviser">
          <hr />
        </li>
        <li>
          <a href="" className="dropdown-item d-flex align-items-center">
            <i className="bi bi-box-arrow-right"></i>
            <span> Sign out </span>
          </a>
        </li>

      </ul>
    </li>
  )
}

export default NavAvatar