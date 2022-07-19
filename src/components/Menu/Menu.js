import { NavLink } from "react-router-dom";
import './Menu.css';
import composeClassName from "./composeClassName";

export default function Menu() {
  return (
    <nav>
      <ul className="Menu">
        <li className="Menu__item">
          <NavLink
            className={composeClassName}
            to="/"
          >
            главная
          </NavLink>
        </li>
        <li className="Menu__item">
          <NavLink
            className={composeClassName}
            to="/drift"
          >
            дрифт-такси
          </NavLink>
        </li>
        <li className="Menu__item">
          <NavLink
            className={composeClassName}
            to="/timeattack"
          >
            time attack
          </NavLink>
        </li>
        <li className="Menu__item">
          <NavLink
            className={composeClassName}
            to="/forza"
          >
            forza karting
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}