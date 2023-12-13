export default function Nav({ links }) {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="">
            <ul className="">
              {links.map((link) => link)}
            </ul>
        </div>
      </nav>
    );
  }