import { Link } from 'react-router-dom'
const Notfound = function () {
    return (
        <div className="not-found">
            <h2>This page is not found, sorry:(</h2>
            <Link to='/'>Back to the homepage...</Link>
        </div>
    )
}
export default Notfound