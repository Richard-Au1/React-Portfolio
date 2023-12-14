export default function Nav({ links }) {
    return (
      <nav>
        <div class="container-fluid">
            <ul style={{margin: '20px', backgroundColor: 'turquoise'}} >
              {links.map((link) => link)}
            </ul>
        </div>
      </nav>
    );
  }