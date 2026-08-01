import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 | Steve Pritchard</title>
        <meta
          name="description"
          content="The page you're looking for could not be found."
        />
      </Helmet>

      <div className="container py-5 text-center">
        <h1 className="display-1 fw-bold">404</h1>

        <h2 className="mb-3">Page Not Found</h2>

        <p className="lead mb-4">
          Sorry, the page you're looking for doesn't exist or may have been moved.
        </p>

        <Link to="/" className="btn btn-primary">
          Return Home
        </Link>
      </div>
    </>
  );
}

export default NotFound;