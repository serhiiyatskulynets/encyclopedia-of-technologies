import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.css";
import laptop from "../../assets/images/Laptop_Lang.png";
import frontend from "../../assets/images/frontend.png";
import backend from "../../assets/images/backend.png";
import languages from "../../assets/images/languages.png";
import data from "../../assets/images/database.png";
import devops from "../../assets/images/devops.png";
import react from "../../assets/images/react-icon.png";
import reactex from "../../assets/images/react-example.png";

function Home() {
    return (
        <body>
            <Header />

            <div className={styles.representation}>
                <div className={styles.represtext}>
                    <p className={styles.target}> Досліджуй    →   Навчайся   →   Будуй </p>
                    <h1> Encyclopedia of <span>Technologies</span> </h1>
                    <p className={styles.description}> Дізнайтеся про сучасні технології, мови програмування та інструменти </p>
                </div>
                
                <img src={laptop} alt="Ноутбук" />
            </div>

            <div className={styles.statics}>
                <div className={styles.staticblock}>
                    <span> 30+ </span>
                    <p> Технологій </p>
                </div>
                <div className={styles.staticblock}>
                    <span> 6+ </span>
                    <p> Категорій </p>
                </div>
                <div className={styles.staticblock}>
                    <span> 30+ </span>
                    <p> Прикладів коду </p>
                </div>
                <div className={styles.staticblock}>
                    <span> 80+ </span>
                    <p> Навчальних тем </p>
                </div>
            </div>

            <div className={styles.category}>
                <h2> Популярні категорії </h2>

                <div className={styles.popularcategory}>
                    <div className={styles.categoryblock}>
                        <img src={frontend} alt="Фронтенд" className={styles.categoryimg} />
                        <span>Frontend</span>
                        <p> Зовнішній інтерфейс </p>
                    </div>
                    <div className={styles.categoryblock}>
                        <img src={backend} alt="Бекенд" className={styles.categoryimg} />
                        <span>Backend</span>
                        <p> Внутрішня логіка </p>
                    </div>
                    <div className={styles.categoryblock}>
                        <img src={languages} alt="Мови програмування" className={styles.categoryimg} />
                        <span>Languages</span>
                        <p> Створення коду </p>
                    </div>
                    <div className={styles.categoryblock}>
                        <img src={data} alt="База Даних" className={styles.categoryimg} />
                        <span>Databases</span>
                        <p> Управління даними </p>
                    </div>
                    <div className={styles.categoryblock}>
                        <img src={devops} alt="DevOps" className={styles.categoryimg} />
                        <span>DevOps</span>
                        <p> Автоматизація </p>
                    </div>
                </div>
            </div>

            <div className={styles.technologies}>
                <h2> Популярні технології </h2>

                <div className={styles.populartechn}>
                    <div className={styles.technblock}>

                    </div>
                    <div className={styles.technblock}>

                    </div>
                    <div className={styles.technblock}>

                    </div>
                </div>
            </div>

            <div className={styles.recomendation}>
                <div className={styles.recomendationblock}>
                    <div className={styles.recicons}>
                        <img src={react} alt="React-icons" />
                    </div>
                    <div className={styles.rectext}>
                        <p className={styles.rectitle}> Рекомендована технологія </p>
                        <h3> React </h3>
                        <span> Frontend library </span>
                        <p className={styles.text}> React — це популярна JavaScript-бібліотека для 
                            створення інтерфейсів, яка використовує 
                            компонентний підхід для розбиття сайтів на 
                            ізольовані частини. Завдяки віртуальному 
                            DOM вона забезпечує високу продуктивність і 
                            швидке оновлення сторінок.   
                        </p>
                        <button> Більше → </button>
                    </div>
                    <div className={styles.recexample}>
                        <div className={styles.exampleblock}>
                            <p> ● ● ● </p>
                            <img src={reactex} alt="React код" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.why}>
                <h2> Чому ця Енциклопедія? </h2>

                <div className={styles.descriptions}>
                    <div className={styles.descriptblock}>
                        <p className={styles.title}> Learn </p>
                        <p className={styles.textwhy}> Отримуй коротку інформацію про мови 
                            програмування, фреймворки, бібліотеки, бази даних 
                            та інструменти. Для кожної технології можна 
                            переглянути її призначення, основні можливості, 
                            переваги та приклади використання. 
                        </p>
                    </div>
                    <div className={styles.descriptblock}>
                        <p className={styles.title}> Explore </p>
                        <p className={styles.textwhy}> Використовуй пошук і фільтри, щоб швидко 
                            знайти потрібну технологію. Можна переглядати 
                            окремо Frontend, Backend, Databases, DevOps, Mobile 
                            та інші категорії.     
                         </p>
                    </div>
                    <div className={styles.descriptblock}>
                        <p className={styles.title}> Examples </p>
                        <p className={styles.textwhy}> Для технологій можна показувати фрагменти коду, 
                            команди встановлення та базові приклади. 
                            Це допомагає не тільки прочитати теорію, 
                            а й побачити, як технологія використовується 
                            на практиці.
                        </p>
                    </div>
                    <div className={styles.descriptblock}>
                        <p className={styles.title}> Build </p>
                        <p className={styles.textwhy}> Сайт допомагає побачити зв'язки між технологіями 
                            та зрозуміти, з чого складається реальний проєкт. 
                            Наприклад : 
                            HTML + CSS + JavaScript → React → Node.js → Database.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />

        </body>
    );
}

export default Home;