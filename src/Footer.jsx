import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer class="footer_dsn">
        <p> copyright ©️ {year} </p>
      </footer>
    </>
  );
};

export default Footer;
