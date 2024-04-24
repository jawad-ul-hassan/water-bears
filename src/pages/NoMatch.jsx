import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <main className="no-match">
      <h1 className="no-match-title">404 - Page Not Found!</h1>
      <div>
        <p className="no-match-text">An error has occured, to continue:</p>
        <p className="no-match-text">* Return to our homepage.</p>
      </div>
      <Link to="/" className="no-match-btn">
        Home
      </Link>
    </main>
  );
};

export default NoMatch;
