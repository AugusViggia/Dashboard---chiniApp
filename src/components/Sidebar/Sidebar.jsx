import style from "./Sidebar.module.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={style.sidebar}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/sales">Ventas</Link>
                </li>
                <li>
                    <Link to="/clients">Clientes</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
