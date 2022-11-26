import { PencilLine } from 'phosphor-react';

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1562176564-0280c730d87c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <img src="https://github.com/mfaoficial.png" className={styles.avatar} />

        <strong>Matheus Aquino</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
            <PencilLine 
                size={20}
            />
            Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}