import Link from "next/link";

export default ({ pathname }) => (
  <div className="container">
    <div>
      Logo
    </div>

    <div>
      <div>
        Daddy cool
      </div>
      <div>
        Free audio books
      </div>
    </div>

    <div className="navigation">
      <Link prefetch href="/">
        <a className={pathname === "/" && "is-active"}>Search</a>
      </Link>

      <Link prefetch href="/about">
        <a className={pathname === "/about" && "is-active"}>Your audiobooks</a>
      </Link>
    </div>

    <div className="row auth">
      <div>
        Log in
      </div>

      <div>
        Sign up
      </div>
    </div>

    <style jsx>{`
      header {
        margin-bottom: 25px;
      }
      a {
        font-size: 26px;
        margin-right: 25px;
        text-decoration: none;
        color: #ccc;
      }
      .is-active {
        color: #111;
      }
      .row{
        display: flex;
        flex-direction: row;
      }
      .container {
        display: flex;
        flex-direction: row;
        flex: 1;
        justify-content: space-between;
        align-items: center;
      }
      .navigation {
        flex: 1;
      }
      .auth {
        align-self: flex-end;
      }
  `}</style>
  </div>
);
