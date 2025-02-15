import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Course Name & Level' },
    { path: '/video-description', label: 'Video & Description' },
    { path: '/additional-content', label: 'Additional Content' },
    { path: '/assignments', label: 'Assignments' },
    { path: '/feedback', label: 'Feedback' },
  ];

  return (
    <nav className="bg-primary p-4">
      <div className="container mx-auto">
        <ul className="flex flex-wrap gap-4">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`hover:text-secondary transition-colors ${
                  location.pathname === link.path
                    ? 'text-white font-bold'
                    : 'text-white/80'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;