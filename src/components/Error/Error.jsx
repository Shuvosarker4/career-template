import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link>
        <button className="btn btn-primary">Home</button>
      </Link>
    </div>
  );
};

export default Error;
