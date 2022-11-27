import styles from "./Post.module.css";

import janeCooper from "../assets/jane-cooper.png";
import devonLane from "../assets/devon-lane.png";
import jennyWilson from "../assets/jenny-wilson.png";
import bessieCooper from "../assets/bessie-cooper.png";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src={janeCooper} />
          <div className={styles.authorInfo}>
            <strong>Jane Cooper</strong>
            <span>Dev Front-End</span>
          </div>
        </div>

        <time
          title="26 de Novembro de 2022 as 20:32"
          dateTime="2022-11-26 20:23:12"
        >
          Publicado a 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉{' '}<a href="">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe seu comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>

      </form>
    </article>
  );
}
