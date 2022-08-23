import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav>
        <Link to="/article">Articles</Link>
        <Link to="/ajoutArticle">Ajouter Article</Link>
        <Link to="/aPropos">A Propos</Link>

      </nav>
      <Outlet/>
    </>
  );
}