import React from "react";

const Footer = () => {
  const footerStyle = {
    color: "white",
  };
  return (
    <footer className="container">
      <nav
        className="navbar fixed-bottom stickyFooter navbar-expand-lg"
        style={footerStyle}
      >
        <div className="navbar-brand">© 2020 Brad Williams</div>
      </nav>
    </footer>
  );
};
export default Footer;
