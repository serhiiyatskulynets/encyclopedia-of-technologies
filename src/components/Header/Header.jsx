import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/icons/Logo.png";

function Header() {
    return (
        <header>
            <nav className={styles.logo}>
                <img src={logo} alt="Логотип" />
                <p> <span>Tech</span> Encyclopedia </p>
            </nav>

            <nav className={styles.pages}>
                <NavLink to="/" className={styles.navlink}> Головна </NavLink>
                <NavLink to="/technologies" className={styles.navlink}> Технології </NavLink>
            </nav>

            <Link to="/login" className={styles.loginbtn}> Увійти | Зареєструватися </Link>
        </header>
    );
}

export default Header;