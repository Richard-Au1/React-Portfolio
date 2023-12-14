export default function Nav({ links }) {
    return (
      <nav className='navbar navbar-expand-lg'>
        <div className="container-fluid">
            <ul style={{margin: '20px' }} >
              {links.map((link) => link)}
            </ul>
        </div>
      </nav>
    );
  }