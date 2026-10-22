import styles from"./Login.module.css";
import logo from "../../assets/icons/Logo.png";
import laptop from "../../assets/images/web-development.webp";
import user from "../../assets/icons/user.png";
import google from "../../assets/icons/google.png";
import git from "../../assets/icons/github.png";

function Login() {
    return (
        <div className={styles.registr}>
            <div className={styles.welcome}>
                <div className={styles.logo}>
                    <img src={logo} alt="Логотип" />
                    <p> <span>Tech</span> Encyclopedia </p>
                </div>

                <div className={styles.title}>
                    <p className={styles.target}> Досліджуй    →   Навчайся   →   Будуй </p>
                    <p className={styles.titletext}> Welcome to <br /> <span>Tech</span> Encyclopedia </p>
                </div>

                <img src={laptop} alt="" className={styles.laptopimg} />

                <div className={styles.for}>
                    <img src={user} />
                    <p> For Developers </p>
                </div>
            </div>
            
            <div className={styles.login}>
                <p className={styles.in}> Вже є акаунт? <span>Увійти</span> </p>

                <div className={styles.loginblock}>
                    <div className={styles.logintitle}>
                        <h3> Login </h3>
                        <p className={styles.subtitle}> Увійдіть у свій обліковий запис, щоб продовжити </p>
                    </div>

                    <div className={styles.loginform}>
                        <p> Електронна почта </p>
                        <input type="email" placeholder="Введіть вашу почту..." />
                        <p> Пароль </p>
                        <input type="password" placeholder="Введіть пароль..." />
                    </div>

                    <div className={styles.paroloptions}>
                        <div className={styles.remember}>
                            <input type="checkbox" />
                            <p> Запам’ятати пароль </p>
                        </div>

                        <p className={styles.forgot}> Забули пароль? </p>
                    </div>

                    <div className={styles.loginbtn}>
                        <button type="submit"> Увійти </button>
                    </div>

                    <div className={styles.social}>
                        <p> Продовжити </p>

                        <div className={styles.media}>
                            <div className={styles.mediablock}>
                                <img src={google} />
                                <p> Google </p>
                            </div>
                            <div className={styles.mediablock}>
                                <img src={git} />
                                <p> GitHub </p>
                            </div>
                        </div>

                        <div className={styles.line}></div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;