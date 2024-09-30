import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <div className="copy">
        Desenvolvido com ❤️ por{" "}
        <a
          href="https://lucas-ponciano.soukick.com.br/"
          target="_blank"
          rel="noreferrer"
        >
          poncianodev
        </a>
      </div>

      <div className="social-links">
        <a
          href="https://www.instagram.com/poncianodev/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.github.com/poncianodev"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/lucas-ponciano"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
}
