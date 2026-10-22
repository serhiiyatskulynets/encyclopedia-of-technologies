import { NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from "./Technologies.module.css";
import technologies from "../../data/technologies.js";

function Technologies() {
    return(
        <div className={styles.main}>
            <Header />

            <div className={styles.techno}>
                <div className={styles.category}>
                    <p> Категорії </p>

                    <ul>
                        <li> ALL </li>
                        <li> Frontend </li>
                        <li> Backend </li>
                        <li> Languages </li>
                        <li> DataBase </li>
                        <li> Devops </li>
                        <li> Tools </li>
                    </ul>

                </div>

                <div className={styles.technologies}>
                    <div className={styles.search}>
                        <p className={styles.title}> Technologies <br /> <span>Ознайомтеся з нашою добіркою технологій</span> </p>

                        <input type="text" placeholder="Знайти технологію..." />
                    </div>

                    <div className={styles.categoryblock}>
                        <p> ALL </p>
                        <p> Frontend </p>
                        <p> Backend </p>
                        <p> Languages </p>
                        <p> DataBase </p>
                        <p> Devops </p>
                        <p> Tools </p>
                    </div>

                    <div className={styles.technologiescard}>
                         {technologies.map((technology) => (
                            <article className="technology-card" key={technology.id}>
                                <div className={styles.titlecard}>
                                    <img src={technology.logo} alt={technology.name}/>

                                    <div className={styles.cardtext}>
                                        <h2>{technology.name}</h2>
                                        <span>{technology.type}</span>
                                    </div>
                                </div>

                                <p>{technology.description}</p>

                                <NavLink to={`/technologiesdetailes/${technology.slug}`} className={styles.link}> Більше → </NavLink>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technologies;