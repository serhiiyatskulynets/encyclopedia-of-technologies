import logo from "../../assets/icons/Logo.png";
import styles from "./Footer.module.css";
import git from "../../assets/icons/github.png";
import facebook from "../../assets/icons/facebook.png";
import insta from "../../assets/icons/instagram.png";

function Footer() {
    return (
        <footer>
            <div className={styles.footercategory}>
                <div className={styles.footerlogo}>
                    <div className={styles.logotype}>
                        <img src={logo} alt="Логотип" />
                        <p className={styles.namelogo}> <span>Tech</span> Encyclopedia </p>
                    </div>
                    <p className={styles.target}> Досліджуй    →   Навчайся   →   Будуй </p>
                </div>
                <div className={styles.footerdodat}>
                    <div className={styles.dodatpages}>
                        <span> Сторінки: </span>
                        <ul>
                            <li> Головна </li>
                            <li> Технології </li>
                        </ul>
                    </div>
                    <div className={styles.dodatcategory}>
                        <span> Категорії: </span>
                        <ul>
                            <li> Frontend </li>
                            <li> Backend </li>
                            <li> DataBase </li>
                            <li> Languages </li>
                            <li> DevOps </li>
                            <li> Tools </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.mediaicons}>
                    <img src={git} alt="GitHub" />
                    <img src={facebook} alt="Face-book" />
                    <img src={insta} alt="Instagram" />
                </div>  
            </div>

            <p className={styles.signature}> © 2026 Encyclopedia of Technologies </p>
        </footer>
    );
}

export default Footer;