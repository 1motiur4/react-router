import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className='section'>
      <h2>404 error!!</h2>
      <p>page not found womp womp</p>
      <Link to="/">Go back home</Link>
    </section>
  );
};
export default Error;
