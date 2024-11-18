import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div className="">{user?.email}</div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div className="">
          <img src={userIcon} alt="" className="rounded-full" />
        </div>
        {
          user ? <>
            <Link to={""} onClick={logout} className="btn btn-neutral rounded-none">Logout</Link>
          </> :
            <>
              <Link to={"/auth/login"} className="btn btn-neutral rounded-none">Login</Link> <span>or</span>
              <Link to={"/auth/register"} className="btn btn-neutral rounded-none">Register</Link>
            </>
        }
      </div>
    </div>
  );
};

export default Navbar;
