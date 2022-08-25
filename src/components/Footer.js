import "./Footer.css";
export default function Footer() {
  const CurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
    <div className="footer">
          <p>&copy; - {CurrentYear()}</p>
    </div>

    </>
  );
}