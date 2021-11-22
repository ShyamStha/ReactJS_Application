import { Link } from 'react-router-dom'
const Navbar = function () {
    return (
        <nav className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    )
}
export default Navbar