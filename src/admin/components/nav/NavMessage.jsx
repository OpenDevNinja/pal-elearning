
const NavMessage = () => {
    return (
        <li className="nav-item dropdown">
            <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown" >
                <i className="bi bi-chat-left-text"></i>
                <span className="badge bg-success badge-number">3</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages ">
                <li className="dropdown-header">
                    you have 4 new messages
                    <a href="/" className="badge rounded-pull bg-success p-2  ms-2"> view all</a>
                </li>
                <li className="dropdown-diviser">
                    <hr />
                </li>
                <li className="message-item">
                    <a href="#">
                        <img src="https://img.lovepik.com/png/20231110/profile-picture-pictures-sticker-cartoon_555764_wh860.png" alt="message 1"
                            className="rounded-circle"
                        />
                        <div>
                            <h4>Bonaventure TOYI</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur </p>
                            <p>4 hr. ago</p>
                        </div>
                    </a>

                </li>
                <li className="dropdown-diviser">
                    <hr />
                </li>
                <li className="message-item">
                    <a href="#">
                        <img src="https://png.pngtree.com/png-clipart/20220916/original/pngtree-for-profile-picture-png-image_8620121.png" alt="message 2"
                            className="rounded-circle" />
                            <div>
                        <h4>Cairine DOGBE</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur </p>
                        <p>4 hr. ago</p>
                    </div>

                    </a>

                </li>
                <li className="dropdown-diviser">
                    <hr />
                </li>
                <li className="message-item">
                    <a href="#">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCHyccmmZNju1hz742Miu5zI6XGaa23APYeQ&s" alt="message 3"
                            className="rounded-circle" />
                   
                   <div>
                        <h4>David TOYI</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur </p>
                        <p>4 hr. ago</p>
                    </div>
                    </a>
                   
                </li>
                <li className="dropdown-diviser">
                    <hr />
                </li>
                <li className="dropdown-diviser">
                    <hr />
                </li>
                <li className="dropdown-footer">

                    <a href="/"> Show  all messages</a>

                </li>

            </ul>
        </li>
    )
}

export default NavMessage