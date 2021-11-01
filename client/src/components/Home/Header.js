import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../actions/authAction";

import "./Home.css";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <>
        <header className="header">
          <div>
            <Link
              to="/home"
              className="home-link"
              onClick={() => (window.location.href = "/home")}
            >
              <i className="fa fa-home"></i>
            </Link>
          </div>
          <span style={{ fontSize: "20px", fontWeight: 700, color: "yellow" }}>
            {user ? "Welcome : " + `${user.name}` : ""}{" "}
          </span>
          <div>
            <button to="/" className="home-link" onClick={logout}>
              <i class="fa fa-sign-out" aria-hidden="true"></i>
            </button>
          </div>
        </header>
      </>
    </div>
  );
};

export default Header;
