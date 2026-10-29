import styles from "../NotFound/NotFound.module.css";
import mem from "../../assets/images/Вінсент Вега.png";

function NotFound() {
  return (
    <div className={styles.error}>
      <div className={styles.mem}>
        <img src={mem} alt="Зображення мема" />
      </div>

      <div className={styles.text}>
        <h1> 404 </h1>
        <p> Сторінки не знайдено </p>
        <span>
          {" "}
          Можливо, посилання неправильне або сторінку було переміщено. <br /> Не
          хвилюйся — навіть у найкращих системах трапляються помилки.{" "}
        </span>
        <a href="/"> Повернутися на головну </a>
      </div>
    </div>
  );
}

export default NotFound;
