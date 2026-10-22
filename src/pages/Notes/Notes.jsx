import styles from "./Notes.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import notes from "../../assets/icons/notes.png";

function Notes() {
    return (
        <div className={styles.notespage}>
            <Header />

            <div className={styles.blocknotes}>  
                <div className={styles.folder}>
                    <p> ← Назад </p>

                    <button type="submit"> + </button> 
                </div>

                <div className={styles.textnotes}>
                    <div className={styles.title}>
                        <div className={styles.imgnotes}>
                            <img src={notes} />
                        </div> 
                        <div className={styles.titletext}>
                            <h1> Нотатки </h1>
                            <p> Зберігайте важливу інформацію, ідеї та корисні посилання. <br /> Створюйте нотатки, редагуйте та керуйте ними </p>
                        </div>
                    </div>


                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Notes;