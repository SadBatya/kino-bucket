import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={'/favourites'}>Favourites</Link>
          </li>
          <li>
            <Link to={'/'}>Film List</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}