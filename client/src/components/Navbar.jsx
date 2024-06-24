import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Quote App</Link>
        <ul className="flex space-x-4">
          {
            token ? 
            <>
            <li><Link to="/profile" className="hover:underline">Profile</Link></li>
            <li><Link to="/create" className="hover:underline">Create</Link></li>
            <li><button onClick={() => {
              localStorage.removeItem('token')
              navigate('/login')
            }} className="hover:underline bg-red-400 text-white">Logout</button></li>
            </>
            : 
            <>
              <li><Link to="/login" className="hover:underline">Login</Link></li>
              <li><Link to="/signup" className="hover:underline">Signup</Link></li>
            </>
          }
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
