import './logo.css'

const Logo = () => {
    const handletoggleSideBar = () => {
        document.body.classList.toggle('toggle-sidebar')
    }
    return (
        <div className=' d-flex align-items-center justify-content-between'>
            <a href="/" className='logo d-flex align-content-center'>

                <span className='d-none d-lg-block'>Admin Page</span></a>
            <i className='bi bi-list toggle-sidebar-btn'
                onClick={handletoggleSideBar}
            ></i>

        </div>
    )
}

export default Logo