import { Header } from "./components/Header";
import { Post } from "./Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, dignissimos corrupti? Magnam quaerat illum maiores tenetur perspiciatis labore provident, officia impedit dignissimos? Numquam consequatur fugiat optio minima asperiores voluptatem ex!"
          />
          <Post author="Gabriel Buzzi" content="Um novo post muito legal" />
        </main>
      </div>
    </div>
  );
}
