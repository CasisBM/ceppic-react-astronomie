import "./Footer.css";
export default function Footer() {
  const CurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <footer>
        <p>&copy; - {CurrentYear()}</p>
      </footer>
    </>
  );
}