import React from "react";
import CopyrightIcon from "@material-ui/icons/Copyright";
import "../css/footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer>
        <p className="footer">
          copyright <CopyrightIcon /> {year}
        </p>
      </footer>
    </>
  );
};

export default Footer;
