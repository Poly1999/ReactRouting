import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>

      <Link to='/'>Press go back to the homepage.</Link>
    </div>
  );
};

export default NotFound;
