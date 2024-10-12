
import { Link } from 'react-router-dom';
import './DropdownCategory.css'
const DropdownCategory = () => {
    return (
        <div className="dropdown-category">
            <nav>
                <ul>
                    <li className="item-has-children">
                        <Link to="/course">Development</Link>
                        <i className="fa-solid fa-chevron-right"></i>
                      
                    </li>
                    <li className="item-has-children">
                        <Link to="/course">Art and Design</Link>
                        <i className="fa-solid fa-chevron-right"></i>
                       
                    </li>
                    <li className="item-has-children">
                        <Link to="/course">Business</Link>
                        <i className="fa-solid fa-chevron-right"></i>
                        
                    </li>
                    <li className="item-has-children">
                        <Link to="/course">Life Style</Link>
                        <i className="fa-solid fa-chevron-right"></i>
                       
                    </li>
                    <li className="item-has-children">
                        <Link to="/course">Health and Fitness</Link>
                        <i className="fa-solid fa-chevron-right"></i>
                       
                    </li>
                    <li className="item-has-children">
                        <Link to="/course">Data Science</Link>
                        <i className="fa-solid fa-chevron-right"></i>
                    </li>
                    <li className="item-has-children">
                        <Link to="/course">Marketing</Link>
                        <i className="fa-solid fa-chevron-right"></i>
                    </li>
                    
                </ul>
            </nav>
        </div>
    );
};

export default DropdownCategory;