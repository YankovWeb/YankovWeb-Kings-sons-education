import {NavLink} from "react-router-dom";

import classes from "./MainNav.module.css";

function MainNav() {
  return (
    <nav className={classes.header}>
      <ul className={classes.list}>
        <li>
          <NavLink
            to="/login"
            className={({isActive}) => (isActive ? classes.active : undefined)}
            end
          >
            Начало
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/addClient"
            className={({isActive}) => (isActive ? classes.active : undefined)}
            end
          >
            Добави Клиент
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/client"
            className={({isActive}) => (isActive ? classes.active : undefined)}
          >
            Клиенти
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/campains"
            className={({isActive}) => (isActive ? classes.active : undefined)}
          >
            Кампании
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/startCampain"
            className={({isActive}) => (isActive ? classes.active : undefined)}
          >
            Стартирай Кампания
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({isActive}) => (isActive ? classes.active : undefined)}
          >
            Продукти
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default MainNav;
