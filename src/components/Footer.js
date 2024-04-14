const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, Made by <strong>Tanmay0799</strong>
      </p>
    </footer>
  );
};

export default Footer;
