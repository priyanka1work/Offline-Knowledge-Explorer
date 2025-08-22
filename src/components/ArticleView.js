import React, { useEffect, useState } from "react";
import { getArticle, saveArticle } from "../idb";

export default function ArticleView({ id }) {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const cached = await getArticle(id);
      if (cached) setArticle(cached);

      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await res.json();
      setArticle(data);
      saveArticle(data);
    }
    fetchData();
  }, [id]);

  if (!article) return <p>Loading article...</p>;

  return (
    <div>
      <h3>{article.title}</h3>
      <p>{article.body}</p>
    </div>
  );
}