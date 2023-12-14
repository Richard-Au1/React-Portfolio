export default function Nav({ links }) {
    return (
      <nav style={{display: 'flex', justifyContent: "right", background: 'turquoise'}} >
        <div >
            <ul style={{margin: '20px' }} >
              {links.map((link) => link)}
            </ul>
        </div>
      </nav>
    );
  }