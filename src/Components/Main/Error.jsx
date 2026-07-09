import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="container py-5 text-center">
      <h1 className="text-danger mb-3">404 - Page Not Found</h1>
      <p className="text-secondary mb-3">
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="btn btn-dark">
        Back Home
      </Link>
    </section>
  );
};

export default Error;