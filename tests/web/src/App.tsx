import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";

import api from "./api";
import "./App.css";

interface Post {
  content: string;
  Title: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    async function getPosts() {
      const { data: posts } = await api.get("/posts");
      setPosts(posts);
    }
    getPosts();
  }, []);
  return (
    <div style={{ maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
      {posts.map(post => (
        <div style={{ marginTop: 20 }}>
          <Markdown
            key={post?.Title}
            escapeHtml={true}
            source={post.content}
            transformImageUri={value =>
              `https://api-blog-lucas.herokuapp.com${value}`
            }
          />
          <hr/>
        </div>
      ))}
    </div>
  );
}

export default App;
