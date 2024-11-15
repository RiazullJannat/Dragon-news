import { Outlet } from "react-router-dom";
const AuthLayout = () => {
    return (
        <div>
            Auth lay out .. 
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;