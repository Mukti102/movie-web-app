import React from "react";

function Footer() {
  return (
    <footer className="footer justify-center footer-center sm:hidden flex p-4 bg-base-300  text-base-content">
      <aside className="text-[12px]">
        <p>
          Copyright © 2023 - All right reserved by Mukti . <br /> source code is
          available on{" "}
          <a
            href="https://github.com/Mukti102/movie-web-app"
            className="text-pink-600 underline"
          >
            Github
          </a>
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
