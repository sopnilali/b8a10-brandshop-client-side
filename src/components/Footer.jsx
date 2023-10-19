import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <>
          <footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <aside>
    <p>Copyright © 2023 - All right reserved by <Link className="link-success font-medium" to="/">MobileMaya</Link> - Created by Sopnil Ali</p>
  </aside>
</footer>  
        </>
    );
};

export default Footer;