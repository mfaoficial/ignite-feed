import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

const post = [
  {
    id: 1,
    author: {
      avatarUrl: './src/assets/jane-cooper.png',
      name: 'Jane Cooper',
      role: 'Dev Front-End'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-11-27 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: './src/assets/devon-lane.png',
      name: 'Devon Lane',
      role: 'Dev Front-End'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋' },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻' },
      { type: 'paragraph', content: 'Acesse e deixe seu feedback' },
      { type: 'link', content: '👉 devonlane.design' },
    ],
    publishedAt: new Date('2022-11-27 21:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}
