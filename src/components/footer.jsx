const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content items-center p-4 z-50">
      <aside className="grid-flow-col items-center">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10
          10-4.477 10-10S17.523 2 12 2zM11 17.93A7.962
          7.962 0 0 1 6.07 13H11v4.93zm0-6.93H5.05a8.004
          8.004 0 0 1 1.554-3.584L11 11V11zm2 0V6.07A7.962
          7.962 0 0 1 17.93 11H13zm0 2h4.93a8.004 8.004
          0 0 1-1.554 3.584L13 13z" />
        </svg>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        {/* social icons */}
      </nav>
    </footer>
  );
};

export default Footer;
