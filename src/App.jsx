import { Post } from "./Post";

import './styles.css'

export function App() {
  return (
    <div>
      <Post 
        author="Diego Fernandes" 
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, dignissimos corrupti? Magnam quaerat illum maiores tenetur perspiciatis labore provident, officia impedit dignissimos? Numquam consequatur fugiat optio minima asperiores voluptatem ex!" 
      />
      <Post 
        author="Gabriel Buzzi"
        content="Um novo post muito legal"
      />
      
    </div>
  );
}
