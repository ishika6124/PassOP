import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../redux/auth/authSlice';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <header className="bg-gray-800 te xt-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-gray-300">
          PassOp
        </Link>
        <ul className="flex space-x-4">
          {user ? (
            <li>
              <button
                className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                onClick={onLogout}
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white py-2 px-4"
                >
                  <FaSignInAlt />
                  <span>Login</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white py-2 px-4"
                >
                  <FaUser />
                  <span>Register</span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Header;
