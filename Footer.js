import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer__title">Follow Us</h3>

      <div className="footer__social">
        <Link to="https://www.facebook.com" className="footer__social-link">
          <i className="bx bxl-facebook"></i>
        </Link>
        <Link to="https://www.instagram.com" className="footer__social-link">
          <i className="bx bxl-instagram"></i>
        </Link>
        <Link to="https://www.tiktok.com" className="footer__social-link">
          <i className="bx bxl-tiktok"></i>
        </Link>
        {/* Add more social links */}
        <Link to="https://www.twitter.com" className="footer__social-link">
          <i className="bx bxl-twitter"></i>
        </Link>
        <Link to="https://www.linkedin.com" className="footer__social-link">
          <i className="bx bxl-linkedin"></i>
        </Link>
      </div>

      
    </footer>
  );
};

export default Footer;