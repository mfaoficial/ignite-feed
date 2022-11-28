import styles from './Comment.module.css';

import janeCooper from "../assets/jane-cooper.png";
import devonLane from "../assets/devon-lane.png";
import jennyWilson from "../assets/jenny-wilson.png";
import bessieCooper from "../assets/bessie-cooper.png";
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Comment({ content, onDeleteComment }) {
    function handleDeleteComment() {
        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/mfaoficial.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Matheus Aquino (Você)</strong>
                            <time title="26 de Novembro de 2022 as 20:32" dateTime="2022-11-26 20:23:12">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}