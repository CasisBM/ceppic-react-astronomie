import { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default function ContactForm() {
   const [titre, setTitre] = useState();
   const [article, setArticle] = useState();
   const [submitted, setSubmitted] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         await addDoc(collection(db, "articles"), {
            titre: titre,
            article: article,
            created: Timestamp.now(),
         });
         setSubmitted(true);
      } catch (err) {
         console.log(err);
      }
   };

   if (submitted) {
      return (
         <>
        <p> Article ajouté.</p>
         </>
      );
   }

   return (
      <div className="articles">
      <h1>Contact</h1>
      <Link to="/article">Liste des articles</Link>
      <form method="POST" onSubmit={handleSubmit}>
      <div>
      <input
      type="text"
      name="titre"
      placeholder="Votre titre"
      required
      onChange={(event) => setTitre(event.target.value)}
      />
      </div>
      <div>
      <input
      type="text"
      name="article"
      placeholder="Votre article"
      required
      onChange={(e) => setArticle(e.target.value)}
      />
      </div>
      
      <div>
      <button type="submit">Ajouter l'article</button>
      </div>
      </form>
      </div>
   );
}