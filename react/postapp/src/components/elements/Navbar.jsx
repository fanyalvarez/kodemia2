import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-indigo-800">
        <ul className="flex justify-between py-5 px-10 rounded-lg text-lg">
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/createPost"> Create Post</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
