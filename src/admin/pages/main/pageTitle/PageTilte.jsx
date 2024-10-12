/* eslint-disable react/prop-types */

import './pageTitle.css'
const PageTilte = ({ page }) => {
  return (
    <div className='pagetitle'>
      <h1>{page}</h1>
      <nav className='page-item'>
        <ol className='breadcrumb'>
          <li>
            <a href="/">
              <i className="bi bi-house-door">  </i> 
            </a>
          </li>
          <li className='breadcrumb-item active'> / Dashboard</li>
        </ol>
      </nav>
    </div>
  )
}

export default PageTilte