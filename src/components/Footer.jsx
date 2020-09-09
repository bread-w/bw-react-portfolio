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
        <div
          className="navbar-brand"
          style={{
            backgroundColor: "#37474f",
            padding: "5px",
            borderRadius: "5%",
            opacity: .5,
            position: "relative"
          }}
        >
          © 2020 Brad Williams
        </div>
      </nav>
    </footer>
  );
};
export default Footer;
