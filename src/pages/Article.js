import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import "./Article.css";

export default function Article() {
  const [articles, setArticle] = useState([]);

  useEffect(() => {
    const articlesRef = query(
      collection(db, "articles"),
      orderBy("created", "desc")
    );
    onSnapshot(articlesRef, (snapshot) => {
      setArticle(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <>
    <div className="container">
      <h1>Liste des articles</h1>
        {articles.map((article) => (
          <ul className="box">
            <li key={article.id}>
              <div>{article.data.titre}</div>
              <div>{article.data.article}</div>
            </li>
          </ul>
        ))}
           </div>
    </>
  );
}
