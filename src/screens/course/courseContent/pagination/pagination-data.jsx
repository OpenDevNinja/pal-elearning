import { Link } from "react-router-dom";

const PaginationData = () => {
  return (
    <div className="edu-pagination mt-30 mb-20">
      <ul>
        <li>
          <Link to="/">
            <i className="fal fa-angle-left"></i>
          </Link>
        </li>
        <li className="active">
          <Link to="/">
            <span>01</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>02</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fal fa-angle-right"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PaginationData;
