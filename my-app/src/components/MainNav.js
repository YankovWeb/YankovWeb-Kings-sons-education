import {NavLink} from "react-router-dom";
import classes from "./MainNav.module.css";
import {useUserAuth} from "../context/AuthContext";
import {useNavigate} from "react-router";
function MainNav() {
  const navigate = useNavigate();
  const {logOut, user} = useUserAuth();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <nav className={classes.header}>
      <ul className={classes.list}>
        {!user && (
          <>
            <li>
              <NavLink
                to="/login"
                className={({isActive}) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Login
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/register"
                className={({isActive}) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Register
              </NavLink>
            </li>
          </>
        )}

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
        {user && (
          <li>
            <NavLink
              to="/"
              className={({isActive}) =>
                isActive ? classes.active : undefined
              }
              onClick={handleLogout}
            >
              Logout
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
export default MainNav;
