import { Link } from 'react-router-dom'
const Bloglist = function ({ blogs, title }) {
    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>

                        <p>{title}</p>
                        <h2>{blog.title}</h2>
                        <h3>Author:{blog.author}</h3>
                    </Link>

                </div>
            ))}
        </div>
    )
}
export default Bloglist