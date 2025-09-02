import "../Footer/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__name">Developed by Drea Vega</p>
      <p className="footer__year">
        &copy; {currentYear}</p>
    </footer>
  );
}

export default Footer;